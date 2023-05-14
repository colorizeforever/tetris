import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ButtonComponent} from '../button/button.component';
import {GameState} from "../../models/enums/game-state";
import {KeyboardQuery} from "@state/keyboard/keyboard.query";
import {TetrisQuery} from "@state/tetris/tetris.query";
import {ArrowButton} from "../../models/enums/arrow-button";

@Component({
  selector: 't-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ButtonComponent, AsyncPipe],
})
export class KeyboardComponent {
  @Input() filling = 20;
  @Output() onMouseDown = new EventEmitter<string>();
  @Output() onMouseUp = new EventEmitter<string>();
  ArrowButton = ArrowButton;
  pauseButtonLabel$: Observable<string> = this.query.gameState$.pipe(
    map((state) => (state === GameState.Paused ? 'Play' : 'Pause'))
  );

  constructor(public keyboardQuery: KeyboardQuery, private query: TetrisQuery) {}

  mouseDown(e: Event, key: string) {
    e.preventDefault();
    this.onMouseDown.emit(key);
  }

  mouseUp(e: Event, key: string) {
    e.preventDefault();
    this.onMouseUp.emit(key);
  }
}
