import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib311parentComponent } from './lib311parent.component';

describe('Lib311parentComponent', () => {
  let component: Lib311parentComponent;
  let fixture: ComponentFixture<Lib311parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib311parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib311parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
