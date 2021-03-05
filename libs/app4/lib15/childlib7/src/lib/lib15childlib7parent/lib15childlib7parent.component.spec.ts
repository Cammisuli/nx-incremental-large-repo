import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib7parentComponent } from './lib15childlib7parent.component';

describe('Lib15childlib7parentComponent', () => {
  let component: Lib15childlib7parentComponent;
  let fixture: ComponentFixture<Lib15childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
