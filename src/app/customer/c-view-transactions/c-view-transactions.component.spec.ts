import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CViewTransactionsComponent } from './c-view-transactions.component';

describe('CViewTransactionsComponent', () => {
  let component: CViewTransactionsComponent;
  let fixture: ComponentFixture<CViewTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CViewTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CViewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
