import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib7parentComponent } from './lib36childlib7parent.component';

describe('Lib36childlib7parentComponent', () => {
  let component: Lib36childlib7parentComponent;
  let fixture: ComponentFixture<Lib36childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
