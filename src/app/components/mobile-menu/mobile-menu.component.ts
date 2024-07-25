import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {

  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setMenuIsVisible(){
    this.visible = !this.visible
    console.log(this.visible)
    console.log("oi")
  }
}
