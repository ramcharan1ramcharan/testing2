import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/eventLogs/list/eventLogsListActions';
import selectors from 'src/modules/eventLogs/list/eventLogsListSelectors';
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
import eventLogsEnumerators from 'src/modules/eventLogs/eventLogsEnumerators';
import EventAutocompleteFormItem from 'src/view/event/autocomplete/EventAutocompleteFormItem';

const schema = yup.object().shape({
  eventId: yupFilterSchemas.relationToOne(
    i18n('entities.eventLogs.fields.eventId'),
  ),
  time: yupFilterSchemas.string(
    i18n('entities.eventLogs.fields.time'),
  ),
  team: yupFilterSchemas.enumerator(
    i18n('entities.eventLogs.fields.team'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.eventLogs.fields.type'),
  ),
});

const emptyValues = {
  eventId: null,
  time: null,
  team: null,
  type: null,
}

const previewRenders = {
  eventId: {
      label: i18n('entities.eventLogs.fields.eventId'),
      render: filterRenders.relationToOne(),
    },
  time: {
    label: i18n('entities.eventLogs.fields.time'),
    render: filterRenders.generic(),
  },
  team: {
    label: i18n('entities.eventLogs.fields.team'),
    render: filterRenders.enumerator('entities.eventLogs.enumerators.team',),
  },
  type: {
    label: i18n('entities.eventLogs.fields.type'),
    render: filterRenders.enumerator('entities.eventLogs.enumerators.type',),
  },
}

const EventLogsListFilter = (props) => {
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
                    label={i18n('entities.eventLogs.fields.eventId')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="time"
                    label={i18n('entities.eventLogs.fields.time')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="team"
                    label={i18n('entities.eventLogs.fields.team')}
                    options={eventLogsEnumerators.team.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.eventLogs.enumerators.team.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="type"
                    label={i18n('entities.eventLogs.fields.type')}
                    options={eventLogsEnumerators.type.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.eventLogs.enumerators.type.${value}`,
                        ),
                      }),
                    )}
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

export default EventLogsListFilter;