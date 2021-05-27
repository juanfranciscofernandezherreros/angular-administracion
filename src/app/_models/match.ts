import { Header } from "./header";
import { FirstQuarter } from "./firstQuarter";

import {Deserializable} from "./Deserializable";

export class Match{ 
    id: number;   
    firstQuarterDTO: Array<FirstQuarter>;
}