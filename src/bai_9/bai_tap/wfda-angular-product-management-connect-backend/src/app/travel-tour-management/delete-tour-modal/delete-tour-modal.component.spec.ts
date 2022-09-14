import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTourModalComponent } from './delete-tour-modal.component';

describe('DeleteTourModalComponent', () => {
  let component: DeleteTourModalComponent;
  let fixture: ComponentFixture<DeleteTourModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTourModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTourModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
