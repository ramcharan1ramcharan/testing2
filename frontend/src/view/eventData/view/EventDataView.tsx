import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import EventViewItem from 'src/view/event/view/EventViewItem';

const EventDataView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.eventId) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.eventData.fields.eventId')}
          >
            <EventViewItem value={record.eventId} />
          </Form.Item>
        )}

      {Boolean(record.delay) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.delay')}
        >
          {record.delay}
        </Form.Item>
      )}

      {Boolean(record.extraTimeDuration) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.extraTimeDuration')}
        >
          {record.extraTimeDuration}
        </Form.Item>
      )}

      {Boolean(record.localTeamName) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.localTeamName')}
        >
          {record.localTeamName}
        </Form.Item>
      )}

      {Boolean(record.localTeamShortname) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.localTeamShortname')}
        >
          {record.localTeamShortname}
        </Form.Item>
      )}

      {Boolean(record.localTeamColor) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.localTeamColor')}
        >
          {record.localTeamColor}
        </Form.Item>
      )}

      {Boolean(record.localTeamLogo) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.localTeamLogo')}
        >
          {record.localTeamLogo}
        </Form.Item>
      )}

      {Boolean(record.visitTeamName) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.visitTeamName')}
        >
          {record.visitTeamName}
        </Form.Item>
      )}

      {Boolean(record.visitTeamShortname) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.visitTeamShortname')}
        >
          {record.visitTeamShortname}
        </Form.Item>
      )}

      {Boolean(record.visitTeamColor) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.visitTeamColor')}
        >
          {record.visitTeamColor}
        </Form.Item>
      )}

      {Boolean(record.visitTeamLogo) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.visitTeamLogo')}
        >
          {record.visitTeamLogo}
        </Form.Item>
      )}

      {Boolean(record.partDuration) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.partDuration')}
        >
          {record.partDuration}
        </Form.Item>
      )}

      {Boolean(record.info) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventData.fields.info')}
        >
          {record.info}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default EventDataView;
