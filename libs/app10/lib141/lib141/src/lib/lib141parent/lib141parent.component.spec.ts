import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib141parentComponent } from './lib141parent.component';

describe('Lib141parentComponent', () => {
  let component: Lib141parentComponent;
  let fixture: ComponentFixture<Lib141parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib141parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib141parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
