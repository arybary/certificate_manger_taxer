import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateManagerComponent } from './certificate-manager.component';
import { CertificateRoutingModule } from './certificate-routing.module';
import { FileInputComponent } from './components/file-input/file-input.component';
import { CertificateStateModule } from './state/certificate-state.module';
import { InputAndInfoCertificateComponent } from './containers/input-and-info-certificate/input-and-info-certificate.component';




@NgModule({
  declarations: [CertificateManagerComponent, FileInputComponent, InputAndInfoCertificateComponent,],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    CertificateStateModule

  ],

})
export class CertificateManagerModule { }
