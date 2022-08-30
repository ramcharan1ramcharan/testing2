import EventTypeService from 'src/modules/eventType/eventTypeService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'EVENTTYPE_FORM';

const eventTypeFormActions = {
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
        type: eventTypeFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await EventTypeService.find(id);
      }

      dispatch({
        type: eventTypeFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventTypeFormActions.INIT_ERROR,
      });

      getHistory().push('/event-type');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: eventTypeFormActions.CREATE_STARTED,
      });

      await EventTypeService.create(values);

      dispatch({
        type: eventTypeFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.eventType.create.success'),
      );

      getHistory().push('/event-type');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventTypeFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: eventTypeFormActions.UPDATE_STARTED,
      });

      await EventTypeService.update(id, values);

      dispatch({
        type: eventTypeFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.eventType.update.success'),
      );

      getHistory().push('/event-type');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventTypeFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default eventTypeFormActions;
