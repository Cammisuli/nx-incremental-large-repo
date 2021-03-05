import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib6parentComponent } from './lib36childlib6parent.component';

describe('Lib36childlib6parentComponent', () => {
  let component: Lib36childlib6parentComponent;
  let fixture: ComponentFixture<Lib36childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
