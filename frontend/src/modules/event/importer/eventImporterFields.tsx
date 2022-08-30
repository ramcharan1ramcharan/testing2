import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'institution',
    label: i18n('entities.event.fields.institution'),
    schema: schemas.relationToOne(
      i18n('entities.event.fields.institution'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.event.fields.type'),
    schema: schemas.relationToOne(
      i18n('entities.event.fields.type'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'category',
    label: i18n('entities.event.fields.category'),
    schema: schemas.string(
      i18n('entities.event.fields.category'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'startDate',
    label: i18n('entities.event.fields.startDate'),
    schema: schemas.datetime(
      i18n('entities.event.fields.startDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'live',
    label: i18n('entities.event.fields.live'),
    schema: schemas.boolean(
      i18n('entities.event.fields.live'),
      {},
    ),
  },
  {
    name: 'time',
    label: i18n('entities.event.fields.time'),
    schema: schemas.string(
      i18n('entities.event.fields.time'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'place',
    label: i18n('entities.event.fields.place'),
    schema: schemas.relationToOne(
      i18n('entities.event.fields.place'),
      {
        "required": true
      },
    ),
  },
];