import list from 'src/modules/event/list/eventListReducers';
import form from 'src/modules/event/form/eventFormReducers';
import view from 'src/modules/event/view/eventViewReducers';
import destroy from 'src/modules/event/destroy/eventDestroyReducers';
import importerReducer from 'src/modules/event/importer/eventImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
