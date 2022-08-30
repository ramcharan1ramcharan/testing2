import listActions from 'src/modules/eventData/list/eventDataListActions';
import EventDataService from 'src/modules/eventData/eventDataService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EVENTDATA_DESTROY';

const eventDataDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: eventDataDestroyActions.DESTROY_STARTED,
      });

      await EventDataService.destroyAll([id]);

      dispatch({
        type: eventDataDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.eventData.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/event-data');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: eventDataDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: eventDataDestroyActions.DESTROY_ALL_STARTED,
      });

      await EventDataService.destroyAll(ids);

      dispatch({
        type: eventDataDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.eventData.destroyAll.success'),
      );

      getHistory().push('/event-data');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: eventDataDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default eventDataDestroyActions;
