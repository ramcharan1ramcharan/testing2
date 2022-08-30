import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import LicenceForm from 'src/view/licence/form/LicenceForm';
import LicenceService from 'src/modules/licence/licenceService';
import Errors from 'src/modules/shared/error/errors';

const LicenceFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await LicenceService.create(data);
      const record = await LicenceService.find(id);
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
      title={i18n('entities.licence.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <LicenceForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default LicenceFormModal;
