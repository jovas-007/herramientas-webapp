import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNewScreenComponent } from './login-new-screen.component';

describe('LoginNewScreenComponent', () => {
  let component: LoginNewScreenComponent;
  let fixture: ComponentFixture<LoginNewScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNewScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
