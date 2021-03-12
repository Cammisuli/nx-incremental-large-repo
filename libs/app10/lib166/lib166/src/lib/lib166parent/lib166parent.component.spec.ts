import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib166parentComponent } from './lib166parent.component';

describe('Lib166parentComponent', () => {
  let component: Lib166parentComponent;
  let fixture: ComponentFixture<Lib166parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib166parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib166parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
