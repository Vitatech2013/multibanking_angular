import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AViewTransactionsComponent } from './a-view-transactions.component';

describe('AViewTransactionsComponent', () => {
  let component: AViewTransactionsComponent;
  let fixture: ComponentFixture<AViewTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AViewTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AViewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
