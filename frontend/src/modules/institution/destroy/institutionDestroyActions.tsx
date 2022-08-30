import listActions from 'src/modules/institution/list/institutionListActions';
import InstitutionService from 'src/modules/institution/institutionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'INSTITUTION_DESTROY';

const institutionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: institutionDestroyActions.DESTROY_STARTED,
      });

      await InstitutionService.destroyAll([id]);

      dispatch({
        type: institutionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.institution.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/institution');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: institutionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: institutionDestroyActions.DESTROY_ALL_STARTED,
      });

      await InstitutionService.destroyAll(ids);

      dispatch({
        type: institutionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.institution.destroyAll.success'),
      );

      getHistory().push('/institution');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: institutionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default institutionDestroyActions;
