import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/institution/importer/institutionImporterSelectors';
import InstitutionService from 'src/modules/institution/institutionService';
import fields from 'src/modules/institution/importer/institutionImporterFields';
import { i18n } from 'src/i18n';

const institutionImporterActions = importerActions(
  'INSTITUTION_IMPORTER',
  selectors,
  InstitutionService.import,
  fields,
  i18n('entities.institution.importer.fileName'),
);

export default institutionImporterActions;