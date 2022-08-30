import { createSelector } from 'reselect';

const selectRaw = (state) => state.event.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const eventDestroySelectors = {
  selectLoading,
};

export default eventDestroySelectors;
