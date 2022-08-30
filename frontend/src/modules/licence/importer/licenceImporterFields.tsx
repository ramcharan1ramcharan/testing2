import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.licence.fields.name'),
    schema: schemas.string(
      i18n('entities.licence.fields.name'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'active',
    label: i18n('entities.licence.fields.active'),
    schema: schemas.boolean(
      i18n('entities.licence.fields.active'),
      {},
    ),
  },
  {
    name: 'institution',
    label: i18n('entities.licence.fields.institution'),
    schema: schemas.relationToOne(
      i18n('entities.licence.fields.institution'),
      {
        "required": true
      },
    ),
  },
];