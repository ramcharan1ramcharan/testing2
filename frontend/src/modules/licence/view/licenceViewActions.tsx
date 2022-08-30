import LicenceService from 'src/modules/licence/licenceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'LICENCE_VIEW';

const licenceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: licenceViewActions.FIND_STARTED,
      });

      const record = await LicenceService.find(id);

      dispatch({
        type: licenceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: licenceViewActions.FIND_ERROR,
      });

      getHistory().push('/licence');
    }
  },
};

export default licenceViewActions;
