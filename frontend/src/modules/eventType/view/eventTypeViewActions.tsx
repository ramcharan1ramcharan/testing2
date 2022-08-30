import EventTypeService from 'src/modules/eventType/eventTypeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EVENTTYPE_VIEW';

const eventTypeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: eventTypeViewActions.FIND_STARTED,
      });

      const record = await EventTypeService.find(id);

      dispatch({
        type: eventTypeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventTypeViewActions.FIND_ERROR,
      });

      getHistory().push('/event-type');
    }
  },
};

export default eventTypeViewActions;
