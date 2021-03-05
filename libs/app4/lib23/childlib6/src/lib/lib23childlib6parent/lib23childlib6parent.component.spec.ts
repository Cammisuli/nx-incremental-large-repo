import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib6parentComponent } from './lib23childlib6parent.component';

describe('Lib23childlib6parentComponent', () => {
  let component: Lib23childlib6parentComponent;
  let fixture: ComponentFixture<Lib23childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
