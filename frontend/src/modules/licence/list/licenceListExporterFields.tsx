import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.licence.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.licence.fields.name'),
  },
  {
    name: 'active',
    label: i18n('entities.licence.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'institution',
    label: i18n('entities.licence.fields.institution'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.licence.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.licence.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
