import {Component, OnInit} from '@angular/core';
import {PawnType} from "../../../model/pawn/pawn-type";
import {PawnItem} from "../../../model/pawn/pawn-item";
import {FormGroup} from "@angular/forms";
import {PawnItemService} from "../../../service/pawn-item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pawn-item-list',
  templateUrl: './pawn-item-list.component.html',
  styleUrls: ['./pawn-item-list.component.css']
})
export class PawnItemListComponent implements OnInit {
  pawnTypes: PawnType[] = [];
  pawnItems: any;
  searchForm: FormGroup;
  pawnItemDetail: any;

  pawnItemPage: any;
  itemName: string = "";
  pawnName: string = "";
  page: number;
  totalPage: number = 0;
  pageSelect: number[] = [];

  constructor(private pawnItemService: PawnItemService,
              private route: Router) {
  }

  ngOnInit(): void {
    // this.searchPawnItem()
    this.getAllPawnItem();
  }

  getAllPawnItem() {
    this.pawnItemService.getAllPawnItem(this.itemName, this.pawnName, this.page).subscribe(pawnItems => {
      this.pawnItems = pawnItems.content;
      console.log(this.pawnItems);

    });
  }

  getDetailModal(pawnItems: PawnItem) {
    this.pawnItemDetail = pawnItems;
    console.log(this.pawnItemDetail);
  }

  searchPawnItem() {
    this.page = 0;
    this.pawnItemService.getAllPawnItem(this.itemName, this.pawnName, this.page).subscribe(pawnItem => {
      if (pawnItem == null) {
        this.pawnItemPage = [];
      } else {
        this.pageSelect = [];
        this.pawnItemPage = pawnItem.content;
        this.totalPage = pawnItem.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  previous() {
    this.page = this.page - 1;
    this.pawnItemService.getAllPawnItem(this.itemName, this.pawnName, this.page).subscribe(pawnItem => {
      if (pawnItem == null) {
        this.pawnItemPage = [];
      } else {
        this.pageSelect = [];
        this.pawnItemPage = pawnItem.content;
        this.totalPage = pawnItem.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  next() {
    this.page = this.page + 1;
    this.pawnItemService.getAllPawnItem(this.itemName, this.pawnName, this.page).subscribe(pawnItem => {
      if (pawnItem == null) {
        this.pawnItemPage = [];
      } else {
        this.pageSelect = [];
        this.pawnItemPage = pawnItem.content;
        this.totalPage = pawnItem.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  changePage(pageNow: number) {
    this.page = pageNow;
    this.pawnItemService.getAllPawnItem(this.itemName, this.pawnName, this.page).subscribe(pawnItem => {
      if (pawnItem == null) {
        this.pawnItemPage = [];
      } else {
        this.pageSelect = [];
        this.pawnItemPage = pawnItem.content;
        this.totalPage = pawnItem.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }
}
