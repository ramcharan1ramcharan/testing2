import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import moment from 'moment';
import InstitutionViewItem from 'src/view/institution/view/InstitutionViewItem';
import EventTypeViewItem from 'src/view/eventType/view/EventTypeViewItem';
import LicenceViewItem from 'src/view/licence/view/LicenceViewItem';

const EventView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.institution) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.event.fields.institution')}
          >
            <InstitutionViewItem value={record.institution} />
          </Form.Item>
        )}

      {Boolean(record.type) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.event.fields.type')}
          >
            <EventTypeViewItem value={record.type} />
          </Form.Item>
        )}

      {Boolean(record.category) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.event.fields.category')}
        >
          {record.category}
        </Form.Item>
      )}

      {Boolean(record.startDate) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n(
            'entities.event.fields.startDate',
          )}
        >
          <>
            {moment(record.startDate).format(
              'YYYY-MM-DD HH:mm',
            )}
          </>
        </Form.Item>
      )}

      <Form.Item
        {...viewItemLayout}
        label={i18n('entities.event.fields.live')}
      >
        {record.live
          ? i18n('common.yes')
          : i18n('common.no')}
      </Form.Item>

      {Boolean(record.time) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.event.fields.time')}
        >
          {record.time}
        </Form.Item>
      )}

      {Boolean(record.place) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.event.fields.place')}
          >
            <LicenceViewItem value={record.place} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default EventView;
