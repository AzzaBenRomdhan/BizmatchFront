import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteObjectifComponent } from './delete-objectif.component';

describe('DeleteObjectifComponent', () => {
  let component: DeleteObjectifComponent;
  let fixture: ComponentFixture<DeleteObjectifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteObjectifComponent]
    });
    fixture = TestBed.createComponent(DeleteObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
