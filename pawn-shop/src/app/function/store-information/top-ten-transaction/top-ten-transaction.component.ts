import {Component, OnInit} from '@angular/core';
import {Contract} from '../../../model/contract/contract';
import {TopTenTransactionService} from './top-ten-transaction.service';

@Component({
  selector: 'app-top-ten-transaction',
  templateUrl: './top-ten-transaction.component.html',
  styleUrls: ['./top-ten-transaction.component.css']
})
export class TopTenTransactionComponent implements OnInit {
  contractList: Contract[];
  constructor(private topTen: TopTenTransactionService) {
  }

  ngOnInit(): void {
    this.topTen.getAll().subscribe(
       value => this.contractList = value
    );
  }

}
