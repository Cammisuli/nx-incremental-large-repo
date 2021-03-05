import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib7parentComponent } from './lib38childlib7parent.component';

describe('Lib38childlib7parentComponent', () => {
  let component: Lib38childlib7parentComponent;
  let fixture: ComponentFixture<Lib38childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
