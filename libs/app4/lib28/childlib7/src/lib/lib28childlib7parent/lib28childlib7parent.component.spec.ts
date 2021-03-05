import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib7parentComponent } from './lib28childlib7parent.component';

describe('Lib28childlib7parentComponent', () => {
  let component: Lib28childlib7parentComponent;
  let fixture: ComponentFixture<Lib28childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
