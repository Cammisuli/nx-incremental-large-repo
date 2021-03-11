import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib283parentComponent } from './lib283parent.component';

describe('Lib283parentComponent', () => {
  let component: Lib283parentComponent;
  let fixture: ComponentFixture<Lib283parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib283parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib283parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
