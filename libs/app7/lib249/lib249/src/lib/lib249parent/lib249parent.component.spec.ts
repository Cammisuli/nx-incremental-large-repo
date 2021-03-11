import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib249parentComponent } from './lib249parent.component';

describe('Lib249parentComponent', () => {
  let component: Lib249parentComponent;
  let fixture: ComponentFixture<Lib249parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib249parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib249parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
