import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import InstitutionViewItem from 'src/view/institution/view/InstitutionViewItem';

const LicenceView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.name) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.licence.fields.name')}
        >
          {record.name}
        </Form.Item>
      )}

      <Form.Item
        {...viewItemLayout}
        label={i18n('entities.licence.fields.active')}
      >
        {record.active
          ? i18n('common.yes')
          : i18n('common.no')}
      </Form.Item>

      {Boolean(record.institution) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.licence.fields.institution')}
          >
            <InstitutionViewItem value={record.institution} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default LicenceView;
