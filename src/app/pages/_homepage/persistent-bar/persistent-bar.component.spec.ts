import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentBarComponent } from './persistent-bar.component';

describe('PersistentBarComponent', () => {
  let component: PersistentBarComponent;
  let fixture: ComponentFixture<PersistentBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersistentBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
