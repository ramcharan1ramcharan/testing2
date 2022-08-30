import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.event.fields.id'),
  },
  {
    name: 'institution',
    label: i18n('entities.event.fields.institution'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'type',
    label: i18n('entities.event.fields.type'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'category',
    label: i18n('entities.event.fields.category'),
  },
  {
    name: 'startDate',
    label: i18n('entities.event.fields.startDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'live',
    label: i18n('entities.event.fields.live'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'time',
    label: i18n('entities.event.fields.time'),
  },
  {
    name: 'place',
    label: i18n('entities.event.fields.place'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.event.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.event.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
