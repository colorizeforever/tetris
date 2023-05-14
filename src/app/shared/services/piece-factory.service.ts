import { Piece } from '../figures/piece/piece';
import { NonePiece } from '../figures/piece/none';
import { PieceI } from '../figures/piece/I';
import { PieceJ } from '../figures/piece/J';
import { PieceL } from '../figures/piece/L';
import { PieceO } from '../figures/piece/O';
import { PieceS } from '../figures/piece/S';
import { PieceT } from '../figures/piece/T';
import { PieceZ } from '../figures/piece/Z';
import { Injectable } from '@angular/core';

export const SPAWN_POSITION_X = 4;
export const SPAWN_POSITION_Y = -4;

@Injectable({
  providedIn: 'root',
})
export class PieceFactoryService {
  private available: (typeof Piece)[] = [];
  private currentBag: (typeof Piece)[] = [];

  constructor() {
    this.available.push(PieceI);
    this.available.push(PieceJ);
    this.available.push(PieceL);
    this.available.push(PieceO);
    this.available.push(PieceS);
    this.available.push(PieceT);
    this.available.push(PieceZ);
  }

  getRandomPiece(x = SPAWN_POSITION_X, y = SPAWN_POSITION_Y): Piece {
    if (this.currentBag.length === 0) {
      this.generateNewBag();
    }
    const nextPiece = this.currentBag.pop() as typeof Piece;
    return new nextPiece(x, y);
  }

  getNonePiece(x = SPAWN_POSITION_X, y = SPAWN_POSITION_Y): Piece {
    return new NonePiece(x, y);
  }

  generateNewBag() {
    this.currentBag = this.available.slice();
    this.shuffleArray(this.currentBag);
  }

  shuffleArray(array: (typeof Piece)[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
