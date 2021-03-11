import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib172parentComponent } from './lib172parent.component';

describe('Lib172parentComponent', () => {
  let component: Lib172parentComponent;
  let fixture: ComponentFixture<Lib172parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib172parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib172parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
