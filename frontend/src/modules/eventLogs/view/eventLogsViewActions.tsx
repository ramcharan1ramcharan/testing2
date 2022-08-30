import EventLogsService from 'src/modules/eventLogs/eventLogsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EVENTLOGS_VIEW';

const eventLogsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: eventLogsViewActions.FIND_STARTED,
      });

      const record = await EventLogsService.find(id);

      dispatch({
        type: eventLogsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventLogsViewActions.FIND_ERROR,
      });

      getHistory().push('/event-logs');
    }
  },
};

export default eventLogsViewActions;
