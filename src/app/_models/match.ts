import { Header } from "./header";
import { FirstQuarter } from "./firstQuarter";

import {Deserializable} from "./Deserializable";

export class Match{ 
    id?: number;
    live?: boolean;
    teamA?: string;
    teamB?: string;
    codeTeamA?: string;
    codeTeamB?: string;
    actualQuarter?: number;
    phase?: string;
    date?: string;
    round?: string;
    gameCode?: string;
    firstQuarterDTO?: Array<FirstQuarter>;
}