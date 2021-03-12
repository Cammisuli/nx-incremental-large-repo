import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib239parentComponent } from './lib239parent.component';

describe('Lib239parentComponent', () => {
  let component: Lib239parentComponent;
  let fixture: ComponentFixture<Lib239parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib239parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib239parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
