import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib152parentComponent } from './lib152parent.component';

describe('Lib152parentComponent', () => {
  let component: Lib152parentComponent;
  let fixture: ComponentFixture<Lib152parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib152parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib152parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
