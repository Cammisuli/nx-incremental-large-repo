import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib7parentComponent } from './lib31childlib7parent.component';

describe('Lib31childlib7parentComponent', () => {
  let component: Lib31childlib7parentComponent;
  let fixture: ComponentFixture<Lib31childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
