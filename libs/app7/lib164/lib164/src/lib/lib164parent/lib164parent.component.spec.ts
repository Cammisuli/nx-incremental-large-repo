import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib164parentComponent } from './lib164parent.component';

describe('Lib164parentComponent', () => {
  let component: Lib164parentComponent;
  let fixture: ComponentFixture<Lib164parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib164parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib164parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
