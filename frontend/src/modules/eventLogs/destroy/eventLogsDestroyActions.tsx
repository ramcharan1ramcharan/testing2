import listActions from 'src/modules/eventLogs/list/eventLogsListActions';
import EventLogsService from 'src/modules/eventLogs/eventLogsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EVENTLOGS_DESTROY';

const eventLogsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: eventLogsDestroyActions.DESTROY_STARTED,
      });

      await EventLogsService.destroyAll([id]);

      dispatch({
        type: eventLogsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.eventLogs.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/event-logs');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: eventLogsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: eventLogsDestroyActions.DESTROY_ALL_STARTED,
      });

      await EventLogsService.destroyAll(ids);

      dispatch({
        type: eventLogsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.eventLogs.destroyAll.success'),
      );

      getHistory().push('/event-logs');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: eventLogsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default eventLogsDestroyActions;
