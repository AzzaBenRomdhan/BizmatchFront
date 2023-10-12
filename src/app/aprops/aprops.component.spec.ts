import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApropsComponent } from './aprops.component';

describe('ApropsComponent', () => {
  let component: ApropsComponent;
  let fixture: ComponentFixture<ApropsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApropsComponent]
    });
    fixture = TestBed.createComponent(ApropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
