import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {


    menuValue:boolean = false ;

    openMenu(){
        this.menuValue = !this.menuValue
    }

    addValue:boolean = true;
    addForm(){
        this.addValue = !this.addValue
    }


}
