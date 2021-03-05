import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib5parentComponent } from './lib27childlib5parent.component';

describe('Lib27childlib5parentComponent', () => {
  let component: Lib27childlib5parentComponent;
  let fixture: ComponentFixture<Lib27childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
