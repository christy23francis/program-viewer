import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirDataLandingComponent } from './air-data-landing.component';

describe('AirDataLandingComponent', () => {
  let component: AirDataLandingComponent;
  let fixture: ComponentFixture<AirDataLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirDataLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirDataLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
