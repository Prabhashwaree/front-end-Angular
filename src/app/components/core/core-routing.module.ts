import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCoreComponent } from './home-core/home-core.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCoreComponent,
    // children: [
    //   // { path: 'create', component: HomeCoreComponent },
    // ],
  },
];   

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
