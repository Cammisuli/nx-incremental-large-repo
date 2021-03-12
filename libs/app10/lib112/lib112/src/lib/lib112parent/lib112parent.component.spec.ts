import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib112parentComponent } from './lib112parent.component';

describe('Lib112parentComponent', () => {
  let component: Lib112parentComponent;
  let fixture: ComponentFixture<Lib112parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib112parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib112parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
