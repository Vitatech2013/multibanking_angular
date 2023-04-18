import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingAccountPageComponent } from './existing-account-page.component';

describe('ExistingAccountPageComponent', () => {
  let component: ExistingAccountPageComponent;
  let fixture: ComponentFixture<ExistingAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingAccountPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
