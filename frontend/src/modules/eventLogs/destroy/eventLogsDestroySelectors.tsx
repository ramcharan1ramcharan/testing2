import { createSelector } from 'reselect';

const selectRaw = (state) => state.eventLogs.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const eventLogsDestroySelectors = {
  selectLoading,
};

export default eventLogsDestroySelectors;
