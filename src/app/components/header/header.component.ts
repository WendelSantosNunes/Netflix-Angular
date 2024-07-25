import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  standard: boolean = true;

  constructor() {

  }

  ngOnInit(): void {
    if(window.screen.width < 540){
      this.standard = false
    }
  }

}
