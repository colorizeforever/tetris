import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { TetrisService } from '@state/tetris/tetris.service';
import { KeyboardService } from '@state/keyboard/keyboard.service';
import { SoundManagerService } from '@shared/services/sound-manager.service';

@Directive({
  selector: '[resize]',
  standalone: true,
})
export class ResizeDirective implements OnInit {
  @Input() test: boolean;

  @Input() key: string;

  filling: number;

  constructor(
    private tetrisService: TetrisService,
    private keyboardService: KeyboardService,
    private soundManager: SoundManagerService,
    private el: ElementRef,
    private render: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }

  ngOnInit() {
    this.resize();
  }

  @HostListener('window:resize', ['$event'])
  resize() {
    if (this.test) return;
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const ratio = height / width;
    let scale: number;
    if (ratio < 1.5) {
      scale = height / 960;
    } else {
      scale = width / 640;
      this.filling = (height - 960 * scale) / scale / 3;
      const paddingTop = Math.floor(this.filling) + 42;
      const paddingBottom = Math.floor(this.filling);
      const marginTop = Math.floor(-480 - this.filling * 1.5);
      this.setPaddingMargin(paddingTop, paddingBottom, marginTop);
    }
    this.render.setStyle(this.el.nativeElement, 'transform', `scale(${scale - 0.01})`);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    if (this.hasCurrent) {
      event.preventDefault();
      event.returnValue = true;
    }
  }

  get hasCurrent() {
    return this.tetrisService.hasCurrent;
  }

  private setPaddingMargin(paddingTop: number, paddingBottom: number, marginTop: number) {
    this.render.setStyle(this.el.nativeElement, 'padding-top', `${paddingTop}px`);
    this.render.setStyle(this.el.nativeElement, 'padding-bottom', `${paddingBottom}px`);
    this.render.setStyle(this.el.nativeElement, 'margin-top', `${marginTop}px`);
  }
}
