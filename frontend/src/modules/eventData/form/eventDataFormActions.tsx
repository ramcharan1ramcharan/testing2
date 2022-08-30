import EventDataService from 'src/modules/eventData/eventDataService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'EVENTDATA_FORM';

const eventDataFormActions = {
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
        type: eventDataFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await EventDataService.find(id);
      }

      dispatch({
        type: eventDataFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventDataFormActions.INIT_ERROR,
      });

      getHistory().push('/event-data');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: eventDataFormActions.CREATE_STARTED,
      });

      await EventDataService.create(values);

      dispatch({
        type: eventDataFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.eventData.create.success'),
      );

      getHistory().push('/event-data');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventDataFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: eventDataFormActions.UPDATE_STARTED,
      });

      await EventDataService.update(id, values);

      dispatch({
        type: eventDataFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.eventData.update.success'),
      );

      getHistory().push('/event-data');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventDataFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default eventDataFormActions;
