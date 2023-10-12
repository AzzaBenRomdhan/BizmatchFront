import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviObjectifsComponent } from './suivi-objectifs.component';

describe('SuiviObjectifsComponent', () => {
  let component: SuiviObjectifsComponent;
  let fixture: ComponentFixture<SuiviObjectifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviObjectifsComponent]
    });
    fixture = TestBed.createComponent(SuiviObjectifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
