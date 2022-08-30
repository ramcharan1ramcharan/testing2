import list from 'src/modules/institution/list/institutionListReducers';
import form from 'src/modules/institution/form/institutionFormReducers';
import view from 'src/modules/institution/view/institutionViewReducers';
import destroy from 'src/modules/institution/destroy/institutionDestroyReducers';
import importerReducer from 'src/modules/institution/importer/institutionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
