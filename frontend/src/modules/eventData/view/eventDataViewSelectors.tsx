import { createSelector } from 'reselect';

const selectRaw = (state) => state.eventData.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const eventDataViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default eventDataViewSelectors;
