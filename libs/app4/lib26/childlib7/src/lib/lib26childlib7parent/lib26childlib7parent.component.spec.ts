import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib7parentComponent } from './lib26childlib7parent.component';

describe('Lib26childlib7parentComponent', () => {
  let component: Lib26childlib7parentComponent;
  let fixture: ComponentFixture<Lib26childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
