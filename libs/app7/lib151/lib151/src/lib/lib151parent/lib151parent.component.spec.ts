import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib151parentComponent } from './lib151parent.component';

describe('Lib151parentComponent', () => {
  let component: Lib151parentComponent;
  let fixture: ComponentFixture<Lib151parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib151parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib151parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
