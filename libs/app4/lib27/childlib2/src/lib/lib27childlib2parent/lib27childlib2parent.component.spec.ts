import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib2parentComponent } from './lib27childlib2parent.component';

describe('Lib27childlib2parentComponent', () => {
  let component: Lib27childlib2parentComponent;
  let fixture: ComponentFixture<Lib27childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
