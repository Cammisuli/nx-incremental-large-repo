import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib126parentComponent } from './lib126parent.component';

describe('Lib126parentComponent', () => {
  let component: Lib126parentComponent;
  let fixture: ComponentFixture<Lib126parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib126parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib126parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
