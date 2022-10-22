import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {District} from "../../model/address/district";
import {City} from "../../model/address/city";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  idCity: number = 0;

  customerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,
      Validators.pattern('^([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})' +
        '([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)' +
        '((\\s{1}([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})' +
        '[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+))+$')]),
    code: new FormControl(''),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{10})$')]),
    dateOfBirth: new FormControl('', [Validators.required, this.validateDateOfBirth]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9})$')]),
    imgUrl: new FormControl('',),
    status: new FormControl(true),
    address: new FormGroup({
      id: new FormControl(),
      street: new FormControl('', [Validators.required]),
      district: new FormControl(),
      city: new FormControl(),
    })
  });


  validateDateOfBirth(startDate: AbstractControl) {
    let temp = startDate.value.split('-');
    let now = new Date();
    if (now.getFullYear() - temp[0] > 18 && now.getFullYear() - temp[0] < 120) {
      return null;
    }
    return {'invalidStartDate': true};
  }

  districtList: District[] = [];
  cityList: City[] = [];

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }


  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.findAllCities();
  }

  findAllCities() {
    this.customerService.getAllCity().subscribe(city => {
      this.cityList = city;
    });
  }

  create() {
    if (this.customerForm.valid) {
      let address = this.customerForm.value.address;
      let customerFormNew = this.customerForm.value;
      this.idCity = this.customerForm.value.address.district.city;
      this.customerService.getCityById(this.customerForm.value.city);
      console.log(this.customerForm.value.address.district.city);

      this.customerService.saveAddress(address).subscribe(addresses => {
        customerFormNew.address = addresses;
      }, error => {

      }, () => {
        this.customerService.createNewCustomer(customerFormNew).subscribe(newCus => {
          alert('thêm mới thành công');
        }, error => {
          console.log(error);
        });
      });
    } else {
      console.log(this.customerForm);
    }
  }

  changeCity(target: any) {
    this.customerService.getAllDistrict(target.value).subscribe(district => {
      this.districtList = district;
    });
  }

}
