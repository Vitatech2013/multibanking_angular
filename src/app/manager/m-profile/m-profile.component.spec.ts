import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProfileComponent } from './m-profile.component';

describe('MProfileComponent', () => {
  let component: MProfileComponent;
  let fixture: ComponentFixture<MProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
