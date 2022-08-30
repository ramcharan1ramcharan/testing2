import EventLogsService from 'src/modules/eventLogs/eventLogsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'EVENTLOGS_FORM';

const eventLogsFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: eventLogsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await EventLogsService.find(id);
      }

      dispatch({
        type: eventLogsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventLogsFormActions.INIT_ERROR,
      });

      getHistory().push('/event-logs');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: eventLogsFormActions.CREATE_STARTED,
      });

      await EventLogsService.create(values);

      dispatch({
        type: eventLogsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.eventLogs.create.success'),
      );

      getHistory().push('/event-logs');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventLogsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: eventLogsFormActions.UPDATE_STARTED,
      });

      await EventLogsService.update(id, values);

      dispatch({
        type: eventLogsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.eventLogs.update.success'),
      );

      getHistory().push('/event-logs');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventLogsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default eventLogsFormActions;
