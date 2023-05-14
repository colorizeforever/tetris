import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {TetrisQuery} from "../../../state/tetris/tetris.query";

@Component({
  selector: 't-sound',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss']
})
export class SoundComponent {
  muted$: Observable<boolean> = this.query.sound$.pipe(map((sound) => !sound));

  constructor(private query: TetrisQuery) {}
}
