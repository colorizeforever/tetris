import {Directive, HostListener} from "@angular/core";
import {TetrisService} from "../../state/tetris/tetris.service";
import {KeyboardService} from "../../state/keyboard/keyboard.service";
import {SoundManagerService} from "../../shared/services/sound-manager.service";
import {TetrisKeyboard} from "../../shared/models/enums/keyboard";

const KeyUp = 'document:keyup';
const KeyDown = 'document:keydown';

@Directive()
export class KeyListener {
  constructor(  protected tetrisService: TetrisService,
                protected keyboardService: KeyboardService,
                private soundManager: SoundManagerService,) {
  }
  @HostListener(`${KeyDown}.${TetrisKeyboard.Left}`)
  keyDownLeft() {
    this.soundManager.move();
    this.keyboardService.setKey({
      left: true
    });
    if (this.hasCurrent) {
      this.tetrisService.moveLeft();
    } else {
      this.tetrisService.decreaseLevel();
    }
  }

  @HostListener(`${KeyUp}.${TetrisKeyboard.Left}`)
  keyUpLeft() {
    this.keyboardService.setKey({
      left: false
    });
  }

  @HostListener(`${KeyDown}.${TetrisKeyboard.Right}`)
  keyDownRight() {
    this.soundManager.move();
    this.keyboardService.setKey({
      right: true
    });
    if (this.hasCurrent) {
      this.tetrisService.moveRight();
    } else {
      this.tetrisService.increaseLevel();
    }
  }

  @HostListener(`${KeyUp}.${TetrisKeyboard.Right}`)
  keyUpRight() {
    this.keyboardService.setKey({
      right: false
    });
  }

  @HostListener(`${KeyDown}.${TetrisKeyboard.Up}`)
  keyDownUp() {
    this.soundManager.rotate();
    this.keyboardService.setKey({
      up: true
    });
    if (this.hasCurrent) {
      this.tetrisService.rotate();
    } else {
      this.tetrisService.increaseStartLine();
    }
  }

  @HostListener(`${KeyUp}.${TetrisKeyboard.Up}`)
  keyUpUp() {
    this.keyboardService.setKey({
      up: false
    });
  }

  @HostListener(`${KeyDown}.${TetrisKeyboard.Down}`)
  keyDownDown() {
    this.soundManager.move();
    this.keyboardService.setKey({
      down: true
    });
    if (this.hasCurrent) {
      this.tetrisService.moveDown();
    } else {
      this.tetrisService.decreaseStartLine();
    }
  }

  @HostListener(`${KeyUp}.${TetrisKeyboard.Down}`)
  keyUpDown() {
    this.keyboardService.setKey({
      down: false
    });
  }

  @HostListener(`${KeyDown}.${TetrisKeyboard.Space}`)
  keyDownSpace() {
    this.keyboardService.setKey({
      drop: true
    });
    if (this.hasCurrent) {
      this.soundManager.fall();
      this.tetrisService.drop();
      return;
    }
    this.soundManager.start();
    this.tetrisService.start();
  }

  @HostListener(`${KeyUp}.${TetrisKeyboard.Space}`)
  keyUpSpace() {
    this.keyboardService.setKey({
      drop: false
    });
  }

  @HostListener(`${KeyDown}.${TetrisKeyboard.C}`)
  keyDownHold() {
    this.soundManager.move();
    this.keyboardService.setKey({
      hold: true
    });
    this.tetrisService.holdPiece();
  }

  @HostListener(`${KeyUp}.${TetrisKeyboard.C}`)
  keyUpHold() {
    this.keyboardService.setKey({
      hold: false
    });
  }

  @HostListener(`${KeyDown}.${TetrisKeyboard.S}`)
  keyDownSound() {
    this.soundManager.move();
    this.tetrisService.setSound();
    this.keyboardService.setKey({
      sound: true
    });
  }

  @HostListener(`${KeyUp}.${TetrisKeyboard.S}`)
  keyUpSound() {
    this.keyboardService.setKey({
      sound: false
    });
  }

  @HostListener(`${KeyDown}.${TetrisKeyboard.P}`)
  keyDownPause() {
    this.soundManager.move();
    this.keyboardService.setKey({
      pause: true
    });
    if (this.tetrisService.canStartGame) {
      this.tetrisService.resume();
    } else {
      this.tetrisService.pause();
    }
  }

  @HostListener(`${KeyUp}.${TetrisKeyboard.P}`)
  keyUpPause() {
    this.keyboardService.setKey({
      pause: false
    });
  }

  @HostListener(`${KeyDown}.${TetrisKeyboard.R}`)
  keyDownReset() {
    this.soundManager.move();
    this.keyboardService.setKey({
      reset: true
    });
    this.tetrisService.pause();
    setTimeout(() => {
      if (confirm('You are having a good game. Are you sure you want to reset?')) {
        this.tetrisService.reset();
      } else {
        this.tetrisService.resume();
      }
      this.keyUpReset();
    });
  }

  @HostListener(`${KeyUp}.${TetrisKeyboard.R}`)
  keyUpReset() {
    this.keyboardService.setKey({
      reset: false
    });
  }
  get hasCurrent() {
    return this.tetrisService.hasCurrent;
  }
}
