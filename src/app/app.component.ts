import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TetrisComponent} from "@components/tetris/tetris.component";

@Component({
  selector: 'app-root',
  template: '<app-tetris></app-tetris> ',
  standalone: true,
  imports: [
    TetrisComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
