import {Component, Inject, OnInit} from '@angular/core';
import {Employee} from '../../../model/employee/employee';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../../service/employee.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-employee-update-information',
  templateUrl: './employee-update-information.component.html',
  styleUrls: ['./employee-update-information.component.css']
})
export class EmployeeUpdateInformationComponent implements OnInit {
  employee: Employee = {};
  employeeForm: FormGroup;
  img: any = '';

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let user = paramMap.get('user');
      console.log(user);
      this.employeeService.findByUser(user).subscribe(next => {
        this.employee = next;

        this.employeeForm = new FormGroup({
          id: new FormControl(this.employee.id),
          userName: new FormControl(this.employee.username),
          name: new FormControl(this.employee.name,[Validators.required]),
          email: new FormControl(this.employee.email,[Validators.required]),
          address: new FormControl(this.employee.address,[Validators.required]),
          phoneNumber: new FormControl(this.employee.phoneNumber,[Validators.required]),
          idCard: new FormControl(this.employee.idCard,[Validators.required]),
          dateOfBirth: new FormControl(this.employee.dateOfBirth,[Validators.required]),
          gender: new FormControl(this.employee.gender),
          imgUrl: new FormControl(this.employee.imgUrl)
        });
      });
    });
  }

  uploadFile() {
    return new Promise((resolve, reject) => {
        const nameImg = Date.now() + this.img.name;
        const fileRef = this.storage.ref(nameImg);
        this.storage.upload(nameImg, this.img).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.employeeForm.patchValue({img: url});
              resolve(true);
              this.employeeForm.value.imgUrl = url;
            });
          })
        ).subscribe();
      }
    );
  }

  ngOnInit(): void {
  }

  submit() {
    this.uploadFile().then(() => {
      console.log(this.employeeForm.value);
      const employee = this.employeeForm.value;
      this.employeeService.update(employee).subscribe(next => {
        this.router.navigateByUrl('/employee/details');
      });
    })
  }

  showImg($event: any) {
    this.img = $event.target.files[0];
    console.log(this.img);
  }
}
