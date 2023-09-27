import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro2ScreenComponent } from './registro2-screen.component';

describe('Registro2ScreenComponent', () => {
  let component: Registro2ScreenComponent;
  let fixture: ComponentFixture<Registro2ScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registro2ScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Registro2ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
