import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib132parentComponent } from './lib132parent.component';

describe('Lib132parentComponent', () => {
  let component: Lib132parentComponent;
  let fixture: ComponentFixture<Lib132parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib132parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib132parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
