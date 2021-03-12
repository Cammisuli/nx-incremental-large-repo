import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib263parentComponent } from './lib263parent.component';

describe('Lib263parentComponent', () => {
  let component: Lib263parentComponent;
  let fixture: ComponentFixture<Lib263parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib263parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib263parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
