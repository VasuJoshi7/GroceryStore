import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditUsersComponent } from './addedit-users.component';

describe('AddeditUsersComponent', () => {
  let component: AddeditUsersComponent;
  let fixture: ComponentFixture<AddeditUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
