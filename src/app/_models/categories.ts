import { Article } from "./article";

export class Categories {

    id: number;
    name:string;
    slug:string;
    language:string;
    totalArticles:number;
    articles: Article[];
}