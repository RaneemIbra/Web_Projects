import { Component, AfterViewInit } from '@angular/core';
import { Book } from '../book/book.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements AfterViewInit {
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
    },
    {
      imageSrc: '../../assets/pendant.png',
      title: 'Pendant',
      cssClass: 'Pendant-style',
    },
    {
      imageSrc: '../../assets/ring.png',
      title: 'Ring',
      cssClass: 'Ring-style',
    },
  ];
  books2: Book[] = [
    {
      imageSrc: '../../assets/The broken chapter in wind.jpg',
      title: 'The Broken Chapter In Wind',
      cssClass: 'Book1-style',
    },
    {
      imageSrc: '../../assets/Back To A Broken Chapter.jpg',
      title: 'Back To A Broken Chapter',
      cssClass: 'Book2-style',
    },
    {
      imageSrc: '../../assets/The Last of All chapters.png',
      title: 'The Last Of All Chapters',
      cssClass: 'Book3-style',
    },
  ];
  books3: Book[] = [
    {
      imageSrc: '../../assets/archangel.jpg',
      title: 'The Archangel',
      cssClass: 'Archangel-style',
    },
    {
      imageSrc: '../../assets/ThePhilosophy.jpg',
      title: 'The Philosophy Of Everything',
      cssClass: 'Philosophy-style',
    },
    {
      imageSrc: '../../assets/imposter.png',
      title: 'The Imposter',
      cssClass: 'Imposter-style',
    },
  ];
}
