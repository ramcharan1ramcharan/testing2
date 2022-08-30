import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/event/list/eventListActions';
import selectors from 'src/modules/event/list/eventListSelectors';
import FilterWrapper, {
  filterItemLayout,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import { Collapse } from 'antd';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import InstitutionAutocompleteFormItem from 'src/view/institution/autocomplete/InstitutionAutocompleteFormItem';
import EventTypeAutocompleteFormItem from 'src/view/eventType/autocomplete/EventTypeAutocompleteFormItem';
import LicenceAutocompleteFormItem from 'src/view/licence/autocomplete/LicenceAutocompleteFormItem';

const schema = yup.object().shape({
  institution: yupFilterSchemas.relationToOne(
    i18n('entities.event.fields.institution'),
  ),
  type: yupFilterSchemas.relationToOne(
    i18n('entities.event.fields.type'),
  ),
  category: yupFilterSchemas.string(
    i18n('entities.event.fields.category'),
  ),
  startDateRange: yupFilterSchemas.datetimeRange(
    i18n('entities.event.fields.startDateRange'),
  ),
  live: yupFilterSchemas.boolean(
    i18n('entities.event.fields.live'),
  ),
  time: yupFilterSchemas.string(
    i18n('entities.event.fields.time'),
  ),
  place: yupFilterSchemas.relationToOne(
    i18n('entities.event.fields.place'),
  ),
});

const emptyValues = {
  institution: null,
  type: null,
  category: null,
  startDateRange: [],
  live: null,
  time: null,
  place: null,
}

const previewRenders = {
  institution: {
      label: i18n('entities.event.fields.institution'),
      render: filterRenders.relationToOne(),
    },
  type: {
      label: i18n('entities.event.fields.type'),
      render: filterRenders.relationToOne(),
    },
  category: {
    label: i18n('entities.event.fields.category'),
    render: filterRenders.generic(),
  },
  startDateRange: {
    label: i18n('entities.event.fields.startDateRange'),
    render: filterRenders.datetimeRange(),
  },
  live: {
    label: i18n('entities.event.fields.live'),
    render: filterRenders.boolean(),
  },
  time: {
    label: i18n('entities.event.fields.time'),
    render: filterRenders.generic(),
  },
  place: {
      label: i18n('entities.event.fields.place'),
      render: filterRenders.relationToOne(),
    },
}

const EventListFilter = (props) => {
  const dispatch = useDispatch();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const { loading } = props;
  return (
    <FilterWrapper>
      <Collapse
        activeKey={expanded ? 'filter' : undefined}
        expandIconPosition="right"
        ghost
        onChange={(value) => {
          setExpanded(Boolean(value.length));
        }}
      >
        <Collapse.Panel
          header={
            <FilterPreview             
              renders={previewRenders}
              values={rawFilter}
              expanded={expanded}
              onRemove={onRemove}
            />
          }
          key="filter"
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Row gutter={24}>
                <Col xs={24} md={24} lg={12}>
                  <InstitutionAutocompleteFormItem  
                    name="institution"
                    label={i18n('entities.event.fields.institution')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <EventTypeAutocompleteFormItem  
                    name="type"
                    label={i18n('entities.event.fields.type')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="category"
                    label={i18n('entities.event.fields.category')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="startDateRange"
                    label={i18n('entities.event.fields.startDateRange')}    
                    showTime
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="live"
                    label={i18n('entities.event.fields.live')}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="time"
                    label={i18n('entities.event.fields.time')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <LicenceAutocompleteFormItem  
                    name="place"
                    label={i18n('entities.event.fields.place')}        
                    layout={filterItemLayout}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="filter-buttons" span={24}>
                  <Button
                    loading={loading}
                    icon={<SearchOutlined />}
                    type="primary"
                    htmlType="submit"
                  >
                    {i18n('common.search')}
                  </Button>
                  <Button
                    loading={loading}
                    onClick={onReset}
                    icon={<UndoOutlined />}
                  >
                    {i18n('common.reset')}
                  </Button>
                </Col>
              </Row>
            </form>
          </FormProvider>
        </Collapse.Panel>
      </Collapse>
    </FilterWrapper>
  );
};

export default EventListFilter;