import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() busId: number;
  @Input() licensePlates: number;
  @Output() confirmDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  deleteTransaction() {
    this.confirmDelete.emit(this.busId);
  }
}
