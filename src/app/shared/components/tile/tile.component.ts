import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Tile} from "../../figures/tile/tile";

@Component({
  selector: 't-tile',
  template: ``,
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;

  constructor(public el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.tile) {
      return;
    }

    if (this.tile.isFilled) {
      this.renderer.addClass(this.el.nativeElement, 'filled');
    }

    if (this.tile.isAnimated) {
      this.renderer.addClass(this.el.nativeElement, 'animated');
    }
  }
}
