import { createSelector } from 'reselect';

const selectRaw = (state) => state.institution.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const institutionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default institutionViewSelectors;
