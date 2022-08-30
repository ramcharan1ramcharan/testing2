import { createSelector } from 'reselect';

const selectRaw = (state) => state.eventType.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const eventTypeDestroySelectors = {
  selectLoading,
};

export default eventTypeDestroySelectors;
