import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib89parentComponent } from './lib89parent.component';

describe('Lib89parentComponent', () => {
  let component: Lib89parentComponent;
  let fixture: ComponentFixture<Lib89parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib89parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib89parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
