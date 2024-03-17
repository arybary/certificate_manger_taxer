import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CertificateActions from './actions/certificate.actions';
import { CertificateData } from '../models/certificate';
import { CertificateState } from './redusers/certificate.redusers';
import { cetrificateFeature } from './selectors/certificate.selectors';

@Injectable()
export class CertificateFacade {
  public readonly certificates$: Observable<CertificateData[]> = this.store.pipe(
    select(cetrificateFeature.selectAll)
  );

  public readonly selectedCertificate$: Observable<CertificateData | null | undefined> =
    this.store.pipe(select(cetrificateFeature.selectSelectedCertificate));

  public readonly selectedCertificateId$: Observable<number | null> = this.store.pipe(
    select(cetrificateFeature.selectSelectedCertificateId)
  );

  constructor(private readonly store: Store<CertificateState>) { }

  public loadCertificates(): void {
    this.store.dispatch(CertificateActions.loadCertificates());
  }

  public addCertificate(certificateData: File): void {
    this.store.dispatch(CertificateActions.addCertificate({ certificateData }));
  }

  public selectCertificate(id: number): void {
    this.store.dispatch(
      CertificateActions.certificateAdded.selectCertificate({ certificateId: id })
    );
  }
}
