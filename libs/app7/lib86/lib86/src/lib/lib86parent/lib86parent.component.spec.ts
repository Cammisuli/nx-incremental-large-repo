import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib86parentComponent } from './lib86parent.component';

describe('Lib86parentComponent', () => {
  let component: Lib86parentComponent;
  let fixture: ComponentFixture<Lib86parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib86parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib86parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
