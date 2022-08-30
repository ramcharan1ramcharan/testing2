import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import EventTypeForm from 'src/view/eventType/form/EventTypeForm';
import EventTypeService from 'src/modules/eventType/eventTypeService';
import Errors from 'src/modules/shared/error/errors';

const EventTypeFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await EventTypeService.create(data);
      const record = await EventTypeService.find(id);
      props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      setSaveLoading(false);
    }
  };

  if (!props.visible) {
    return null;
  }

  return (
    <Modal
      style={{ top: 24 }}
      title={i18n('entities.eventType.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <EventTypeForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default EventTypeFormModal;
