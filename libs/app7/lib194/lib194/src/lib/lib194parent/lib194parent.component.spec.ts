import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib194parentComponent } from './lib194parent.component';

describe('Lib194parentComponent', () => {
  let component: Lib194parentComponent;
  let fixture: ComponentFixture<Lib194parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib194parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib194parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
