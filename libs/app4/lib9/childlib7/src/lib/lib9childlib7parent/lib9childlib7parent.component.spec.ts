import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib7parentComponent } from './lib9childlib7parent.component';

describe('Lib9childlib7parentComponent', () => {
  let component: Lib9childlib7parentComponent;
  let fixture: ComponentFixture<Lib9childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
