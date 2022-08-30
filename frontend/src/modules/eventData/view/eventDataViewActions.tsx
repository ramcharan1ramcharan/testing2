import EventDataService from 'src/modules/eventData/eventDataService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EVENTDATA_VIEW';

const eventDataViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: eventDataViewActions.FIND_STARTED,
      });

      const record = await EventDataService.find(id);

      dispatch({
        type: eventDataViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: eventDataViewActions.FIND_ERROR,
      });

      getHistory().push('/event-data');
    }
  },
};

export default eventDataViewActions;
