import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'eventId',
    label: i18n('entities.eventData.fields.eventId'),
    schema: schemas.relationToOne(
      i18n('entities.eventData.fields.eventId'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'delay',
    label: i18n('entities.eventData.fields.delay'),
    schema: schemas.integer(
      i18n('entities.eventData.fields.delay'),
      {},
    ),
  },
  {
    name: 'extraTimeDuration',
    label: i18n('entities.eventData.fields.extraTimeDuration'),
    schema: schemas.integer(
      i18n('entities.eventData.fields.extraTimeDuration'),
      {},
    ),
  },
  {
    name: 'localTeamName',
    label: i18n('entities.eventData.fields.localTeamName'),
    schema: schemas.string(
      i18n('entities.eventData.fields.localTeamName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'localTeamShortname',
    label: i18n('entities.eventData.fields.localTeamShortname'),
    schema: schemas.string(
      i18n('entities.eventData.fields.localTeamShortname'),
      {},
    ),
  },
  {
    name: 'localTeamColor',
    label: i18n('entities.eventData.fields.localTeamColor'),
    schema: schemas.string(
      i18n('entities.eventData.fields.localTeamColor'),
      {},
    ),
  },
  {
    name: 'localTeamLogo',
    label: i18n('entities.eventData.fields.localTeamLogo'),
    schema: schemas.string(
      i18n('entities.eventData.fields.localTeamLogo'),
      {},
    ),
  },
  {
    name: 'visitTeamName',
    label: i18n('entities.eventData.fields.visitTeamName'),
    schema: schemas.string(
      i18n('entities.eventData.fields.visitTeamName'),
      {},
    ),
  },
  {
    name: 'visitTeamShortname',
    label: i18n('entities.eventData.fields.visitTeamShortname'),
    schema: schemas.string(
      i18n('entities.eventData.fields.visitTeamShortname'),
      {},
    ),
  },
  {
    name: 'visitTeamColor',
    label: i18n('entities.eventData.fields.visitTeamColor'),
    schema: schemas.string(
      i18n('entities.eventData.fields.visitTeamColor'),
      {},
    ),
  },
  {
    name: 'visitTeamLogo',
    label: i18n('entities.eventData.fields.visitTeamLogo'),
    schema: schemas.string(
      i18n('entities.eventData.fields.visitTeamLogo'),
      {},
    ),
  },
  {
    name: 'partDuration',
    label: i18n('entities.eventData.fields.partDuration'),
    schema: schemas.integer(
      i18n('entities.eventData.fields.partDuration'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'info',
    label: i18n('entities.eventData.fields.info'),
    schema: schemas.string(
      i18n('entities.eventData.fields.info'),
      {},
    ),
  },
];