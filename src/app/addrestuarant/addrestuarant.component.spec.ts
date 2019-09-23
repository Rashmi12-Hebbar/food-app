import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrestuarantComponent } from './addrestuarant.component';

describe('AddrestuarantComponent', () => {
  let component: AddrestuarantComponent;
  let fixture: ComponentFixture<AddrestuarantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrestuarantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrestuarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
