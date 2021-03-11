import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib277parentComponent } from './lib277parent.component';

describe('Lib277parentComponent', () => {
  let component: Lib277parentComponent;
  let fixture: ComponentFixture<Lib277parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib277parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib277parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
