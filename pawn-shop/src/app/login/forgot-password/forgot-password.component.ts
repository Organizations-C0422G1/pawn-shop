import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm: FormGroup;

  constructor(private loginService: LoginService,
              private toastr: ToastrService) {
    this.emailForm = new FormGroup({
      email: new FormControl("",[Validators.maxLength(30),Validators.required])
    })
  }

  ngOnInit(): void {
  }

  sendEmail() {
    this.loginService.sendMail(this.emailForm.value.email).subscribe(next => {
      this.toastr.success('Hãy kiểm tra email của bạn', 'Gửi mail thành công', {
        extendedTimeOut: 1500,
        timeOut: 3000
      });
    },error => {
      this.toastr.error(error, 'Gửi mail thất bại', {
        extendedTimeOut: 1500,
        timeOut: 3000
      });
    })
  }
}
