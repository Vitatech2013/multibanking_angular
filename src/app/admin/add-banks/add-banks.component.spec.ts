import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBanksComponent } from './add-banks.component';

describe('AddBanksComponent', () => {
  let component: AddBanksComponent;
  let fixture: ComponentFixture<AddBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
