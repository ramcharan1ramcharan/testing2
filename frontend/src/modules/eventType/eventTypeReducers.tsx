import list from 'src/modules/eventType/list/eventTypeListReducers';
import form from 'src/modules/eventType/form/eventTypeFormReducers';
import view from 'src/modules/eventType/view/eventTypeViewReducers';
import destroy from 'src/modules/eventType/destroy/eventTypeDestroyReducers';
import importerReducer from 'src/modules/eventType/importer/eventTypeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
