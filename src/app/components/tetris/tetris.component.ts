import {Component, ElementRef, HostListener, inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {LogoComponent} from "../../shared/components/logo/logo.component";
import {SoundComponent} from "../../shared/components/sound/sound.component";
import {PauseComponent} from "../../shared/components/pause/pause.component";
import {ClockComponent} from "../../shared/components/clock/clock.component";
import {PointComponent} from "../../shared/components/point/point.component";
import {StartLineComponent} from "../../shared/components/start-line/start-line.component";
import {LevelComponent} from "../../shared/components/level/level.component";
import {NextComponent} from "../../shared/components/next/next.component";
import {HoldComponent} from "../../shared/components/hold/hold.component";
import {Observable} from "rxjs";
import {MatrixComponent} from "../matrix/matrix.component";
import {ResizeDirective} from "../../directives/resize.directive";
import {KeyboardComponent} from "../../shared/components/keyboard/keyboard.component";
import {KeyListener} from "../utils/key-listener";
@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss'],
  hostDirectives: [{directive: ResizeDirective}],
  imports: [
    AsyncPipe,
    LogoComponent,
    SoundComponent,
    PauseComponent,
    ClockComponent,
    PointComponent,
    StartLineComponent,
    LevelComponent,
    NextComponent,
    HoldComponent,
    NgIf,
    MatrixComponent,
    KeyboardComponent,
  ],
  standalone: true
})
export class TetrisComponent extends KeyListener implements OnInit {

  public readonly resizeDirective: ResizeDirective = inject(ResizeDirective, { self: true });


  drop$: Observable<boolean>;
  isShowLogo$: Observable<boolean>;
  ngOnInit(): void {
    this.drop$ = this.keyboardService.drop$;
    this.isShowLogo$ = this.tetrisService.isShowLogo$;
  }

  keyboardMouseDown(key: string) {
    this[`keyDown${key}`]();
  }

  keyboardMouseUp(key: string) {
    this[`keyUp${key}`]();
  }

}
