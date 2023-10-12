import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcheServiceComponent } from './marche-service.component';

describe('MarcheServiceComponent', () => {
  let component: MarcheServiceComponent;
  let fixture: ComponentFixture<MarcheServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcheServiceComponent]
    });
    fixture = TestBed.createComponent(MarcheServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
