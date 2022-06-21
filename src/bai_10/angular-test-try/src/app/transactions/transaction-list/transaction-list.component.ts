import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../model/transaction";
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactionList: Transaction[] = [];
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.transactionList = this.transactionService.getAll();
  }
}
