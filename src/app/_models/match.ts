import { Header } from "./header";
import { FirstQuarter } from "./firstQuarter";

import {Deserializable} from "./Deserializable";

export class Match{ 
    id: number;
    live: boolean;
    TeamA: string;
    TeamB: string;    
    CodeTeamA: string;
    CodeTeamB: string;
    actualQuarter: number;
    phase: string;
    date: string;
    round: string;
    gameCode: string;
    firstQuarterDTO: Array<FirstQuarter>;
}