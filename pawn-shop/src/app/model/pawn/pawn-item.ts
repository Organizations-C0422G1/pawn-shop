import {PawnType} from "./pawn-type";
import {Contract} from "../contract/contract";

export interface PawnItem {
  id?: number;
  name?: string;
  status?: boolean;
  pawnType?: PawnType;
  contract?: Contract;
}
