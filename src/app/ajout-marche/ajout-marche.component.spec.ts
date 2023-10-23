import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMarcheComponent } from './ajout-marche.component';

describe('AjoutMarcheComponent', () => {
  let component: AjoutMarcheComponent;
  let fixture: ComponentFixture<AjoutMarcheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutMarcheComponent]
    });
    fixture = TestBed.createComponent(AjoutMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
