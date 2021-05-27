import { FirstQuarter } from "./firstQuarter";
import { SecondQuarter } from "./secondQuarter";
import { ThirdQuarter } from "./thirdQuarter";
import { ForthQuarter } from "./forthQuarter";
import { ExtraTime } from "./extraTime";
import { Header } from "./header";
import { Match } from "./match";

export class MarkAsFavourite {
   matchId:number;
   firstQuarterDTO:FirstQuarter; 
   secondQuarterDTO:SecondQuarter; 
   thirdQuarterDTO:ThirdQuarter; 
   forthQuarterDTO:ForthQuarter; 
   extraTimeDTO:ExtraTime;
   headerDTO:Header;
   gameCode:String;
   seassonCode:String;
   matchDTO:Match;
}