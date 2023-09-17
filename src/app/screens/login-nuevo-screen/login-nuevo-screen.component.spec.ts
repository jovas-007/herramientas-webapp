import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNuevoScreenComponent } from './login-nuevo-screen.component';

describe('LoginNuevoScreenComponent', () => {
  let component: LoginNuevoScreenComponent;
  let fixture: ComponentFixture<LoginNuevoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNuevoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNuevoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
