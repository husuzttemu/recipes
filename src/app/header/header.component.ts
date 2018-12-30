import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html'
})
export class HeaderComponent{

  @Output() menuChoosed: EventEmitter<string> = new EventEmitter<string>();

  onMenuSelected(selectMenu: string)  {
    this.menuChoosed.emit(selectMenu);
  }




}
