import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, concatMap } from 'rxjs/operators';
import * as CertificateActions from '../actions/certificate.actions';
import { CertificateService } from '../../services/certificate.service';
import { CertificateFacade } from '../certificate.facade';


@Injectable()
export class CertificateEffects {
  loadCertificates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CertificateActions.loadCertificates),
      mergeMap(() =>
        this.certificateService.getCertificates().pipe(
          concatMap(certificates => [CertificateActions.certificatesLoaded({ certificates }), CertificateActions.certificateAdded.selectCertificate({ certificateId: certificates[0].id })]),
          catchError(() => of({ type: 'Load Error' }))
        )
      )
    )
  );

  addCertificate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CertificateActions.addCertificate),
      mergeMap(action =>
        this.certificateService.convertAndAddCertificate(action.certificateData).pipe(
          concatMap(certificate => [
            CertificateActions.certificateAdded.addCertificate({ certificate }),

            CertificateActions.loadCertificates(), CertificateActions.certificateAdded.selectCertificate({ certificateId: certificate.id }),
          ]),
          catchError(() => of({ type: 'Add Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private certificateService: CertificateService,
    private certificateFacade: CertificateFacade
  ) { }
}
