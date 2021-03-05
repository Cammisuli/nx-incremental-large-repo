import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib6parentComponent } from './lib19childlib6parent.component';

describe('Lib19childlib6parentComponent', () => {
  let component: Lib19childlib6parentComponent;
  let fixture: ComponentFixture<Lib19childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
