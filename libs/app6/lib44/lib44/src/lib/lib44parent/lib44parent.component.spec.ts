import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib44parentComponent } from './lib44parent.component';

describe('Lib44parentComponent', () => {
  let component: Lib44parentComponent;
  let fixture: ComponentFixture<Lib44parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib44parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib44parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
