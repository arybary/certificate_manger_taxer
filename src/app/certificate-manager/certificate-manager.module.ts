import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateStateModule } from './state/certificate-state.module';
import { InputAndInfoCertificateComponent } from './containers/input-and-info-certificate/input-and-info-certificate.component';
import { CerificateInputComponent } from './components/cerificate-input/cerificate-input.component';
import { CertificateListComponent } from './components/certificate-list/certificate-list.component';
import { CertificateManagerComponent } from './containers/certificate-manager/certificate-manager.component';
import { CertificateInfoComponent } from './components/certificate-info/certificate-info.component';

@NgModule({
  declarations: [
    CertificateManagerComponent,
    CerificateInputComponent,
    CertificateListComponent,
    CertificateInfoComponent,
    InputAndInfoCertificateComponent,
  ],
  imports: [CommonModule, CertificateRoutingModule, CertificateStateModule],
})
export class CertificateManagerModule { }
