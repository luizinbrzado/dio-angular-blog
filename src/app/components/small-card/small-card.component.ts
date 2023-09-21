import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input()
  title: string = '';

  @Input()
  subtitle: string = '';

  @Input()
  body: string = '';

  @Input()
  imgSrc: string = '';

  @Input()
  imgAlt: string = '';

  constructor() {}
}
