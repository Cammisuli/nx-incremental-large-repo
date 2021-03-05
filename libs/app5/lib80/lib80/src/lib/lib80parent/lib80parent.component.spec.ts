import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib80parentComponent } from './lib80parent.component';

describe('Lib80parentComponent', () => {
  let component: Lib80parentComponent;
  let fixture: ComponentFixture<Lib80parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib80parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib80parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
