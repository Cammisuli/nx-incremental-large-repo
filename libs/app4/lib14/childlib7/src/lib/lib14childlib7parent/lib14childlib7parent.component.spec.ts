import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib7parentComponent } from './lib14childlib7parent.component';

describe('Lib14childlib7parentComponent', () => {
  let component: Lib14childlib7parentComponent;
  let fixture: ComponentFixture<Lib14childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
