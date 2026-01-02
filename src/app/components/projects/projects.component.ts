import { Component } from '@angular/core';
import { ScrollRevealDirective } from "../../directives/scroll-reveal.directive";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
