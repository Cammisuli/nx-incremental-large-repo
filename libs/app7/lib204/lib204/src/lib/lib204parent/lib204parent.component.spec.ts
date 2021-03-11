import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib204parentComponent } from './lib204parent.component';

describe('Lib204parentComponent', () => {
  let component: Lib204parentComponent;
  let fixture: ComponentFixture<Lib204parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib204parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib204parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
