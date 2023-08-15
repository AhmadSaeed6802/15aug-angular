import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragdropComponent } from './fragdrop.component';

describe('FragdropComponent', () => {
  let component: FragdropComponent;
  let fixture: ComponentFixture<FragdropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FragdropComponent]
    });
    fixture = TestBed.createComponent(FragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
