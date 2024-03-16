//movie.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from './movie';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  standalone: true,
  imports:[CommonModule,RouterLink,FormsModule,HttpClientModule]
})
export class MovieComponent {
  httpClient = inject(HttpClient);
  movieInfo: any;
  searchTitle: string = '';
  constructor(private movieService: MovieService) {}

  searchMovieByTitle(title: string): void {
    this.movieService.searchMoviesByTitle(title).subscribe((data: any) => {
      this.movieInfo = data;
    });
  }
}
