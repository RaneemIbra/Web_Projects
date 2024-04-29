import { Component, AfterViewInit } from '@angular/core';
import { Book } from '../book/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements AfterViewInit {
  constructor(private router: Router) {}

  navigateToPreview(book: Book): void {
    this.router.navigate(['/preview', book.title]);
  }
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }
  books1: Book[] = [
    {
      imageSrc: '../../assets/crown.png',
      title: 'Crown',
      cssClass: 'Crown-style',
      price: '10$',
      preview:
        'Lonely is the road to peak beyond the cosmos, though shall it not be, yet it always was. Taken aback by the smoke and mirrors, thou should stand tall before the smoke suffocates and the mirrors break. "Heavy is the head that wears the crown." But does thy strength befits a crown?',
      preview2:
        'The crown demands the head that befits to stand inside the smoke, and behold the reflection in the mirror, to seek for the answer inside the soul. The answer of the unsolved mystery. Heavy is the head that wears the crown, but does thy strength befits a crown?',
    },
    {
      imageSrc: '../../assets/pendant.png',
      title: 'Pendant',
      cssClass: 'Pendant-style',
      price: '10$',
      preview:
        'I wore it around my neck like the necklace I always wished for, an amulet that would stun lock me in a dimension I never thought existed. What was golden and shined lured me to a black and dark place, it didn’t spare my soul and it hooked me.',
      preview2:
        'I took one last look in the mirror and chose to wear the pendant willingly. The necklace consumed a portion of my heart, my mind and my soul, it stored them within and kept them from seeing the light of day, still I wonder, will I remain bound forever?',
    },
    {
      imageSrc: '../../assets/ring.png',
      title: 'Ring',
      cssClass: 'Ring-style',
      price: '10$',
      preview:
        'Countless time I have been saved, countless times did I not deserve it. Was it luck that saved me or was it sympathy?But how can we gauge the merit of someone that wears the ring of struggles?',
      preview2:
        'In a fractured world you chose not to look both ways. In this doomed age you walked a new path, you stood among the starts and wept, only to find that they listened all along, and the void existed inside you. However, the void will collapse within your soul and faith will replace it.<br><br>Countless times would faith save you, and countless times did you deserve it. Hope is what breaks the shackles and crushes the infamous ring of struggles. So tell me, do you have faith in what is written in the stars?',
    },
  ];
  books2: Book[] = [
    {
      imageSrc: '../../assets/The broken chapter in wind.jpg',
      title: 'The Broken Chapter In Wind',
      cssClass: 'Book1-style',
      price: '50$',
      preview:
        'Chapter one: The mortal reminder.<br><br> He approaches the entrance, the kid was exhausted from working at a blacksmith shop on the other side of the small town where he lived, Lyber. The child reaches for the doorknob and throws it open, greets his grandmother impolitely, and heads to climb the staircase with small steps to his room, barely able to move after a long day.',
      preview2: `The eastern wind returned carrying regrets and a heavy past; it couldn't bear any more or it would fall apart.The wind arrived with a small breeze, hoping to repair the ancient events, hoping to restore everything to their former glory.`,
    },
    {
      imageSrc: '../../assets/Back To A Broken Chapter.jpg',
      title: 'Back To A Broken Chapter',
      cssClass: 'Book2-style',
      price: '50$',
      preview:
        'Chapter one: The rise of the wicked beast. Windows were close for demonic powers to tiptoe into the land of Syndor, but the devil’s scream broke the glass and entered uninvited. Jero, the noble fighter, took the opportunity from his son to possess an immense power of pure evil. The blue skies turned into grey, the green grass turned yellow, and the heart was without a doubt black. Birds stopped singing, and the willows stopped swaying, but the heart was pumping darkness.',
      preview2:
        'After a few seconds of silence, the wind deity picked up the talisman, and he hung it on the new figure that turned into stone, as a tribute for his master and his father. ‘My apologies, father.’ He said, with a tear in his eyes, and sat there in silence to pay his respect and mourn his loss.',
    },
    {
      imageSrc: '../../assets/The Last of All chapters.png',
      title: 'The Last Of All Chapters',
      cssClass: 'Book3-style',
      price: '50$',
      preview:
        'The sentinel left the western lands and returned to the gates he is keeping, and now Jero is standing alone, looking forward to enter the labyrinth. The man read the sign outside. ‘The wind is a blocked road, unless you are the storm.’ Jero mumbled as he approached the entrance. He dragged his blade on the floor and scraped it with the sharp edge, his power was being depleted with each step he takes, but the will to reach the end goal was big.',
      preview2:
        'He crawled out of the shadows and revealed himself. Boreas was the one protecting the crimson blood talisman, but he was also protecting Jero’s life from being completely possessed by the evil powers.',
    },
  ];
  books3: Book[] = [
    {
      imageSrc: '../../assets/archangel.jpg',
      title: 'The Archangel',
      cssClass: 'Archangel-style',
      price: '10$',
      preview:
        'Laying on the death bed, with no tears left to shed. Thoughts became swarming, inside that crowded head. The angel of death came. There was a dept to claim. I recalled the mistakes and the shame. But there was no one else to blame.',
      preview2:
        'In his eyes there was that look, I held his hand and it I shook, I saw all the lives that he took. And I knew. Death, I can’t rook. He added ‘I came in peace, surviving I want you to cease. The soul, you should release. Don’t make me repeat, please.’',
    },
    {
      imageSrc: '../../assets/ThePhilosophy.jpg',
      title: 'The Philosophy Of Everything',
      cssClass: 'Philosophy-style',
      price: '50$',
      preview:
        'Differences. Where to start? How to discuss? The issues of starting a chapter of nonsense. It all started when the young mind began to think outside the living/dead world, it all started when the eyes beheld a visible truth and an accepted theory that the young mind can process.',
      preview2:
        'An abstract about the main idea in this chapter: Everything around us, every act, every affection, and every surrounding object either it was physical or not. All of these affect our behavior and the change in it, which causes the personality and mind set to take the shape of the environment. A mix of every aspect will give us a new shape of personality that even identical twins can be different from each other.',
    },
    {
      imageSrc: '../../assets/imposter.png',
      title: 'The Imposter',
      cssClass: 'Imposter-style',
      price: '10$',
      preview:
        'In search for love to fill the void within the heart, the raw emptiness kept growing like a seed that was planted long ago and has been irrigated with the tainted blood of loneliness. But the seed grew to become a flower, a flower that was met with a smile and kindness, yet there was no courage to pick that flower.',
      preview2:
        'Love is the hardest emotion to control, and you can only guide it when you close your eyes, hold your breath and let your heart feel, but you must remember, when you love, love with all your heart, and when you hug, hold tight with passion, and when you look your whole world in the eyes, let yours glimmer with the sparkles of love.',
    },
  ];

  handleAddToCart(book: Book): void {
    console.log('Adding to cart:', book);
  }
}
