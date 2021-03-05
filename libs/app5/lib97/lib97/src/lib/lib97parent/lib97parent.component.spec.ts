import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib97parentComponent } from './lib97parent.component';

describe('Lib97parentComponent', () => {
  let component: Lib97parentComponent;
  let fixture: ComponentFixture<Lib97parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib97parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib97parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
