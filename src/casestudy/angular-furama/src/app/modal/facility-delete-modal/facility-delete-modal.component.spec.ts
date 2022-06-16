import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDeleteModalComponent } from './facility-delete-modal.component';

describe('FacilityDeleteModalComponent', () => {
  let component: FacilityDeleteModalComponent;
  let fixture: ComponentFixture<FacilityDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
