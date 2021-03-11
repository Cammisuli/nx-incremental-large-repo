import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib280parentComponent } from './lib280parent.component';

describe('Lib280parentComponent', () => {
  let component: Lib280parentComponent;
  let fixture: ComponentFixture<Lib280parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib280parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib280parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
