import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib7parentComponent } from './lib7childlib7parent.component';

describe('Lib7childlib7parentComponent', () => {
  let component: Lib7childlib7parentComponent;
  let fixture: ComponentFixture<Lib7childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
