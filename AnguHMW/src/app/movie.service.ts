// src/app/movie.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = '44202480'; //  API ключ

  constructor(private http: HttpClient) { }
  searchMoviesByTitle(movieTitle: string): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&t=${movieTitle}`);
  }
  
}
