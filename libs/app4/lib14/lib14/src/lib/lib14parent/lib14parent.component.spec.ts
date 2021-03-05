import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14parentComponent } from './lib14parent.component';

describe('Lib14parentComponent', () => {
  let component: Lib14parentComponent;
  let fixture: ComponentFixture<Lib14parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
