import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{ path: '', redirectTo: 'certificate', pathMatch: 'full' },
{
  path: 'certificate',
  loadChildren: () => import('./certificate-manager/certificate-manager.module').then(m => m.CertificateManagerModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
