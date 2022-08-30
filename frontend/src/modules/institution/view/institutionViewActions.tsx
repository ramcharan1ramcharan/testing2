import InstitutionService from 'src/modules/institution/institutionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'INSTITUTION_VIEW';

const institutionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: institutionViewActions.FIND_STARTED,
      });

      const record = await InstitutionService.find(id);

      dispatch({
        type: institutionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: institutionViewActions.FIND_ERROR,
      });

      getHistory().push('/institution');
    }
  },
};

export default institutionViewActions;
