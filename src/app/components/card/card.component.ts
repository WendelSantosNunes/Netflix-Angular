import { Component, Input, OnInit } from '@angular/core';
import { Movie, MovieDetailsResponse } from '../highlight/highlight';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() movies!: Movie[];
  @Input() details!: MovieDetailsResponse[];
  @Input() title!: string;
  @Input() identified!: string;

  url: string = "https://image.tmdb.org/t/p/w500";

  listNumber: string[] = [
    '/assets/1.svg',
    '/assets/2.svg',
    '/assets/3.svg',
    '/assets/4.svg',
    '/assets/5.svg',
    '/assets/6.svg',
    '/assets/7.svg',
    '/assets/8.svg',
    '/assets/9.svg'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public hoursTransformation(total: number): string{
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    return `${hours}h: ${minutes < 10 ? '0' : ''}${minutes}min`
  }

  public prevBtn(list_id?: string) {
    const container = document.querySelector(`.carousel.list-${list_id}`);
    if (container) {
      container.scrollLeft -= 340;
    }
  }

  public nextBtn(list_id?: string) {
    console.log()
    const container = document.querySelector(`.carousel.list-${list_id}`);
    if (container) {
      container.scrollLeft += 340;
    }
  }

}
