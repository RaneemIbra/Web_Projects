import { Component, AfterViewInit } from '@angular/core';
import { Book } from '../book/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements AfterViewInit {
  constructor(private router: Router) {}

  navigateToPreview(book: Book): void {
    this.router.navigate(['/preview', book.title]);
  }

  handleAddToCart(book: Book): void {
    console.log('Adding to cart:', book);
  }

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
}
