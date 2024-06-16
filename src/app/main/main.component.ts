import { Component ,OnInit
 } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
    constructor() {  }

    ngOnInit() {

    }


    menuValue:boolean = false ;

    openMenu(){
        this.menuValue = !this.menuValue
    }

    addValue:boolean = true;
    addForm(){
        this.addValue = !this.addValue
    }








}
