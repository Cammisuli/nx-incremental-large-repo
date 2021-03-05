import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib7parentComponent } from './lib19childlib7parent.component';

describe('Lib19childlib7parentComponent', () => {
  let component: Lib19childlib7parentComponent;
  let fixture: ComponentFixture<Lib19childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
