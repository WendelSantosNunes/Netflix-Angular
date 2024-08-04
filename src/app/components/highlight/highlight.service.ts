import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetailsResponse, MovieResponse } from './highlight';
import { environmentTeste } from 'src/environments/environment.example';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  private apiKey = environmentTeste.apiKey;

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<MovieResponse> {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.http.get<MovieResponse>(url);
  }

  getAnimationMovies(): Observable<MovieResponse>{
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&with_genres=16&page=1`;
    return this.http.get<MovieResponse>(url);
  }

  getScienceFictionMovies(): Observable<MovieResponse>{
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&with_genres=878&page=1`;
    return this.http.get<MovieResponse>(url);
  }

  getTopRatedMovies(): Observable<MovieResponse>{
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&with_genres=878&page=1`;
    return this.http.get<MovieResponse>(url);
  }

  getDetailsMovies(id: number): Observable<MovieDetailsResponse> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US&with_genres=878&page=1`;
    return this.http.get<MovieDetailsResponse>(url);
  }
}
