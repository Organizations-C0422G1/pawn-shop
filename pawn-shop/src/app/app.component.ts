import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pawn-shop';
  isLogin: boolean;
  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.isLogin = this.tokenStorageService.getUsername() != undefined
  }
}
