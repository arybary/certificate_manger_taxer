import { createFeature, createSelector } from '@ngrx/store';
import { KEY_FOR_CERTIFICATES } from '../../constans';
import { certificateAdapter, certificateReducer } from '../redusers/certificate.redusers';

export const cetrificateFeature = createFeature({
  name: KEY_FOR_CERTIFICATES,
  reducer: certificateReducer,
  extraSelectors: ({ selectCertifictesState, selectEntities, selectSelectedCertificateId }) => ({
    ...certificateAdapter.getSelectors(selectCertifictesState),
    selectIsCertificateSelected: createSelector(
      selectSelectedCertificateId,
      (selectedId) => selectedId !== null
    ),
    selectSelectedCertificate: createSelector(
      selectSelectedCertificateId,
      selectEntities,
      (selectedId, entities) => (selectedId ? entities[selectedId] : null)
    ),
  }),
});
