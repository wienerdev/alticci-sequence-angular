import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceCalculatorComponent } from './sequence-calculator.component';

describe('SequenceCalculatorComponent', () => {
  let component: SequenceCalculatorComponent;
  let fixture: ComponentFixture<SequenceCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenceCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequenceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
