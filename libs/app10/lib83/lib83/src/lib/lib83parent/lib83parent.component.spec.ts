import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib83parentComponent } from './lib83parent.component';

describe('Lib83parentComponent', () => {
  let component: Lib83parentComponent;
  let fixture: ComponentFixture<Lib83parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib83parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib83parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
