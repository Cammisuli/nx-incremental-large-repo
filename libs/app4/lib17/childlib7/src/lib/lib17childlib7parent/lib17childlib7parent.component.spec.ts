import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib7parentComponent } from './lib17childlib7parent.component';

describe('Lib17childlib7parentComponent', () => {
  let component: Lib17childlib7parentComponent;
  let fixture: ComponentFixture<Lib17childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
