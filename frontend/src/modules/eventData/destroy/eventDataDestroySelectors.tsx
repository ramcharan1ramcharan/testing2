import { createSelector } from 'reselect';

const selectRaw = (state) => state.eventData.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const eventDataDestroySelectors = {
  selectLoading,
};

export default eventDataDestroySelectors;
