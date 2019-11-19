import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbapDocComponent } from  './abap-doc/abap-doc.component'

const routes: Routes = [
  {
    path: 'abapdoc',
    component: AbapDocComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
