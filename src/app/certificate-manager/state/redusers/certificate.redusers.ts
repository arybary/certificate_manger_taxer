import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as CertificateActions from '../actions/certificate.actions';
import { CertificateData } from '../../models/certificate';

export interface CertificateState extends EntityState<CertificateData> {
  selectedCertificateId: number | null;
}
export const certificateAdapter = createEntityAdapter<CertificateData>();



export const initialCertificateState: CertificateState = certificateAdapter.getInitialState({
  selectedCertificateId: null,
});

export const certificateReducer = createReducer(
  initialCertificateState,
  on(CertificateActions.certificatesLoaded, (state, { certificates }) =>
    certificateAdapter.setAll(certificates, state)
  ),
  on(CertificateActions.certificateAdded.addCertificate, (state, { certificate }) => { console.log(certificate); return certificateAdapter.addOne(certificate, state) }
  ),
  on(CertificateActions.certificateAdded.selectCertificate, (state, { certificateId }) => ({
    ...state,
    selectedCertificateId: certificateId,
  }))
);
