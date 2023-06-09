import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { KeyboardState, KeyboardStore } from './keyboard.store';

@Injectable({ providedIn: 'root' })
export class KeyboardQuery extends Query<KeyboardState> {
  up$ = this.select('up');
  down$ = this.select('down');
  left$ = this.select('left');
  right$ = this.select('right');
  drop$ = this.select('drop');
  pause$ = this.select('pause');
  sound$ = this.select('sound');
  reset$ = this.select('reset');
  hold$ = this.select('hold');

  constructor(protected override store: KeyboardStore) {
    super(store);
  }
}
