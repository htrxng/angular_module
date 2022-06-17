import {Component, OnInit} from '@angular/core';
import {ContractService} from '../contract.service';
import {Contract} from '../../model/Contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    this.contractService.getList().subscribe(contracts => {
      this.contractList = contracts;
    });
  }
}
