import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEditProfileComponent } from './m-edit-profile.component';

describe('MEditProfileComponent', () => {
  let component: MEditProfileComponent;
  let fixture: ComponentFixture<MEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
