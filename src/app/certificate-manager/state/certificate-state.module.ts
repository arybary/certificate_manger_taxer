import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CertificateEffects } from './effects/certificate.effects';
import { KEY_FOR_CERTIFICATES } from '../constans/key';
import { certificateReducer } from './redusers/certificate.redusers';
import { CertificateFacade } from './certificate.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(KEY_FOR_CERTIFICATES, certificateReducer),
    EffectsModule.forFeature([CertificateEffects]),
  ],
  providers: [CertificateFacade],
})
export class CertificateStateModule { }
