import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib7parentComponent } from './lib8childlib7parent.component';

describe('Lib8childlib7parentComponent', () => {
  let component: Lib8childlib7parentComponent;
  let fixture: ComponentFixture<Lib8childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
