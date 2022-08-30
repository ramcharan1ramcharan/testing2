import list from 'src/modules/licence/list/licenceListReducers';
import form from 'src/modules/licence/form/licenceFormReducers';
import view from 'src/modules/licence/view/licenceViewReducers';
import destroy from 'src/modules/licence/destroy/licenceDestroyReducers';
import importerReducer from 'src/modules/licence/importer/licenceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
