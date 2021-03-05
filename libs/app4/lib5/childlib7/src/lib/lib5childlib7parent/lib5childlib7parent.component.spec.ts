import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib7parentComponent } from './lib5childlib7parent.component';

describe('Lib5childlib7parentComponent', () => {
  let component: Lib5childlib7parentComponent;
  let fixture: ComponentFixture<Lib5childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
