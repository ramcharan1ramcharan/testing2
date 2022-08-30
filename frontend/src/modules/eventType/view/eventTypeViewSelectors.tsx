import { createSelector } from 'reselect';

const selectRaw = (state) => state.eventType.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const eventTypeViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default eventTypeViewSelectors;
