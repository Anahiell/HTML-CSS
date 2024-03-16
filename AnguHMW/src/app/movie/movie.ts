export class Movie {
    Title: string;
    Year: number;
    imdbRating: number;
    Runtime: string;
    Director: string;
    Actors: string;
    Plot: string;

    constructor(
        Title: string,
        Year: number,
        imdbRating: number,
        Runtime: string,
        Director: string,
        Actors: string,
        Plot: string
    ) {
        this.Title=Title;
        this.Year = Year;
        this.imdbRating = imdbRating;
        this.Runtime = Runtime;
        this.Director = Director;
        this.Actors = Actors;
        this.Plot = Plot;
    }
}
