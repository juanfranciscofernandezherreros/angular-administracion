import { User } from "./user";

export class Comentarios {
    id: number;
    contenido:String;
    username:String;
    email:String;
    authorComment:User;
    articleId:number;
    parentId:number;
    isanswer:boolean;
    level: number;
}