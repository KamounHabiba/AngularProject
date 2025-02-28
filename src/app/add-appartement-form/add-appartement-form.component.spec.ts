import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppartementFormComponent } from './add-appartement-form.component';

describe('AddAppartementFormComponent', () => {
  let component: AddAppartementFormComponent;
  let fixture: ComponentFixture<AddAppartementFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAppartementFormComponent]
    });
    fixture = TestBed.createComponent(AddAppartementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
