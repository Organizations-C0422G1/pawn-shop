import { Component, OnInit } from '@angular/core';
import {PawnItemDto} from "./dto/pawn-item-dto";
import {PawnTypeDto} from "./dto/pawn-type-dto";
import {LiquidationDto} from "./dto/liquidation-dto";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {LiquidationServiceService} from "../../service/liquidation-service.service";

@Component({
  selector: 'app-liquidation',
  templateUrl: './liquidation.component.html',
  styleUrls: ['./liquidation.component.css']
})
export class LiquidationComponent implements OnInit {
  date: Date;

  PawnItemList: PawnItemDto[]=[];

  PawnItemLiquidation: PawnItemDto;

  PawnTypeList: PawnTypeDto[] = [];

  PriceValidate:number =10;

  searchPawnItem = {
    namePawnItem: '',
    idPawnType: '',
    price: '',
  }

  liquidation: LiquidationDto;
  formLiquidation: FormGroup;

  price = 0;
  idPawnItem = 0;

  search: FormGroup;

  constructor(private liquidationServiceService: LiquidationServiceService,
              private toast: ToastrService,
              private router: Router) {
    this.search = new FormGroup({
      namePawnItem: new FormControl(''),
      idPawnType: new FormControl(''),
      price: new FormControl('')
    });

    this.findAllPawnItem(this.searchPawnItem);
    this.findAllPawnType();
    this.formLiquidation = new FormGroup({
      liquidationPrice: new FormControl(this.price, [Validators.min(this.PriceValidate)]),
      returnDate: new FormControl("" ,[Validators.required, this.validateReturnDate]),
    });
  }

  validateReturnDate(returnDate: AbstractControl) {
    let temp = returnDate.value.split("-");
    let now = new Date();
    if (temp[0] == now.getFullYear() && temp[1] == now.getMonth() + 1 && temp[2] == now.getDate()) {
      return null;
    }
    return {'invalidReturnDate': true}
  }

  buildForm(){
    this.formLiquidation = new FormGroup({
      liquidationPrice: new FormControl(this.price, [Validators.min(this.PriceValidate)]),
      returnDate: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  findAllPawnItem(object: any) {
    this.liquidationServiceService.findAllPawnItem(object).subscribe(n => {
      this.PawnItemList = n;
      console.log(n);
      console.log(this.PawnItemList[0]);
    }, error => {
      console.log(error);
    });
  }

  findAllPawnType() {
    this.liquidationServiceService.findAllPawnType().subscribe(n => {
      this.PawnTypeList = n;
      console.log(n);
      console.log(this.PawnTypeList[0]);
    }, error => {
      console.log(error);
    })
  }

  changeNamePawnItem() {
    this.searchPawnItem = this.search.value;
    console.log(this.searchPawnItem);
    this.findAllPawnItem(this.searchPawnItem);
  }

  findPawnItemById(pawnIten1: PawnItemDto) {
    console.log(pawnIten1);
    this.PawnItemLiquidation = pawnIten1;
    this.price = pawnIten1.itemPrice*2*70/100;
    this.PriceValidate=pawnIten1.itemPrice*2*70/100;
    console.log(this.price);
    this.idPawnItem = pawnIten1.idPawnItem;
    // console.log(this.liquidation);
    console.warn(this.PriceValidate);
    this.buildForm();
  }

  get liquidationPrice() {
    return this.formLiquidation.get('liquidationPrice');
  }

  get returnDate(){
    return this.formLiquidation.get('returnDate');
  }

  updateLiquidation() {
    console.log(this.formLiquidation.value);
    this.liquidation = this.formLiquidation.value;
    this.liquidation.idPawnItem = this.idPawnItem;
    console.log(this.liquidation)
    if(this.liquidation.idPawnItem!=null){
      if (this.formLiquidation.valid){
        this.liquidationServiceService.updateLiquidation(this.liquidation).subscribe(n => {
          this.toast.success("Thanh lý thành công!");
          this.formLiquidation.reset();
          this.PawnItemLiquidation=null;
          // this.router.navigateByUrl("liquidation");
          this.findAllPawnItem(this.searchPawnItem);
        }, error => {
          console.log(error);
        });
      }

    }else {
      console.log("loz");
      this.toast.warning("Chưa chọn đồ thanh lý!");
    }

  }

}
