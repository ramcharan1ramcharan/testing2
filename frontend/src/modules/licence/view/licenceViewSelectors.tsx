import { createSelector } from 'reselect';

const selectRaw = (state) => state.licence.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const licenceViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default licenceViewSelectors;
