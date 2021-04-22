import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EWizardComponent } from './e-wizard.component';

describe('EWizardComponent', () => {
  let component: EWizardComponent;
  let fixture: ComponentFixture<EWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
