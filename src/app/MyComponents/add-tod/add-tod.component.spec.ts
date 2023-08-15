import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodComponent } from './add-tod.component';

describe('AddTodComponent', () => {
  let component: AddTodComponent;
  let fixture: ComponentFixture<AddTodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodComponent]
    });
    fixture = TestBed.createComponent(AddTodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
