import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MChangePswdComponent } from './m-change-pswd.component';

describe('MChangePswdComponent', () => {
  let component: MChangePswdComponent;
  let fixture: ComponentFixture<MChangePswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MChangePswdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MChangePswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
