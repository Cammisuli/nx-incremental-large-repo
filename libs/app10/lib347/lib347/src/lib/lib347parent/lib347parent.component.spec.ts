import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib347parentComponent } from './lib347parent.component';

describe('Lib347parentComponent', () => {
  let component: Lib347parentComponent;
  let fixture: ComponentFixture<Lib347parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib347parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib347parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
