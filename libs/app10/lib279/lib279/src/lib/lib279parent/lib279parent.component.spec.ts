import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib279parentComponent } from './lib279parent.component';

describe('Lib279parentComponent', () => {
  let component: Lib279parentComponent;
  let fixture: ComponentFixture<Lib279parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib279parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib279parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
