import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CertificateActions from './actions/certificate.actions';
import * as CertificateFeature from './selectors/certificate.selectors';
import { Certificate } from '../models/certificate';

import { CertificateState } from './redusers/certificate.redusers';


@Injectable()
export class CertificateFacade {
  public readonly certificates$: Observable<Certificate[]> = this.store.pipe(
    select(CertificateFeature.selectAllCertificates)
  );

  constructor(private readonly store: Store<CertificateState>) { }

  public loadCertificates(): void {
    this.store.dispatch(CertificateActions.loadCertificates());
  }

  public addCertificate(certificateData: File): void {
    this.store.dispatch(
      CertificateActions.addCertificate({ certificateData })
    );
  }
}
