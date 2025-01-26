import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionDetailsComponent } from './consumption-details.component';

describe('ConsumptionDetailsComponent', () => {
  let component: ConsumptionDetailsComponent;
  let fixture: ComponentFixture<ConsumptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumptionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
