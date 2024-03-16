// certificate.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

import * as CertificateActions from '../actions/certificate.actions';
import { Certificate } from '../../models/certificate';

export const certificateAdapter = createEntityAdapter<Certificate>();

export interface CertificateState extends EntityState<Certificate> { }

export const initialCertificateState: CertificateState = certificateAdapter.getInitialState();

export const certificateReducer = createReducer(
  initialCertificateState,
  on(CertificateActions.certificatesLoaded, (state, { certificates }) =>
    certificateAdapter.setAll(certificates, state)
  ),
  on(CertificateActions.certificateAdded, (state, { certificate }) =>
    certificateAdapter.addOne(certificate, state)
  )
  // Другие действия, если необходимо
);
