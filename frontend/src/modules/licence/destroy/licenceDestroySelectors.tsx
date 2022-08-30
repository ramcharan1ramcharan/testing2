import { createSelector } from 'reselect';

const selectRaw = (state) => state.licence.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const licenceDestroySelectors = {
  selectLoading,
};

export default licenceDestroySelectors;
