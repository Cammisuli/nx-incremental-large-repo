import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib7parentComponent } from './lib21childlib7parent.component';

describe('Lib21childlib7parentComponent', () => {
  let component: Lib21childlib7parentComponent;
  let fixture: ComponentFixture<Lib21childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
