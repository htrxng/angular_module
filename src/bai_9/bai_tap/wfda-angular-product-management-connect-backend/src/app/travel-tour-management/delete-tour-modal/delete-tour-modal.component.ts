import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete-tour-modal',
  templateUrl: './delete-tour-modal.component.html',
  styleUrls: ['./delete-tour-modal.component.css']
})
export class DeleteTourModalComponent implements OnInit {
  @Input() tourId: number;
  @Input() tourName: string;
  @Output() confirmDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  deleteTransaction() {
    this.confirmDelete.emit(this.tourId);
  }
}
