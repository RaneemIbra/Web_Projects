import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() imageSrc: string;
  @Input() title: string;
  @Input() cssClass: string;
  @Input() price: string;
  @Input() preview: string;
  @Output() imageClick = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<void>();

  onImageClick(): void {
    this.imageClick.emit();
  }

  onAddToCart(event: MouseEvent): void {
    event.stopPropagation();
    this.addToCart.emit();
  }
}
