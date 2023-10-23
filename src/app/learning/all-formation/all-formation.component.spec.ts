import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFormationComponent } from './all-formation.component';

describe('AllFormationComponent', () => {
  let component: AllFormationComponent;
  let fixture: ComponentFixture<AllFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFormationComponent]
    });
    fixture = TestBed.createComponent(AllFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
