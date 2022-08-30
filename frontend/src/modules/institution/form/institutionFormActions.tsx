import InstitutionService from 'src/modules/institution/institutionService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'INSTITUTION_FORM';

const institutionFormActions = {
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
        type: institutionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await InstitutionService.find(id);
      }

      dispatch({
        type: institutionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: institutionFormActions.INIT_ERROR,
      });

      getHistory().push('/institution');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: institutionFormActions.CREATE_STARTED,
      });

      await InstitutionService.create(values);

      dispatch({
        type: institutionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.institution.create.success'),
      );

      getHistory().push('/institution');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: institutionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: institutionFormActions.UPDATE_STARTED,
      });

      await InstitutionService.update(id, values);

      dispatch({
        type: institutionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.institution.update.success'),
      );

      getHistory().push('/institution');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: institutionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default institutionFormActions;
