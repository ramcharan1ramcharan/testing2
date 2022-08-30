import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.eventLogs.fields.id'),
  },
  {
    name: 'eventId',
    label: i18n('entities.eventLogs.fields.eventId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'time',
    label: i18n('entities.eventLogs.fields.time'),
  },
  {
    name: 'team',
    label: i18n('entities.eventLogs.fields.team'),
  },
  {
    name: 'type',
    label: i18n('entities.eventLogs.fields.type'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.eventLogs.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.eventLogs.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
