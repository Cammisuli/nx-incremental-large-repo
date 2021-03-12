import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib79parentComponent } from './lib79parent.component';

describe('Lib79parentComponent', () => {
  let component: Lib79parentComponent;
  let fixture: ComponentFixture<Lib79parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib79parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib79parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
