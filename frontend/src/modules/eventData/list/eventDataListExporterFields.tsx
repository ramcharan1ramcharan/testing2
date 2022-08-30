import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.eventData.fields.id'),
  },
  {
    name: 'eventId',
    label: i18n('entities.eventData.fields.eventId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'delay',
    label: i18n('entities.eventData.fields.delay'),
  },
  {
    name: 'extraTimeDuration',
    label: i18n('entities.eventData.fields.extraTimeDuration'),
  },
  {
    name: 'localTeamName',
    label: i18n('entities.eventData.fields.localTeamName'),
  },
  {
    name: 'localTeamShortname',
    label: i18n('entities.eventData.fields.localTeamShortname'),
  },
  {
    name: 'localTeamColor',
    label: i18n('entities.eventData.fields.localTeamColor'),
  },
  {
    name: 'localTeamLogo',
    label: i18n('entities.eventData.fields.localTeamLogo'),
  },
  {
    name: 'visitTeamName',
    label: i18n('entities.eventData.fields.visitTeamName'),
  },
  {
    name: 'visitTeamShortname',
    label: i18n('entities.eventData.fields.visitTeamShortname'),
  },
  {
    name: 'visitTeamColor',
    label: i18n('entities.eventData.fields.visitTeamColor'),
  },
  {
    name: 'visitTeamLogo',
    label: i18n('entities.eventData.fields.visitTeamLogo'),
  },
  {
    name: 'partDuration',
    label: i18n('entities.eventData.fields.partDuration'),
  },
  {
    name: 'info',
    label: i18n('entities.eventData.fields.info'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.eventData.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.eventData.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
