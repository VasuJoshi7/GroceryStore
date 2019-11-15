import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderaddeditComponent } from './orderaddedit.component';

describe('OrderaddeditComponent', () => {
  let component: OrderaddeditComponent;
  let fixture: ComponentFixture<OrderaddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderaddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderaddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
