import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib344parentComponent } from './lib344parent.component';

describe('Lib344parentComponent', () => {
  let component: Lib344parentComponent;
  let fixture: ComponentFixture<Lib344parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib344parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib344parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
