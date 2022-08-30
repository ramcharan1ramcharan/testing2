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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import EventAutocompleteFormItem from 'src/view/event/autocomplete/EventAutocompleteFormItem';

const schema = yup.object().shape({
  eventId: yupFormSchemas.relationToOne(
    i18n('entities.eventData.fields.eventId'),
    {
      "required": true
    },
  ),
  delay: yupFormSchemas.integer(
    i18n('entities.eventData.fields.delay'),
    {},
  ),
  extraTimeDuration: yupFormSchemas.integer(
    i18n('entities.eventData.fields.extraTimeDuration'),
    {},
  ),
  localTeamName: yupFormSchemas.string(
    i18n('entities.eventData.fields.localTeamName'),
    {
      "required": true
    },
  ),
  localTeamShortname: yupFormSchemas.string(
    i18n('entities.eventData.fields.localTeamShortname'),
    {},
  ),
  localTeamColor: yupFormSchemas.string(
    i18n('entities.eventData.fields.localTeamColor'),
    {},
  ),
  localTeamLogo: yupFormSchemas.string(
    i18n('entities.eventData.fields.localTeamLogo'),
    {},
  ),
  visitTeamName: yupFormSchemas.string(
    i18n('entities.eventData.fields.visitTeamName'),
    {},
  ),
  visitTeamShortname: yupFormSchemas.string(
    i18n('entities.eventData.fields.visitTeamShortname'),
    {},
  ),
  visitTeamColor: yupFormSchemas.string(
    i18n('entities.eventData.fields.visitTeamColor'),
    {},
  ),
  visitTeamLogo: yupFormSchemas.string(
    i18n('entities.eventData.fields.visitTeamLogo'),
    {},
  ),
  partDuration: yupFormSchemas.integer(
    i18n('entities.eventData.fields.partDuration'),
    {
      "required": true
    },
  ),
  info: yupFormSchemas.string(
    i18n('entities.eventData.fields.info'),
    {},
  ),
});

const EventDataForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      eventId: record.eventId,
      delay: record.delay,
      extraTimeDuration: record.extraTimeDuration,
      localTeamName: record.localTeamName,
      localTeamShortname: record.localTeamShortname,
      localTeamColor: record.localTeamColor,
      localTeamLogo: record.localTeamLogo,
      visitTeamName: record.visitTeamName,
      visitTeamShortname: record.visitTeamShortname,
      visitTeamColor: record.visitTeamColor,
      visitTeamLogo: record.visitTeamLogo,
      partDuration: record.partDuration,
      info: record.info,
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
            label={i18n('entities.eventData.fields.eventId')}
            required={true}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputNumberFormItem
            name="delay"
            label={i18n('entities.eventData.fields.delay')}
            placeholder={i18n('entities.eventData.placeholders.delay')}  
            required={false}
            layout={formItemLayout}
          />
          <InputNumberFormItem
            name="extraTimeDuration"
            label={i18n('entities.eventData.fields.extraTimeDuration')}
            placeholder={i18n('entities.eventData.placeholders.extraTimeDuration')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="localTeamName"
            label={i18n('entities.eventData.fields.localTeamName')}  
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="localTeamShortname"
            label={i18n('entities.eventData.fields.localTeamShortname')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="localTeamColor"
            label={i18n('entities.eventData.fields.localTeamColor')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="localTeamLogo"
            label={i18n('entities.eventData.fields.localTeamLogo')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="visitTeamName"
            label={i18n('entities.eventData.fields.visitTeamName')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="visitTeamShortname"
            label={i18n('entities.eventData.fields.visitTeamShortname')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="visitTeamColor"
            label={i18n('entities.eventData.fields.visitTeamColor')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="visitTeamLogo"
            label={i18n('entities.eventData.fields.visitTeamLogo')}  
            required={false}
            layout={formItemLayout}
          />
          <InputNumberFormItem
            name="partDuration"
            label={i18n('entities.eventData.fields.partDuration')}  
            required={true}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="info"
            label={i18n('entities.eventData.fields.info')}  
            required={false}
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

export default EventDataForm;
