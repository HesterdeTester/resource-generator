import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiningFormComponent } from './mining-form/mining-form.component';


const routes: Routes = [
  {path: '', component: MiningFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
