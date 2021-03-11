import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib203parentComponent } from './lib203parent.component';

describe('Lib203parentComponent', () => {
  let component: Lib203parentComponent;
  let fixture: ComponentFixture<Lib203parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib203parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib203parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
