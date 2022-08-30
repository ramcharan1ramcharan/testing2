import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import eventLogsEnumerators from 'src/modules/eventLogs/eventLogsEnumerators';

export default [
  {
    name: 'eventId',
    label: i18n('entities.eventLogs.fields.eventId'),
    schema: schemas.relationToOne(
      i18n('entities.eventLogs.fields.eventId'),
      {},
    ),
  },
  {
    name: 'time',
    label: i18n('entities.eventLogs.fields.time'),
    schema: schemas.string(
      i18n('entities.eventLogs.fields.time'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'team',
    label: i18n('entities.eventLogs.fields.team'),
    schema: schemas.enumerator(
      i18n('entities.eventLogs.fields.team'),
      {
        "required": true,
        "options": eventLogsEnumerators.team
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.eventLogs.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.eventLogs.fields.type'),
      {
        "required": true,
        "options": eventLogsEnumerators.type
      },
    ),
  },
];