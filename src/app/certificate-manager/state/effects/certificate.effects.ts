// certificate.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CertificateActions from '../actions/certificate.actions';
import { CertificateService } from '../../services/certificate.service';


@Injectable()
export class CertificateEffects {
  loadCertificates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CertificateActions.loadCertificates),
      mergeMap(() =>
        this.certificateService.getCertificates().pipe(
          map(certificates => CertificateActions.certificatesLoaded({ certificates })),
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
          map(certificate => CertificateActions.certificateAdded({ certificate })),
          catchError(() => of({ type: 'Add Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private certificateService: CertificateService
  ) { }
}
