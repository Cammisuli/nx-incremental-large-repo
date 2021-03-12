import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib189parentComponent } from './lib189parent.component';

describe('Lib189parentComponent', () => {
  let component: Lib189parentComponent;
  let fixture: ComponentFixture<Lib189parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib189parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib189parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
