import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib348parentComponent } from './lib348parent.component';

describe('Lib348parentComponent', () => {
  let component: Lib348parentComponent;
  let fixture: ComponentFixture<Lib348parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib348parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib348parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
