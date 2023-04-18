import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAccountRequestsComponent } from './m-account-requests.component';

describe('MAccountRequestsComponent', () => {
  let component: MAccountRequestsComponent;
  let fixture: ComponentFixture<MAccountRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAccountRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAccountRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
