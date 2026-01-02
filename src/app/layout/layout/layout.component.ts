import { Component } from '@angular/core';
import { ScrollIndicatorDirective } from '../../directives/scroll-bar.directive';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ScrollIndicatorDirective],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
