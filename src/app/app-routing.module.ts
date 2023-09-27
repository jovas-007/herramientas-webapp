import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginNewScreenComponent } from './screens/login-new-screen/login-new-screen.component';
import { MatIconModule } from '@angular/material/icon';
import { Registro2ScreenComponent } from './screens/registro2-screen/registro2-screen.component';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';

const routes: Routes = [
  //Aquí se agregan cada una de las rutas del proyecto
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'login', component: LoginNewScreenComponent, pathMatch: 'full' },
  { path: 'registro2', component: Registro2ScreenComponent, pathMatch: 'full' },
  { path: 'productos',component: ProductosScreenComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
