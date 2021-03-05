import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26parentComponent } from './lib26parent.component';

describe('Lib26parentComponent', () => {
  let component: Lib26parentComponent;
  let fixture: ComponentFixture<Lib26parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
