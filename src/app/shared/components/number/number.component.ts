import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 't-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, NgClass],
})
export class NumberComponent {
  @Input() num = 0;
  @Input() length = 6;

  get nums(): string[] {
    const str = `${this.num}`;
    return str.padStart(this.length, 'n').split('');
  }
}
