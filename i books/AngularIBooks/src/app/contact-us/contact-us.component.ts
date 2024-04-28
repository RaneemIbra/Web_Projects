import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsComponent implements OnInit {
  comment: string[] = ['hello'];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    document.querySelectorAll('.Comment').forEach((e) => e.remove());
    this.comment.forEach((element) => {
      if (element !== '') {
        const targetDiv = document.getElementById('comments');
        const d = document.createElement('div');
        d.innerHTML += `<h2 class="name">Annonymous</h2><br /> <p class="parag">${element}</p>`;
        d.classList.add('Comment');
        targetDiv?.append(d);
      }
    });
  }

  onClick() {
    const inputValue = (<HTMLInputElement>document.getElementById('input'))
      .value;
    this.comment.push(inputValue);
    this.ngAfterViewInit();
  }
}
