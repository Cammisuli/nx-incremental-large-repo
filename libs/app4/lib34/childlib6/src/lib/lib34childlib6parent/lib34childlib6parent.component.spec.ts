import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib6parentComponent } from './lib34childlib6parent.component';

describe('Lib34childlib6parentComponent', () => {
  let component: Lib34childlib6parentComponent;
  let fixture: ComponentFixture<Lib34childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
