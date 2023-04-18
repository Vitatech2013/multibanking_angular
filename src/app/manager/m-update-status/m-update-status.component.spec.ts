import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUpdateStatusComponent } from './m-update-status.component';

describe('MUpdateStatusComponent', () => {
  let component: MUpdateStatusComponent;
  let fixture: ComponentFixture<MUpdateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MUpdateStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
