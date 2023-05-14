import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TetrisQuery } from '@state/tetris/tetris.query';

@Component({
  selector: 't-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe],
})
export class SoundComponent {
  muted$: Observable<boolean> = this.query.sound$.pipe(map((sound) => !sound));

  constructor(private query: TetrisQuery) {}
}
