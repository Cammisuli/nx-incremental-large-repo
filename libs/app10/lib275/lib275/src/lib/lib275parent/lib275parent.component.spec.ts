import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib275parentComponent } from './lib275parent.component';

describe('Lib275parentComponent', () => {
  let component: Lib275parentComponent;
  let fixture: ComponentFixture<Lib275parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib275parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib275parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
