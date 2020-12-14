import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologaComponent } from './astrologa.component';

describe('AstrologaComponent', () => {
  let component: AstrologaComponent;
  let fixture: ComponentFixture<AstrologaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstrologaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrologaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
