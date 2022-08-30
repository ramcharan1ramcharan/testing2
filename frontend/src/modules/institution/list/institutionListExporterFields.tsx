import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.institution.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.institution.fields.name'),
  },
  {
    name: 'active',
    label: i18n('entities.institution.fields.active'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.institution.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.institution.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
