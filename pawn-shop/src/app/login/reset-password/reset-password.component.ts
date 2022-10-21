import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TokenStorageService} from "../../service/token-storage.service";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  jwt: string;
  resetPasswordForm: FormGroup;

  constructor(private loginService: LoginService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private tokenStorageService: TokenStorageService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.jwt = paramMap.get("jwt")
      localStorage.setItem("jwt", this.jwt)
    })
  }

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      newPassword: new FormControl("", [Validators.required, Validators.maxLength(30)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.maxLength(30)])
    }, this.compare)
  }

  resetPassword() {
    this.loginService.resetPassword(this.resetPasswordForm.value.newPassword, this.jwt).subscribe(loginResponse => {
      this.tokenStorageService.saveSessionStorage(loginResponse)
      this.toastr.success('Chào ' + this.tokenStorageService.getUsername(), 'Đặt lại mật khẩu thành công', {
        extendedTimeOut: 1500,
        timeOut: 3000
      });
    },error => {
      this.toastr.error(error.error, 'Đặt lại mật khẩu thất bại', {
        extendedTimeOut: 1500,
        timeOut: 3000
      });
    })
  }

  compare(resetPasswordForm: AbstractControl) {
    return resetPasswordForm.value.newPassword === resetPasswordForm.value.confirmPassword ? null : {passwordNotMatch: true}
  }
}
