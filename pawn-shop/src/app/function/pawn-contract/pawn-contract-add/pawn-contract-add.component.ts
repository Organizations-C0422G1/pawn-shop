import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {ContractService} from "../../../service/contract.service";
import {PawnType} from "../../../model/pawn/pawn-type";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Toast, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-pawn-contract-add',
  templateUrl: './pawn-contract-add.component.html',
  styleUrls: ['./pawn-contract-add.component.css']
})
export class PawnContractAddComponent implements OnInit {
  customerList: Customer[] = [];
  p: number = 1;
  pawnTypeList: PawnType[] = [];
  customer: Customer;
  contractForm: FormGroup;
  img: any = '';
  idCus: number = 0;

  constructor(private contractService: ContractService,
              private toast: ToastrService) {
    this.contractService.findAllPawnType().subscribe(data => {
      this.pawnTypeList = data;
    });
  }

  ngOnInit(): void {
    this.getAll();
    this.contractForm = new FormGroup({
        id: new FormControl(''),
        code: new FormControl('HD-'),
        itemPrice: new FormControl('', [Validators.required, this.validateItemPrice, Validators.pattern("^[1-9]{1}[0-9]*$")]),
        interestRate: new FormControl('', [Validators.required, this.validateInterestRate, Validators.pattern("^\\d*\\.\\d+$")]),
        startDate: new FormControl('', [Validators.required, this.validateStartDate]),
        endDate: new FormControl('', [Validators.required, this.validateEndDate]),
        returnDate: new FormControl(null),
        liquidationPrice: new FormControl(null),
        type: new FormControl(true),
        status: new FormControl(0),
        customer: new FormControl(),
        pawnItem: new FormGroup({
          id: new FormControl(''),
          name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
          status: new FormControl(1),
          pawnType: new FormControl('0')
        })
      }
    );
  }

  validateItemPrice(itemPrice: AbstractControl) {
    let temp = itemPrice.value;
    if (temp < 0) {
      return {'invalidItemPrice': true}
    }
    return null;
  }

  validateStartDate(startDate: AbstractControl) {
    let temp = startDate.value.split("-");
    let now = new Date();
    if (temp[0] == now.getFullYear() && temp[1] == now.getMonth() + 1 && temp[2] == now.getDate()) {
      return null;
    }
    return {'invalidStartDate': true}
  }

  validateInterestRate(interestRate: AbstractControl) {
    let temp = interestRate.value;
    if (temp < 0.2 || temp > 0.4) {
      return {'invalidInterestRate': true}
    }
    return null;
  }

  validateEndDate(endDate: AbstractControl) {
    let temp = endDate.value.split("-");
    let now = new Date();
    if (temp[0] <= now.getFullYear() && temp[1] <= now.getMonth() + 1 && temp[2] <= now.getDate()) {
      return {'invalidEndDate': true}
    }
    return null;
  }

  getAll() {
    this.contractService.findAllCustomer().subscribe(data => {
      // @ts-ignore
      this.customerList = data.content;
      console.log(this.customerList);
    });
  }

  getId(id: number, cus: Customer) {
    this.contractForm.value.customer = id;
    console.log(this.contractForm.value.customer)
    this.idCus = id;
    this.customer = cus;
  }

  search(idCard: string) {
    if (idCard === '') {
      this.getAll();
    } else {
      this.contractService.search(idCard).subscribe(customers => {
        this.customerList = customers;
      });
    }
  }

  create() {
    this.contractForm.value.customer = this.idCus;
    let pawnItem = this.contractForm.value.pawnItem;
    let contractNew = this.contractForm.value;
    console.log(this.contractForm.value)
    this.contractService.createPawnItem(pawnItem).subscribe(pawnItems => {
        contractNew.pawnItem.id = pawnItems.id;

      }, error => {
      },
      () => {
        this.contractService.createContract(contractNew).subscribe(() => {
          console.log(contractNew)
          this.toast.success("thông báo", "thêm mới thành công")
        }, error => {
          console.log(2)
          console.log(error);
        })
      })
  }

}
