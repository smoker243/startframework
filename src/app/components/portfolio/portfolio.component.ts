import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolioSrc:string[]=[
  './assets/img/poert1.png',
  './assets/img/port2.png',
  './assets/img/port3.png',
  './assets/img/poert1.png',
  './assets/img/port2.png',
  './assets/img/port3.png',
];
flag: boolean = true;
Ms11Img: string = '';
hightMS11 (element: EventTarget | null, img: HTMLImageElement): void {
if (element == img) return;
this.flag = true;
}
}
