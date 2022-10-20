import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {TokenStorageService} from '../../service/token-storage.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private loginService: LoginService,
              private tokenStorageService: TokenStorageService,
              private toastr: ToastrService) {
    this.formLogin = new FormGroup({
        username: new FormControl('', [Validators.maxLength(30), Validators.required]),
        password: new FormControl('', [Validators.maxLength(30), Validators.required]),
        rememberMe: new FormControl()
      }
    );
  }

  ngOnInit(): void {
  }

  login() {
    let loginRequest = this.formLogin.value;
    console.log(loginRequest);
    this.loginService.login(loginRequest).subscribe(loginResponse => {
      if (loginRequest.rememberMe) {
        this.tokenStorageService.saveLocalStorage(loginResponse);
      } else {
        this.tokenStorageService.saveSessionStorage(loginResponse);
      }
      this.toastr.success('Chào ' + this.tokenStorageService.getUsername(), 'Đăng nhập thành công', {
        extendedTimeOut: 1500,
        timeOut: 3000
      });
    }, error => {
      console.log(error);
      this.toastr.error("Tài khoản hoặc mật khẩu không đúng", 'Đăng nhập không thành công', {
        extendedTimeOut: 1500,
        timeOut: 3000
      });
    });
  }
}
