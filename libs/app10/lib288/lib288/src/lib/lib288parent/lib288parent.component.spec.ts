import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib288parentComponent } from './lib288parent.component';

describe('Lib288parentComponent', () => {
  let component: Lib288parentComponent;
  let fixture: ComponentFixture<Lib288parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib288parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib288parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
