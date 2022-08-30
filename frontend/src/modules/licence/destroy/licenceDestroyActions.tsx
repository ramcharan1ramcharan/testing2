import listActions from 'src/modules/licence/list/licenceListActions';
import LicenceService from 'src/modules/licence/licenceService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'LICENCE_DESTROY';

const licenceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: licenceDestroyActions.DESTROY_STARTED,
      });

      await LicenceService.destroyAll([id]);

      dispatch({
        type: licenceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.licence.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/licence');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: licenceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: licenceDestroyActions.DESTROY_ALL_STARTED,
      });

      await LicenceService.destroyAll(ids);

      dispatch({
        type: licenceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.licence.destroyAll.success'),
      );

      getHistory().push('/licence');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: licenceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default licenceDestroyActions;
