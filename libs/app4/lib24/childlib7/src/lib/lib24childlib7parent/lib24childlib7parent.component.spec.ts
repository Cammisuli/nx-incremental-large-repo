import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib7parentComponent } from './lib24childlib7parent.component';

describe('Lib24childlib7parentComponent', () => {
  let component: Lib24childlib7parentComponent;
  let fixture: ComponentFixture<Lib24childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
