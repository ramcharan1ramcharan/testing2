import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/eventLogs/importer/eventLogsImporterSelectors';
import EventLogsService from 'src/modules/eventLogs/eventLogsService';
import fields from 'src/modules/eventLogs/importer/eventLogsImporterFields';
import { i18n } from 'src/i18n';

const eventLogsImporterActions = importerActions(
  'EVENTLOGS_IMPORTER',
  selectors,
  EventLogsService.import,
  fields,
  i18n('entities.eventLogs.importer.fileName'),
);

export default eventLogsImporterActions;