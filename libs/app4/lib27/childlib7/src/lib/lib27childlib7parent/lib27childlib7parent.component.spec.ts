import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib7parentComponent } from './lib27childlib7parent.component';

describe('Lib27childlib7parentComponent', () => {
  let component: Lib27childlib7parentComponent;
  let fixture: ComponentFixture<Lib27childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
