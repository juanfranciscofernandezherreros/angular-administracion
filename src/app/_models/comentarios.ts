import { User } from "./user";

export class Comentarios {
    id: number;
    articleId:number;
    contenido:String;
    username:String;
    email:String;
    authorComment:User;
    parentId:number;
    isanswer:boolean;
    level: number;
}