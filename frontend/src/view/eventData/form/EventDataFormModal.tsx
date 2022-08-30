import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import EventDataForm from 'src/view/eventData/form/EventDataForm';
import EventDataService from 'src/modules/eventData/eventDataService';
import Errors from 'src/modules/shared/error/errors';

const EventDataFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await EventDataService.create(data);
      const record = await EventDataService.find(id);
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
      title={i18n('entities.eventData.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <EventDataForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default EventDataFormModal;
