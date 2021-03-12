import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib248parentComponent } from './lib248parent.component';

describe('Lib248parentComponent', () => {
  let component: Lib248parentComponent;
  let fixture: ComponentFixture<Lib248parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib248parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib248parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
