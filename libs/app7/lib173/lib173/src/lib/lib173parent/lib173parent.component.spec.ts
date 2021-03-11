import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib173parentComponent } from './lib173parent.component';

describe('Lib173parentComponent', () => {
  let component: Lib173parentComponent;
  let fixture: ComponentFixture<Lib173parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib173parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib173parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
