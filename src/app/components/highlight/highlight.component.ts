import { environmentTeste } from './../../../environments/environment.example';
import { Movie, MovieDetailsResponse } from './highlight';
import { HighlightService } from './highlight.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {

  url: string = environmentTeste.apiUrl;
  popularMovies: Movie[] = [];
  popularMoviesDetails: MovieDetailsResponse[] = [];
  animationMovies: Movie[] = [];
  animationMoviesDetails: MovieDetailsResponse[] = [];
  scienceFictionMovies: Movie[] = [];
  scienceFictionMoviesDetails: MovieDetailsResponse[] = [];
  topRatedMovies: Movie[] = [];
  topRatedMoviesDetails: MovieDetailsResponse[] = [];

  constructor(
    private highlightService: HighlightService
  ) { }

  ngOnInit(): void {
    this.highlightService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data.results.slice(-9);
      this.requestDetails(this.popularMovies, this.popularMoviesDetails);
    });

    this.highlightService.getTopRatedMovies().subscribe((data) => {
      this.topRatedMovies = data.results;
      this.requestDetails(this.topRatedMovies, this.topRatedMoviesDetails);
    });

    this.highlightService.getAnimationMovies().subscribe((data) => {
      this.animationMovies = data.results;
      this.requestDetails(this.animationMovies, this.animationMoviesDetails);
    })

    this.highlightService.getScienceFictionMovies().subscribe((data) => {
      this.scienceFictionMovies = data.results;
      this.requestDetails(this.scienceFictionMovies, this.scienceFictionMoviesDetails);
    })
  }

  public requestDetails(array: Movie[], details: MovieDetailsResponse[]){
    for(let movie of array) {
      this.highlightService.getDetailsMovies(movie.id).subscribe((data) => {
        details.push(data)
      })
    }
  }
}
