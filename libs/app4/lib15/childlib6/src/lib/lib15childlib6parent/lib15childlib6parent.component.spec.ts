import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib6parentComponent } from './lib15childlib6parent.component';

describe('Lib15childlib6parentComponent', () => {
  let component: Lib15childlib6parentComponent;
  let fixture: ComponentFixture<Lib15childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
