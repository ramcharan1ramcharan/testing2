import { createSelector } from 'reselect';

const selectRaw = (state) => state.eventLogs.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const eventLogsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default eventLogsViewSelectors;
