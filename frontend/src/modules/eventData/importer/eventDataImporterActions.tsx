import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/eventData/importer/eventDataImporterSelectors';
import EventDataService from 'src/modules/eventData/eventDataService';
import fields from 'src/modules/eventData/importer/eventDataImporterFields';
import { i18n } from 'src/i18n';

const eventDataImporterActions = importerActions(
  'EVENTDATA_IMPORTER',
  selectors,
  EventDataService.import,
  fields,
  i18n('entities.eventData.importer.fileName'),
);

export default eventDataImporterActions;