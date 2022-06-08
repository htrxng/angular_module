import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitieEditComponent } from './facilitie-edit.component';

describe('FacilitieEditComponent', () => {
  let component: FacilitieEditComponent;
  let fixture: ComponentFixture<FacilitieEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitieEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
