import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CertificateEffects } from './effects/certificate.effects';
import { CertificateFacade } from './certificate.facade';
import { cetrificateFeature } from './selectors/certificate.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(cetrificateFeature),
    EffectsModule.forFeature([CertificateEffects]),
  ],
  providers: [CertificateFacade],
})
export class CertificateStateModule { }
