import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib157parentComponent } from './lib157parent.component';

describe('Lib157parentComponent', () => {
  let component: Lib157parentComponent;
  let fixture: ComponentFixture<Lib157parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib157parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib157parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
