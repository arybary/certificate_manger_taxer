import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateManagerComponent } from './containers/certificate-manager/certificate-manager.component';

const routes: Routes = [
  {
    path: '',
    component: CertificateManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateRoutingModule { }
