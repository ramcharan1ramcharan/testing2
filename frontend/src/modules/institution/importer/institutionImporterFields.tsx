import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.institution.fields.name'),
    schema: schemas.string(
      i18n('entities.institution.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'active',
    label: i18n('entities.institution.fields.active'),
    schema: schemas.boolean(
      i18n('entities.institution.fields.active'),
      {},
    ),
  },
];