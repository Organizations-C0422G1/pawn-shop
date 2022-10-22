import { Component, OnInit } from '@angular/core';
import {City} from "../../model/address/city";
import {District} from "../../model/address/district";
import {PawnType} from "../../model/pawn/pawn-type";
import {QuickContractDto} from "../dto/quick-contract-dto";
import {QuickDistrictDto} from "../dto/quick-district-dto";
import {QuickAddressDto} from "../dto/quick-address-dto";
import {QuickCustomerDto} from "../dto/quick-customer-dto";
import {QuickPawnTypeDto} from "../dto/quick-pawn-type-dto";
import {QuickPawnItemDto} from "../dto/quick-pawn-item-dto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PawnTypeService} from "../../service/pawn-type.service";
import {CityService} from "../../service/city.service";
import {DistrictService} from "../../service/district.service";
import {QuickContractService} from "../../service/quick-contract.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: City[] = [];
  districts: District[] = [];
  pawnTypes: PawnType[] = [];
  quickContractDto: QuickContractDto = {};
  quickDistrictDto: QuickDistrictDto = {};
  quickAddressDto: QuickAddressDto = {};
  quickCustomerDto: QuickCustomerDto = {};
  quickPawnTypeDto: QuickPawnTypeDto = {};
  quickPawnItemDto: QuickPawnItemDto = {};
  quickContractForm: FormGroup;


  constructor(private pawnTypeService: PawnTypeService,
              private cityService: CityService,
              private districtService: DistrictService,
              private quickContractService: QuickContractService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.findAllCities();
    this.findAllPawnTypes();
    this.buildForm();
  }

  findAllCities() {
    this.cityService.findAll().subscribe(next => this.cities = next);
  }

  findAllPawnTypes() {
    this.pawnTypeService.findAll().subscribe(next => this.pawnTypes = next);
  }

  changeCity(value: any) {
    console.log(value);
    this.districtService.findAll(value.value).subscribe(next => this.districts = next);
  }

  buildForm() {
    this.quickContractForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      districtId: new FormControl(null, [Validators.required]),
      pawnTypeId: new FormControl(null, [Validators.required])
    });
  }

  submit() {
    console.info(this.quickContractForm.value);
    if (this.quickContractForm.valid) {
      const contractInfo = this.quickContractForm.value;
      this.quickDistrictDto.id = contractInfo.districtId;
      this.quickAddressDto.quickDistrictDto = this.quickDistrictDto;
      this.quickCustomerDto.quickAddressDto = this.quickAddressDto;
      this.quickCustomerDto.name = contractInfo.name;
      this.quickCustomerDto.phoneNumber = contractInfo.phoneNumber;
      this.quickPawnTypeDto.id = contractInfo.pawnTypeId;
      this.quickPawnItemDto.quickPawnTypeDto = this.quickPawnTypeDto;
      this.quickContractDto.quickCustomerDto = this.quickCustomerDto;
      this.quickContractDto.quickPawnItemDto = this.quickPawnItemDto;
      console.info(this.quickContractDto);

      this.quickContractService.createQuickContract(this.quickContractDto).subscribe(next => {
        this.toastrService.success('Cửa hàng sẽ sớm liên hệ bạn!', 'Đăng ký thành công');
        this.quickContractForm.reset();
      });
    }else {
      this.toastrService.error('Vui lòng nhập thông tin cá nhân', 'Lỗi');
    }
  }
}
