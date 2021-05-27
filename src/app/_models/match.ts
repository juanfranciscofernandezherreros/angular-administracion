import { Header } from "./header";
import { FirstQuarter } from "./firstQuarter";
import { SecondQuarter } from "./secondQuarter";
import { ThirdQuarter } from "./thirdQuarter";
import { ForthQuarter } from "./forthQuarter";
import { ExtraTime } from "./extraTime";

import {Deserializable} from "./Deserializable";

export class Match{ 
    id: number;   
    firstQuarterDTO: Array<FirstQuarter>;
    secondQuarterDTO: Array<SecondQuarter>;
    thirdQuarterDTO: Array<ThirdQuarter>;
    forthQuarterDTO: Array<ForthQuarter>;
    extraTimDTO: Array<ExtraTime>;

}