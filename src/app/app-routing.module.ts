
import { EmployComponent } from './employ/employ.component';
import { FilterComponent } from './filter/filter.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: FilterComponent },
  { path: 'chart', component: EmployComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
