import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib216parentComponent } from './lib216parent.component';

describe('Lib216parentComponent', () => {
  let component: Lib216parentComponent;
  let fixture: ComponentFixture<Lib216parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib216parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib216parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
