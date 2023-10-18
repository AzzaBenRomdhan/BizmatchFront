import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/payment/cancel/cancel.component.spec.ts
import { CancelComponent } from './cancel.component';

describe('CancelComponent', () => {
  let component: CancelComponent;
  let fixture: ComponentFixture<CancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelComponent]
    });
    fixture = TestBed.createComponent(CancelComponent);
========
import { CrmComponent } from './crm.component';

describe('CrmComponent', () => {
  let component: CrmComponent;
  let fixture: ComponentFixture<CrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrmComponent]
    });
    fixture = TestBed.createComponent(CrmComponent);
>>>>>>>> 2c12b0f14eaae9a73394e93da8ca69c71130ed2e:src/app/crm/crm.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
