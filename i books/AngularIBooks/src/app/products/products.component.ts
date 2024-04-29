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
    },
    {
      imageSrc: '../../assets/pendant.png',
      title: 'Pendant',
      cssClass: 'Pendant-style',
      price: '10$',
      preview:
        'I wore it around my neck like the necklace I always wished for, an amulet that would stun lock me in a dimension I never thought existed. What was golden and shined lured me to a black and dark place, it didn’t spare my soul and it hooked me.',
    },
    {
      imageSrc: '../../assets/ring.png',
      title: 'Ring',
      cssClass: 'Ring-style',
      price: '10$',
      preview:
        'Countless time I have been saved, countless times did I not deserve it. Was it luck that saved me or was it sympathy?But how can we gauge the merit of someone that wears the ring of struggles?',
    },
  ];
  books2: Book[] = [
    {
      imageSrc: '../../assets/The broken chapter in wind.jpg',
      title: 'The Broken Chapter In Wind',
      cssClass: 'Book1-style',
      price: '50$',
      preview:
        'Chapter one: The mortal reminder. He approaches the entrance, the kid was exhausted from working at a blacksmith shop on the other side of the small town where he lived, Lyber. The child reaches for the doorknob and throws it open, greets his grandmother impolitely, and heads to climb the staircase with small steps to his room, barely able to move after a long day.',
    },
    {
      imageSrc: '../../assets/Back To A Broken Chapter.jpg',
      title: 'Back To A Broken Chapter',
      cssClass: 'Book2-style',
      price: '50$',
      preview:
        'Chapter one: The rise of the wicked beast. Windows were close for demonic powers to tiptoe into the land of Syndor, but the devil’s scream broke the glass and entered uninvited. Jero, the noble fighter, took the opportunity from his son to possess an immense power of pure evil. The blue skies turned into grey, the green grass turned yellow, and the heart was without a doubt black. Birds stopped singing, and the willows stopped swaying, but the heart was pumping darkness.',
    },
    {
      imageSrc: '../../assets/The Last of All chapters.png',
      title: 'The Last Of All Chapters',
      cssClass: 'Book3-style',
      price: '50$',
      preview:
        'The sentinel left the western lands and returned to the gates he is keeping, and now Jero is standing alone, looking forward to enter the labyrinth. The man read the sign outside. ‘The wind is a blocked road, unless you are the storm.’ Jero mumbled as he approached the entrance. He dragged his blade on the floor and scraped it with the sharp edge, his power was being depleted with each step he takes, but the will to reach the end goal was big.',
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
    },
    {
      imageSrc: '../../assets/ThePhilosophy.jpg',
      title: 'The Philosophy Of Everything',
      cssClass: 'Philosophy-style',
      price: '50$',
      preview:
        'Differences. Where to start? How to discuss? The issues of starting a chapter of nonsense. It all started when the young mind began to think outside the living/dead world, it all started when the eyes beheld a visible truth and an accepted theory that the young mind can process.',
    },
    {
      imageSrc: '../../assets/imposter.png',
      title: 'The Imposter',
      cssClass: 'Imposter-style',
      price: '10$',
      preview:
        'In search for love to fill the void within the heart, the raw emptiness kept growing like a seed that was planted long ago and has been irrigated with the tainted blood of loneliness. But the seed grew to become a flower, a flower that was met with a smile and kindness, yet there was no courage to pick that flower.',
    },
  ];

  handleAddToCart(book: Book): void {
    console.log('Adding to cart:', book);
  }
}
