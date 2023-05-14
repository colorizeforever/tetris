import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[t-shared-button]',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class SharedButtonComponent {
  @HostBinding('class') className = 'twitter-button';
  @Input() showIcon = true;
}
