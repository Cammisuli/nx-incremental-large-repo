import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib365parentComponent } from './lib365parent.component';

describe('Lib365parentComponent', () => {
  let component: Lib365parentComponent;
  let fixture: ComponentFixture<Lib365parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib365parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib365parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
