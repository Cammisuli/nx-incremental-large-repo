import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib299parentComponent } from './lib299parent.component';

describe('Lib299parentComponent', () => {
  let component: Lib299parentComponent;
  let fixture: ComponentFixture<Lib299parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib299parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib299parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
