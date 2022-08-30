import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const EventTypeView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.nombre) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.eventType.fields.nombre')}
        >
          {record.nombre}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default EventTypeView;
