import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowmodelComponent } from './windowmodel.component';

describe('WindowmodelComponent', () => {
  let component: WindowmodelComponent;
  let fixture: ComponentFixture<WindowmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
