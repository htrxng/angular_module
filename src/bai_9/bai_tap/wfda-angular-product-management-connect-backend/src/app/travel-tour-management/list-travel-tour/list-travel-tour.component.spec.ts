import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTravelTourComponent } from './list-travel-tour.component';

describe('ListTravelTourComponent', () => {
  let component: ListTravelTourComponent;
  let fixture: ComponentFixture<ListTravelTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTravelTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTravelTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
