import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateManagerComponent } from './certificate-manager.component';
import { CertificateRoutingModule } from './certificate-routing.module';
import { FileInputComponent } from './components/file-input/file-input.component';



@NgModule({
  declarations: [CertificateManagerComponent, FileInputComponent],
  imports: [
    CommonModule,
    CertificateRoutingModule
  ]
})
export class CertificateManagerModule { }
