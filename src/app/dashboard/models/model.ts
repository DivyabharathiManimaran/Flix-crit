import { StringLiteralLike } from "typescript";

export interface Dashboard {
    dashboard: Array<MovieList>;
}

export interface MovieList {
    language:string;
    movies: Array<Item>;
}

export interface Item {
    name : string;
    medium: string;
    rating: number;
    image : string;
    genre: string;
    relDate: string;
    cast : string;
    director : string;
    storyLine : string;
    criticRev?: string;
}