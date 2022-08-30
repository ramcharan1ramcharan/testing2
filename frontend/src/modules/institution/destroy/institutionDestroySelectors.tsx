import { createSelector } from 'reselect';

const selectRaw = (state) => state.institution.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const institutionDestroySelectors = {
  selectLoading,
};

export default institutionDestroySelectors;
