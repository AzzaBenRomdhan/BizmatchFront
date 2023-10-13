import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminBackComponent } from './user-admin-back.component';

describe('UserAdminBackComponent', () => {
  let component: UserAdminBackComponent;
  let fixture: ComponentFixture<UserAdminBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAdminBackComponent]
    });
    fixture = TestBed.createComponent(UserAdminBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
