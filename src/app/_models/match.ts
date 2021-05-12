import { Header } from "./header";


export class Match {
    id:number;
    live:boolean;
    teamA:String;
    teamB:String;
    codeTeamA:String;
    codeTeamB:String;
    actualQuarter:number;
    header:Header;
}