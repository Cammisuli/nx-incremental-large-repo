import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib7parentComponent } from './lib32childlib7parent.component';

describe('Lib32childlib7parentComponent', () => {
  let component: Lib32childlib7parentComponent;
  let fixture: ComponentFixture<Lib32childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
