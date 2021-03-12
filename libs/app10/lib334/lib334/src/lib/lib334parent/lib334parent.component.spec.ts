import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib334parentComponent } from './lib334parent.component';

describe('Lib334parentComponent', () => {
  let component: Lib334parentComponent;
  let fixture: ComponentFixture<Lib334parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib334parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib334parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
