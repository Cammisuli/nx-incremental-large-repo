import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib6parentComponent } from './lib35childlib6parent.component';

describe('Lib35childlib6parentComponent', () => {
  let component: Lib35childlib6parentComponent;
  let fixture: ComponentFixture<Lib35childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
