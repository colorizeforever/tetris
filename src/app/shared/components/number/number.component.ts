import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 't-number',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  @Input() num = 0;
  @Input() length = 6;

  get nums(): string[] {
    const str = `${this.num}`;
    return str.padStart(this.length, 'n').split('');
  }
}
