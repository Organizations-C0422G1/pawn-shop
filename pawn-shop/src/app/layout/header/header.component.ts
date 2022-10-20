import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarFixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll(){
    if (window.scrollY>100){
      this.navbarFixed = true;
    }else {
      this.navbarFixed = false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
