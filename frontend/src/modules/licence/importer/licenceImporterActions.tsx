import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/licence/importer/licenceImporterSelectors';
import LicenceService from 'src/modules/licence/licenceService';
import fields from 'src/modules/licence/importer/licenceImporterFields';
import { i18n } from 'src/i18n';

const licenceImporterActions = importerActions(
  'LICENCE_IMPORTER',
  selectors,
  LicenceService.import,
  fields,
  i18n('entities.licence.importer.fileName'),
);

export default licenceImporterActions;