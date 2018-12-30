import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-recipes';
  navigationItem = 'recipe';

  onNavigateMenu(menuChoosed: string) {
    this.navigationItem = menuChoosed;

  }



}
