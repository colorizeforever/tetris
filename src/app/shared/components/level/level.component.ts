import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NumberComponent } from '../number/number.component';
import { TetrisQuery } from '@state/tetris/tetris.query';

@Component({
  selector: 't-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, NgIf, NumberComponent],
})
export class LevelComponent {
  speed$ = this.query.speed$;
  hasCurrent$ = this.query.hasCurrent$;
  initSpeed$ = this.query.initSpeed$;

  constructor(private query: TetrisQuery) {}
}
