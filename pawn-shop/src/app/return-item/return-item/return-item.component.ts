import {Component, OnInit} from '@angular/core';
import {ContractService} from '../../service/contract.service';
import {ToastrService} from 'ngx-toastr';
import {Contract} from '../../model/contract/contract';

@Component({
  selector: 'app-return-item',
  templateUrl: './return-item.component.html',
  styleUrls: ['./return-item.component.css']
})
export class ReturnItemComponent implements OnInit {
  contractList: Contract[] = [];
  indexPagination = 0;
  codeSearch = '';
  customerNameSearch = '';
  pawnItemSearch = '';
  startDateSearch = '';
  code = '';
  customerName: string;
  pawnItem: string;
  itemPrice: number;
  interestRate: number;
  startDate: Date;
  endDate: Date;
  returnDate: Date;
  email: string;
  liquidationPrice: number;
  totalMonth: number;
  idDelete: number;
  totalRecords: number;
  pageSelect: number[] = [];

  constructor(private contractService: ContractService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  }

  chooseContract() {
    this.pageSelect.splice(0, this.totalRecords);
    return this.contractService.getAllPaginationAndSearch(this.indexPagination, this.codeSearch,
      this.customerNameSearch, this.pawnItemSearch, this.startDateSearch).subscribe((contracts: any) => {
      if (contracts == null) {
        this.contractList = [];
      } else {
        this.pageSelect = [];
        this.contractList = contracts.content;
        this.totalRecords = contracts.totalPages;
        for (let i = 0; i < this.totalRecords; i++){
          this.pageSelect.push(i);
        }
      }
    });
  }

  getContract(item: any) {
    this.idDelete = item.id;
    this.code = item.code;
    this.customerName = item.customer;
    this.pawnItem = item.pawnItem;
    this.itemPrice = item.itemPrice;
    this.interestRate = item.interestRate;
    this.startDate = item.startDate;
    this.endDate = item.endDate;
    this.returnDate = new Date();
    this.email = item.customerEmail;
    this.totalMonth = getMonth(item.startDate, item.endDate);
    if (this.totalMonth <= 0) {
      this.totalMonth = 1;
    }

    const lateDay = getDay(item.endDate, new Date());

    this.liquidationPrice = item.itemPrice + (((item.itemPrice * item.interestRate) / 100) * this.totalMonth)
      + (((item.itemPrice * item.interestRate) / 100) / 30) * lateDay;
  }

  search() {
    this.pageSelect.splice(0, this.totalRecords);
    return this.contractService.getAllPaginationAndSearch(this.indexPagination, this.codeSearch,
      this.customerNameSearch, this.pawnItemSearch, this.startDateSearch).subscribe((contracts: any) => {
      if (contracts == null) {
        this.contractList = [];
      } else {
        this.pageSelect = [];
        this.contractList = contracts.content;
        this.totalRecords = contracts.totalPages;
        for (let i = 0; i < this.totalRecords; i++){
          this.pageSelect.push(i);
        }
      }
    });
    this.codeSearch = '';
    this.customerNameSearch = '';
    this.pawnItemSearch = '';
    this.startDateSearch = '';
  }

  returnItem() {
    this.contractService.returnItem(this.idDelete, this.email, this.customerName, this.liquidationPrice.toFixed(2)).subscribe(() => {
      this.toastrService.success('Thanh toán thành công', 'Thông báo');
      this.code = '';
      this.customerName = '';
      this.pawnItem = '';
      this.itemPrice = 0;
      this.interestRate = 0;
      this.email = '';
      this.liquidationPrice = 0;
    });
  }

  previousPage() {
    this.pageSelect.splice(0, this.totalRecords);
    this.indexPagination = this.indexPagination - 1;
    return this.contractService.getAllPaginationAndSearch(this.indexPagination, this.codeSearch,
      this.customerNameSearch, this.pawnItemSearch, this.startDateSearch).subscribe((contracts: any) => {
      if (contracts == null) {
        this.contractList = [];
      } else {
        this.contractList = contracts.content;
        this.totalRecords = contracts.totalPages;
        for (let i = 0; i < this.totalRecords; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  nextPage() {
    this.pageSelect.splice(0, this.totalRecords);
    this.indexPagination = this.indexPagination + 1;
    return this.contractService.getAllPaginationAndSearch(this.indexPagination, this.codeSearch,
      this.customerNameSearch, this.pawnItemSearch, this.startDateSearch).subscribe((contracts: any) => {
      if (contracts == null) {
        this.contractList = [];
      } else {
        this.contractList = contracts.content;
        this.totalRecords = contracts.totalPages;
        for (let i = 0; i < this.totalRecords; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  changePage(pageNow: number) {

    this.indexPagination = pageNow;
    this.pageSelect.splice(0, this.totalRecords);
    return this.contractService.getAllPaginationAndSearch(this.indexPagination, this.codeSearch,
      this.customerNameSearch, this.pawnItemSearch, this.startDateSearch).subscribe((contracts: any) => {
      if (contracts == null) {
        this.contractList = [];
      } else {

        this.contractList = contracts.content;
        this.totalRecords = contracts.totalPages;
        for (let i = 0; i < this.totalRecords; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  reset() {
    this.code = '';
    this.customerName = '';
    this.pawnItem = '';
    this.itemPrice = 0;
    this.interestRate = 0;
    this.email = '';
    this.liquidationPrice = 0;
  }
}

function getDay(startDatePram: Date, endDate: Date) {
  const startValue = new Date(startDatePram);
  const endDateValue = new Date(endDate);
  const millisBetween = endDateValue.getTime() - startValue.getTime();
  const days = millisBetween / (1000 * 3600 * 24);
  return Math.round(Math.abs(days));
}

function getMonth(startDatePram: Date, endDate: Date) {
  const startValue = new Date(startDatePram);
  const endDateValue = new Date(endDate);
  return endDateValue.getMonth() - startValue.getMonth();
}

