import {Component, OnInit} from '@angular/core';
import {contractList} from '../../data/contractList';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList = contractList;

  constructor() {
  }

  ngOnInit(): void {
  }

}
