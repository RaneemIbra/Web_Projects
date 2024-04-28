import { AfterViewInit, Component } from '@angular/core';
import { Book } from '../book/book.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements AfterViewInit {
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
    },
    {
      imageSrc: '../../assets/pendant.png',
      title: 'Pendant',
      cssClass: 'Pendant-style',
      price: '10$',
    },
    {
      imageSrc: '../../assets/ring.png',
      title: 'Ring',
      cssClass: 'Ring-style',
      price: '10$',
    },
  ];
  books2: Book[] = [
    {
      imageSrc: '../../assets/The broken chapter in wind.jpg',
      title: 'The Broken Chapter In Wind',
      cssClass: 'Book1-style',
      price: '50$',
    },
    {
      imageSrc: '../../assets/Back To A Broken Chapter.jpg',
      title: 'Back To A Broken Chapter',
      cssClass: 'Book2-style',
      price: '50$',
    },
    {
      imageSrc: '../../assets/The Last of All chapters.png',
      title: 'The Last Of All Chapters',
      cssClass: 'Book3-style',
      price: '50$',
    },
  ];
  books3: Book[] = [
    {
      imageSrc: '../../assets/archangel.jpg',
      title: 'The Archangel',
      cssClass: 'Archangel-style',
      price: '10$',
    },
    {
      imageSrc: '../../assets/ThePhilosophy.jpg',
      title: 'The Philosophy Of Everything',
      cssClass: 'Philosophy-style',
      price: '50$',
    },
    {
      imageSrc: '../../assets/imposter.png',
      title: 'The Imposter',
      cssClass: 'Imposter-style',
      price: '10$',
    },
  ];
}
