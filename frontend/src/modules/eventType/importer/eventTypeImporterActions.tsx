import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/eventType/importer/eventTypeImporterSelectors';
import EventTypeService from 'src/modules/eventType/eventTypeService';
import fields from 'src/modules/eventType/importer/eventTypeImporterFields';
import { i18n } from 'src/i18n';

const eventTypeImporterActions = importerActions(
  'EVENTTYPE_IMPORTER',
  selectors,
  EventTypeService.import,
  fields,
  i18n('entities.eventType.importer.fileName'),
);

export default eventTypeImporterActions;