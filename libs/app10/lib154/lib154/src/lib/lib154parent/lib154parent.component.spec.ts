import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib154parentComponent } from './lib154parent.component';

describe('Lib154parentComponent', () => {
  let component: Lib154parentComponent;
  let fixture: ComponentFixture<Lib154parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib154parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib154parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
