import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEditProfileComponent } from './c-edit-profile.component';

describe('CEditProfileComponent', () => {
  let component: CEditProfileComponent;
  let fixture: ComponentFixture<CEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
