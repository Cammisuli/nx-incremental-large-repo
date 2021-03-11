import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib88parentComponent } from './lib88parent.component';

describe('Lib88parentComponent', () => {
  let component: Lib88parentComponent;
  let fixture: ComponentFixture<Lib88parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib88parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib88parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
