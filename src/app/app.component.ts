import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { LayoutComponent } from "./layout/layout/layout.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { MyStackComponent } from "./components/my-stack/my-stack.component";
import { LiveBackgroundComponent } from "./components/live-background/live-background.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, LayoutComponent, AboutMeComponent, ExperienceComponent, ProjectsComponent, MyStackComponent, LiveBackgroundComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
