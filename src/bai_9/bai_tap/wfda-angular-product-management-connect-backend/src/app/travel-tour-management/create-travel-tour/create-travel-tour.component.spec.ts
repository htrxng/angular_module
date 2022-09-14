import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTravelTourComponent } from './create-travel-tour.component';

describe('CreateTravelTourComponent', () => {
  let component: CreateTravelTourComponent;
  let fixture: ComponentFixture<CreateTravelTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTravelTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTravelTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
