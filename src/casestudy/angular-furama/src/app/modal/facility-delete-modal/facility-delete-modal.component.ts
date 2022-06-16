import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-facility-delete-modal',
  templateUrl: './facility-delete-modal.component.html',
  styleUrls: ['./facility-delete-modal.component.css']
})
export class FacilityDeleteModalComponent implements OnInit {
  @Input() facilityName: string;
  @Input() facilityId: number;
  @Output() confirmFacility = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteFacility() {
    this.confirmFacility.emit(this.facilityId);
  }

}
