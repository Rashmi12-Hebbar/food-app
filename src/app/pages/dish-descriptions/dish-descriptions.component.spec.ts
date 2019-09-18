import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDescriptionsComponent } from './dish-descriptions.component';

describe('DishDescriptionsComponent', () => {
  let component: DishDescriptionsComponent;
  let fixture: ComponentFixture<DishDescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishDescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
