import list from 'src/modules/eventLogs/list/eventLogsListReducers';
import form from 'src/modules/eventLogs/form/eventLogsFormReducers';
import view from 'src/modules/eventLogs/view/eventLogsViewReducers';
import destroy from 'src/modules/eventLogs/destroy/eventLogsDestroyReducers';
import importerReducer from 'src/modules/eventLogs/importer/eventLogsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
