import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {District} from '../../../model/address/district';
import {City} from '../../../model/address/city';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../../../service/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  idCustomer: number = 0;
  idCity: number = 0;
  customerForm: FormGroup;
  districtList: District[] = [];
  cityList: City[] = [];

  constructor(private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.idCustomer = +paraMap.get('id');
      this.customerService.findCustomerById(this.idCustomer).subscribe(idForUpdate => {
        this.customerForm = new FormGroup({
          id: new FormControl(idForUpdate.id),
          name: new FormControl(idForUpdate.name),
          code: new FormControl(idForUpdate.code),
          phoneNumber: new FormControl(idForUpdate.phoneNumber),
          dateOfBirth: new FormControl(idForUpdate.dateOfBirth),
          email: new FormControl(idForUpdate.email),
          gender: new FormControl(idForUpdate.gender),
          idCard: new FormControl(idForUpdate.idCard),
          imgUrl: new FormControl(idForUpdate.imgUrl),
          status: new FormControl(true),
          address: new FormGroup({
            id: new FormControl(idForUpdate.address.id),
            street: new FormControl(idForUpdate.address.street),
            district: new FormControl(idForUpdate.address.district),
            city: new FormControl(idForUpdate.address.city),
          })
        });
      });
    });
  }

  ngOnInit(): void {
    this.findAllCities();
  }

  findAllCities() {
    this.customerService.getAllCity().subscribe(city => {
      this.cityList = city;
    });
  }

  update() {
    let address = this.customerForm.value.address;
    let customerFormNew = this.customerForm.value;
    this.idCity = this.customerForm.value.address.district.city;
    this.customerService.getCityById(this.customerForm.value.city);
    console.log(this.customerForm.value.address.district.city);
    this.customerService.saveAddress(address).subscribe(addresses => {
      customerFormNew.address.id = addresses.id;
    }, error => {

    }, () => {
      this.customerService.updateCustomer(customerFormNew).subscribe(newCus => {
        alert('Chỉnh sửa mới thành công');
      }, error => {
        console.log(error);
      });
    });
  }

  changeCity(target: any) {
    this.customerService.getAllDistrict(target.value).subscribe(district => {
      this.districtList = district;
    });
  }


}
