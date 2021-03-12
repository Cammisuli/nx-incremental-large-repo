import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib335parentComponent } from './lib335parent.component';

describe('Lib335parentComponent', () => {
  let component: Lib335parentComponent;
  let fixture: ComponentFixture<Lib335parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib335parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib335parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
