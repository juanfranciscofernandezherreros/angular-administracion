import { FirstQuarter } from "./firstQuarter";
import { SecondQuarter } from "./secondQuarter";
import { ThirdQuarter } from "./thirdQuarter";
import { ForthQuarter } from "./forthQuarter";
import { ExtraTime } from "./extraTime";

export class MarkAsFavourite {
   matchId:number;
   firstQuarterDTO:FirstQuarter; 
   secondQuarterDTO:SecondQuarter; 
   thirdQuarterDTO:ThirdQuarter; 
   forthQuarterDTO:ForthQuarter; 
   extraTimeDTO:ExtraTime;
}