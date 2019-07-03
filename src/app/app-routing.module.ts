import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';

const routes: Routes = [
  { path: "a", component: ComponentAComponent },
  { path: "b", component: ComponentBComponent },
  { path: "lazy", loadChildren: () => import("src/app/lazy-loaded/lazy-loaded.module").then(m => m.LazyLoadedModule) },
  { path: "", redirectTo: "/a", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
