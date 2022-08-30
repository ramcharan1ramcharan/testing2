import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/eventData/list/eventDataListActions';
import selectors from 'src/modules/eventData/list/eventDataListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import EventAutocompleteFormItem from 'src/view/event/autocomplete/EventAutocompleteFormItem';

const schema = yup.object().shape({
  eventId: yupFilterSchemas.relationToOne(
    i18n('entities.eventData.fields.eventId'),
  ),
  delayRange: yupFilterSchemas.integerRange(
    i18n('entities.eventData.fields.delayRange'),
  ),
  extraTimeDurationRange: yupFilterSchemas.integerRange(
    i18n('entities.eventData.fields.extraTimeDurationRange'),
  ),
  localTeamName: yupFilterSchemas.string(
    i18n('entities.eventData.fields.localTeamName'),
  ),
  localTeamShortname: yupFilterSchemas.string(
    i18n('entities.eventData.fields.localTeamShortname'),
  ),
  localTeamColor: yupFilterSchemas.string(
    i18n('entities.eventData.fields.localTeamColor'),
  ),
  localTeamLogo: yupFilterSchemas.string(
    i18n('entities.eventData.fields.localTeamLogo'),
  ),
  visitTeamName: yupFilterSchemas.string(
    i18n('entities.eventData.fields.visitTeamName'),
  ),
  visitTeamShortname: yupFilterSchemas.string(
    i18n('entities.eventData.fields.visitTeamShortname'),
  ),
  visitTeamColor: yupFilterSchemas.string(
    i18n('entities.eventData.fields.visitTeamColor'),
  ),
  visitTeamLogo: yupFilterSchemas.string(
    i18n('entities.eventData.fields.visitTeamLogo'),
  ),
  partDurationRange: yupFilterSchemas.integerRange(
    i18n('entities.eventData.fields.partDurationRange'),
  ),
  info: yupFilterSchemas.string(
    i18n('entities.eventData.fields.info'),
  ),
});

const emptyValues = {
  eventId: null,
  delayRange: [],
  extraTimeDurationRange: [],
  localTeamName: null,
  localTeamShortname: null,
  localTeamColor: null,
  localTeamLogo: null,
  visitTeamName: null,
  visitTeamShortname: null,
  visitTeamColor: null,
  visitTeamLogo: null,
  partDurationRange: [],
  info: null,
}

const previewRenders = {
  eventId: {
      label: i18n('entities.eventData.fields.eventId'),
      render: filterRenders.relationToOne(),
    },
  delayRange: {
    label: i18n('entities.eventData.fields.delayRange'),
    render: filterRenders.range(),
  },
  extraTimeDurationRange: {
    label: i18n('entities.eventData.fields.extraTimeDurationRange'),
    render: filterRenders.range(),
  },
  localTeamName: {
    label: i18n('entities.eventData.fields.localTeamName'),
    render: filterRenders.generic(),
  },
  localTeamShortname: {
    label: i18n('entities.eventData.fields.localTeamShortname'),
    render: filterRenders.generic(),
  },
  localTeamColor: {
    label: i18n('entities.eventData.fields.localTeamColor'),
    render: filterRenders.generic(),
  },
  localTeamLogo: {
    label: i18n('entities.eventData.fields.localTeamLogo'),
    render: filterRenders.generic(),
  },
  visitTeamName: {
    label: i18n('entities.eventData.fields.visitTeamName'),
    render: filterRenders.generic(),
  },
  visitTeamShortname: {
    label: i18n('entities.eventData.fields.visitTeamShortname'),
    render: filterRenders.generic(),
  },
  visitTeamColor: {
    label: i18n('entities.eventData.fields.visitTeamColor'),
    render: filterRenders.generic(),
  },
  visitTeamLogo: {
    label: i18n('entities.eventData.fields.visitTeamLogo'),
    render: filterRenders.generic(),
  },
  partDurationRange: {
    label: i18n('entities.eventData.fields.partDurationRange'),
    render: filterRenders.range(),
  },
  info: {
    label: i18n('entities.eventData.fields.info'),
    render: filterRenders.generic(),
  },
}

const EventDataListFilter = (props) => {
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
                  <EventAutocompleteFormItem  
                    name="eventId"
                    label={i18n('entities.eventData.fields.eventId')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="delayRange"
                    label={i18n('entities.eventData.fields.delayRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="extraTimeDurationRange"
                    label={i18n('entities.eventData.fields.extraTimeDurationRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="localTeamName"
                    label={i18n('entities.eventData.fields.localTeamName')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="localTeamShortname"
                    label={i18n('entities.eventData.fields.localTeamShortname')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="localTeamColor"
                    label={i18n('entities.eventData.fields.localTeamColor')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="localTeamLogo"
                    label={i18n('entities.eventData.fields.localTeamLogo')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="visitTeamName"
                    label={i18n('entities.eventData.fields.visitTeamName')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="visitTeamShortname"
                    label={i18n('entities.eventData.fields.visitTeamShortname')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="visitTeamColor"
                    label={i18n('entities.eventData.fields.visitTeamColor')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="visitTeamLogo"
                    label={i18n('entities.eventData.fields.visitTeamLogo')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="partDurationRange"
                    label={i18n('entities.eventData.fields.partDurationRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="info"
                    label={i18n('entities.eventData.fields.info')}      
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

export default EventDataListFilter;