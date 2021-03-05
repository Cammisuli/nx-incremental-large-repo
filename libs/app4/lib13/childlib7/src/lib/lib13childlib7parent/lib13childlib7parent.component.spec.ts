import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib7parentComponent } from './lib13childlib7parent.component';

describe('Lib13childlib7parentComponent', () => {
  let component: Lib13childlib7parentComponent;
  let fixture: ComponentFixture<Lib13childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
