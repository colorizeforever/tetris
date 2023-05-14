import { AsyncPipe, NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {ArrowButton} from "../../models/enums/arrow-button";
import {ArrowButtonTransform} from "../../constants/arrow-button-transform";
@Component({
  selector: 't-button',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, AsyncPipe],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() className = '';
  @Input() isAbsolute = false;
  @Input() top: number;
  @Input() left: number;

  @Input() active$: Observable<boolean>;
  @Input() arrowButton: ArrowButton;

  get arrowTransforms() {
    return ArrowButtonTransform[this.arrowButton];
  }
}
