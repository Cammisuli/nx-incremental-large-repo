import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib177parentComponent } from './lib177parent.component';

describe('Lib177parentComponent', () => {
  let component: Lib177parentComponent;
  let fixture: ComponentFixture<Lib177parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib177parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib177parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
