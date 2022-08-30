import list from 'src/modules/eventData/list/eventDataListReducers';
import form from 'src/modules/eventData/form/eventDataFormReducers';
import view from 'src/modules/eventData/view/eventDataViewReducers';
import destroy from 'src/modules/eventData/destroy/eventDataDestroyReducers';
import importerReducer from 'src/modules/eventData/importer/eventDataImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
