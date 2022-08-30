import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.eventType.fields.id'),
  },
  {
    name: 'nombre',
    label: i18n('entities.eventType.fields.nombre'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.eventType.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.eventType.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
