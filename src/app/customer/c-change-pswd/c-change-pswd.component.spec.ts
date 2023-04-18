import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CChangePswdComponent } from './c-change-pswd.component';

describe('CChangePswdComponent', () => {
  let component: CChangePswdComponent;
  let fixture: ComponentFixture<CChangePswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CChangePswdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CChangePswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
