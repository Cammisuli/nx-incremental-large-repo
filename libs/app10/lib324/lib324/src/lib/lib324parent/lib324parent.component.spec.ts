import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib324parentComponent } from './lib324parent.component';

describe('Lib324parentComponent', () => {
  let component: Lib324parentComponent;
  let fixture: ComponentFixture<Lib324parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib324parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib324parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
