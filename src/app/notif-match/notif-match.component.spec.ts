import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifMatchComponent } from './notif-match.component';

describe('NotifMatchComponent', () => {
  let component: NotifMatchComponent;
  let fixture: ComponentFixture<NotifMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotifMatchComponent]
    });
    fixture = TestBed.createComponent(NotifMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
