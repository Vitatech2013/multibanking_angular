import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MViewCustomersComponent } from './m-view-customers.component';

describe('MViewCustomersComponent', () => {
  let component: MViewCustomersComponent;
  let fixture: ComponentFixture<MViewCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MViewCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MViewCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
