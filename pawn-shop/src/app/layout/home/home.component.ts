import {Component, OnInit} from '@angular/core';
import {PawnTypeService} from '../../service/pawn-type.service';
import {CityService} from '../../service/city.service';
import {DistrictService} from '../../service/district.service';
import {City} from '../../model/address/city';
import {District} from '../../model/address/district';
import {PawnType} from '../../model/pawn/pawn-type';
import {QuickContractDto} from '../../model/dto/quick-contract-dto';
import {FormControl, FormGroup} from '@angular/forms';
import {QuickContractService} from '../../service/quick-contract.service';
import {QuickDistrictDto} from '../../model/dto/quick-district-dto';
import {QuickAddressDto} from '../../model/dto/quick-address-dto';
import {QuickCustomerDto} from '../../model/dto/quick-customer-dto';
import {QuickPawnItemDto} from '../../model/dto/quick-pawn-item-dto';
import {QuickPawnTypeDto} from '../../model/dto/quick-pawn-type-dto';

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
              private quickContractService: QuickContractService) {
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
      name: new FormControl(),
      phoneNumber: new FormControl(),
      districtId: new FormControl(),
      pawnTypeId: new FormControl()
    });
  }

  submit() {
    console.info(this.quickContractForm.value);
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
      alert("thafnh cong");
    });
  }
}
