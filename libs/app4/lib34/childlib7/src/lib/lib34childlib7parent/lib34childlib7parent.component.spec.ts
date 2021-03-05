import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib7parentComponent } from './lib34childlib7parent.component';

describe('Lib34childlib7parentComponent', () => {
  let component: Lib34childlib7parentComponent;
  let fixture: ComponentFixture<Lib34childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
