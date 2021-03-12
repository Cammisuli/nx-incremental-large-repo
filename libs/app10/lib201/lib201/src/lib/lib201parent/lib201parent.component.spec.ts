import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib201parentComponent } from './lib201parent.component';

describe('Lib201parentComponent', () => {
  let component: Lib201parentComponent;
  let fixture: ComponentFixture<Lib201parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib201parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib201parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
