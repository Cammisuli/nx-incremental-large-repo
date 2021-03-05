import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib7parentComponent } from './lib6childlib7parent.component';

describe('Lib6childlib7parentComponent', () => {
  let component: Lib6childlib7parentComponent;
  let fixture: ComponentFixture<Lib6childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
