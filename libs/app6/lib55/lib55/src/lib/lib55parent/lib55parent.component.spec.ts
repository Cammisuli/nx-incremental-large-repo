import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib55parentComponent } from './lib55parent.component';

describe('Lib55parentComponent', () => {
  let component: Lib55parentComponent;
  let fixture: ComponentFixture<Lib55parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib55parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib55parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
