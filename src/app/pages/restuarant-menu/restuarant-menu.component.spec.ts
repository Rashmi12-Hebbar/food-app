import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantMenuComponent } from './restuarant-menu.component';

describe('RestuarantMenuComponent', () => {
  let component: RestuarantMenuComponent;
  let fixture: ComponentFixture<RestuarantMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestuarantMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
