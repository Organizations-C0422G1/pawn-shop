import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token = '';
  httpOptions: any;

  constructor(private httpClient: HttpClient, private jwtService: TokenStorageService) {
    this.token = jwtService.getJwt();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    };
  }

  public login(loginRequest) {
    console.log(loginRequest);
    return this.httpClient.post( 'http://localhost:8080/api/public/login', {
      username: loginRequest.username,
      password: loginRequest.password
    });
  }

  public sendMail(email: string) {
    return this.httpClient.post('http://localhost:8080/api/public/forgot-password', email, this.httpOptions);
  }

  public resetPassword(newPassword: string, jwt: string) {
    console.log(jwt);
    console.log(this.httpOptions);
    return this.httpClient.patch('http://localhost:8080/api/employee/reset-password', newPassword, this.httpOptions);
  }
}
