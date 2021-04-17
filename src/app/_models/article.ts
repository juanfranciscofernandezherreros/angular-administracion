import { User } from "./user";
import { Tags } from "./tags";
import { Categories } from "./categories";

export class Article {
    title:string;
    slug:string;
    description:string;
    content:string;
    mainImage:string;
    language:string;
    createdDate:string;
    user:User;
    tags:Tags[];
    categories:Categories[];
} 