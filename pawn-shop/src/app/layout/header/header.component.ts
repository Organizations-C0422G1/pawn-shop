import {Component, HostListener, OnInit} from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {ShareDataService} from "../../service/share-data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarFixed: boolean = false;
  isEmployee: boolean;
  subscription: Subscription;

  @HostListener('window:scroll', ['$event']) onscroll(){
    if (window.scrollY>100){
      this.navbarFixed = true;
    }else {
      this.navbarFixed = false;
    }
  }
  constructor(private tokenStorageService: TokenStorageService,
              private data: ShareDataService) {
  }

  ngOnInit(): void {
    this.subscription = this.data.currentEmployeeStatus.subscribe(status => this.isEmployee = status)
  }

}
