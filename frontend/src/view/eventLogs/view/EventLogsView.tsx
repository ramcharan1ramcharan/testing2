import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import EventViewItem from 'src/view/event/view/EventViewItem';

const EventLogsView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.eventId) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.eventLogs.fields.eventId')}
          >
            <EventViewItem value={record.eventId} />
          </Form.Item>
        )}

      {Boolean(record.time) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventLogs.fields.time')}
        >
          {record.time}
        </Form.Item>
      )}

      {Boolean(record.team) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventLogs.fields.team')}
        >
          {i18n(
            `entities.eventLogs.enumerators.team.${record.team}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.type) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventLogs.fields.type')}
        >
          {i18n(
            `entities.eventLogs.enumerators.type.${record.type}`,
          )}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default EventLogsView;
