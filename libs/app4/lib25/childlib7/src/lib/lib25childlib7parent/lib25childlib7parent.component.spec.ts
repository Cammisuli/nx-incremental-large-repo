import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib7parentComponent } from './lib25childlib7parent.component';

describe('Lib25childlib7parentComponent', () => {
  let component: Lib25childlib7parentComponent;
  let fixture: ComponentFixture<Lib25childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
