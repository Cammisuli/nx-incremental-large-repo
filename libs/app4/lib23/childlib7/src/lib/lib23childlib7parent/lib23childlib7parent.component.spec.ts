import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib7parentComponent } from './lib23childlib7parent.component';

describe('Lib23childlib7parentComponent', () => {
  let component: Lib23childlib7parentComponent;
  let fixture: ComponentFixture<Lib23childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
