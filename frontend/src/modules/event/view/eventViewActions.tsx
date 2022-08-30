import EventService from 'src/modules/event/eventService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EVENT_VIEW';

const eventViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: eventViewActions.FIND_STARTED,
      });

      const record = await EventService.find(id);

      dispatch({
        type: eventViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventViewActions.FIND_ERROR,
      });

      getHistory().push('/event');
    }
  },
};

export default eventViewActions;
