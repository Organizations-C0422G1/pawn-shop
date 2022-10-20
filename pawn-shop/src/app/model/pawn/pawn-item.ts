import {PawnType} from './pawn-type';

export interface PawnItem {
  id?: number;
  name?: string;
  status?: boolean;
  pawnType?: PawnType;
}
