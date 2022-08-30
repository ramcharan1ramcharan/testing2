import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/event/importer/eventImporterSelectors';
import EventService from 'src/modules/event/eventService';
import fields from 'src/modules/event/importer/eventImporterFields';
import { i18n } from 'src/i18n';

const eventImporterActions = importerActions(
  'EVENT_IMPORTER',
  selectors,
  EventService.import,
  fields,
  i18n('entities.event.importer.fileName'),
);

export default eventImporterActions;