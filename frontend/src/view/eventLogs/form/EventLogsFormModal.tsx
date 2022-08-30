import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import EventLogsForm from 'src/view/eventLogs/form/EventLogsForm';
import EventLogsService from 'src/modules/eventLogs/eventLogsService';
import Errors from 'src/modules/shared/error/errors';

const EventLogsFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await EventLogsService.create(data);
      const record = await EventLogsService.find(id);
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
      title={i18n('entities.eventLogs.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <EventLogsForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default EventLogsFormModal;
