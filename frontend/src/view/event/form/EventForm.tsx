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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import InstitutionAutocompleteFormItem from 'src/view/institution/autocomplete/InstitutionAutocompleteFormItem';
import EventTypeAutocompleteFormItem from 'src/view/eventType/autocomplete/EventTypeAutocompleteFormItem';
import LicenceAutocompleteFormItem from 'src/view/licence/autocomplete/LicenceAutocompleteFormItem';

const schema = yup.object().shape({
  institution: yupFormSchemas.relationToOne(
    i18n('entities.event.fields.institution'),
    {
      "required": true
    },
  ),
  type: yupFormSchemas.relationToOne(
    i18n('entities.event.fields.type'),
    {
      "required": true
    },
  ),
  category: yupFormSchemas.string(
    i18n('entities.event.fields.category'),
    {
      "required": true
    },
  ),
  startDate: yupFormSchemas.datetime(
    i18n('entities.event.fields.startDate'),
    {
      "required": true
    },
  ),
  live: yupFormSchemas.boolean(
    i18n('entities.event.fields.live'),
    {},
  ),
  time: yupFormSchemas.string(
    i18n('entities.event.fields.time'),
    {
      "required": true
    },
  ),
  place: yupFormSchemas.relationToOne(
    i18n('entities.event.fields.place'),
    {
      "required": true
    },
  ),
});

const EventForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      institution: record.institution,
      type: record.type,
      category: record.category,
      startDate: record.startDate ? moment(record.startDate) : null,
      live: record.live,
      time: record.time,
      place: record.place,
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
          <InstitutionAutocompleteFormItem  
            name="institution"
            label={i18n('entities.event.fields.institution')}
            required={true}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <EventTypeAutocompleteFormItem  
            name="type"
            label={i18n('entities.event.fields.type')}
            placeholder={i18n('entities.event.placeholders.type')}
            required={true}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="category"
            label={i18n('entities.event.fields.category')}
            placeholder={i18n('entities.event.placeholders.category')}  
            required={true}
            layout={formItemLayout}
          />
          <DatePickerFormItem
            name="startDate"
            label={i18n('entities.event.fields.startDate')}
            placeholder={i18n('entities.event.placeholders.startDate')}
            required={true}
            showTime
            layout={formItemLayout}
          />
          <SwitchFormItem
            name="live"
            label={i18n('entities.event.fields.live')}
            layout={formItemLayout}
          />
          <InputFormItem
            name="time"
            label={i18n('entities.event.fields.time')}
            placeholder={i18n('entities.event.placeholders.time')}  
            required={true}
            layout={formItemLayout}
          />
          <LicenceAutocompleteFormItem  
            name="place"
            label={i18n('entities.event.fields.place')}
            placeholder={i18n('entities.event.placeholders.place')}
            required={true}
            showCreate={!props.modal}
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

export default EventForm;
