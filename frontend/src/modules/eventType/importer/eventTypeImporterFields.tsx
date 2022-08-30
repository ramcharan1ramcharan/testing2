import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nombre',
    label: i18n('entities.eventType.fields.nombre'),
    schema: schemas.string(
      i18n('entities.eventType.fields.nombre'),
      {
        "required": true
      },
    ),
  },
];