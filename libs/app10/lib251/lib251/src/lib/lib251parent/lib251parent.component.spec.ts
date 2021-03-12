import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib251parentComponent } from './lib251parent.component';

describe('Lib251parentComponent', () => {
  let component: Lib251parentComponent;
  let fixture: ComponentFixture<Lib251parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib251parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib251parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
