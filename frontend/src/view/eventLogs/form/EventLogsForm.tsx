import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import eventLogsEnumerators from 'src/modules/eventLogs/eventLogsEnumerators';
import EventAutocompleteFormItem from 'src/view/event/autocomplete/EventAutocompleteFormItem';

const schema = yup.object().shape({
  eventId: yupFormSchemas.relationToOne(
    i18n('entities.eventLogs.fields.eventId'),
    {},
  ),
  time: yupFormSchemas.string(
    i18n('entities.eventLogs.fields.time'),
    {
      "required": true
    },
  ),
  team: yupFormSchemas.enumerator(
    i18n('entities.eventLogs.fields.team'),
    {
      "required": true,
      "options": eventLogsEnumerators.team
    },
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.eventLogs.fields.type'),
    {
      "required": true,
      "options": eventLogsEnumerators.type
    },
  ),
});

const EventLogsForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      eventId: record.eventId,
      time: record.time,
      team: record.team,
      type: record.type,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const onSubmit = (values) => {
    props.onSubmit(props?.record?.id, values);
  };

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <EventAutocompleteFormItem  
            name="eventId"
            label={i18n('entities.eventLogs.fields.eventId')}
            placeholder={i18n('entities.eventLogs.placeholders.eventId')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="time"
            label={i18n('entities.eventLogs.fields.time')}
            placeholder={i18n('entities.eventLogs.placeholders.time')}  
            required={true}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="team"
            label={i18n('entities.eventLogs.fields.team')}
            placeholder={i18n('entities.eventLogs.placeholders.team')}
            options={eventLogsEnumerators.team.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.eventLogs.enumerators.team.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="type"
            label={i18n('entities.eventLogs.fields.type')}
            placeholder={i18n('entities.eventLogs.placeholders.type')}
            options={eventLogsEnumerators.type.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.eventLogs.enumerators.type.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />

          <Form.Item
            className="form-buttons"
            {...tailFormItemLayout}
          >
            <Button
              loading={saveLoading}
              type="primary"
              onClick={form.handleSubmit(onSubmit)}
              icon={<SaveOutlined />}
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              icon={<UndoOutlined />}
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel && (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                icon={<CloseOutlined />}
              >
                {i18n('common.cancel')}
              </Button>
            )}
          </Form.Item>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default EventLogsForm;
