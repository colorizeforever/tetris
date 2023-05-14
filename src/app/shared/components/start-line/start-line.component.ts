import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NumberComponent } from '../number/number.component';
import {TetrisQuery} from "../../../state/tetris/tetris.query";

@Component({
  selector: 't-start-line',
  standalone: true,
  imports: [NumberComponent, NgIf, AsyncPipe],
  templateUrl: './start-line.component.html',
  styleUrls: ['./start-line.component.scss']
})
export class StartLineComponent {
  hasCurrent$ = this.query.hasCurrent$;
  clearedLines$ = this.query.clearedLines$;
  initLine$ = this.query.initLine$;

  constructor(public query: TetrisQuery) {}
}
