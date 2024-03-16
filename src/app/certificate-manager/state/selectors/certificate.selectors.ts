import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CertificateState, certificateAdapter } from '../redusers/certificate.redusers';
import { KEY_FOR_CERTIFICATES } from '../../constans/key';

const getCertificateState = createFeatureSelector<CertificateState>(KEY_FOR_CERTIFICATES);

const {
  selectAll
} = certificateAdapter.getSelectors();

export const selectAllCertificates = createSelector(
  getCertificateState,
  selectAll
);


