import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/event/list/eventListActions';
import destroyActions from 'src/modules/event/destroy/eventDestroyActions';
import selectors from 'src/modules/event/list/eventListSelectors';
import destroySelectors from 'src/modules/event/destroy/eventDestroySelectors';
import eventSelectors from 'src/modules/event/eventSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import moment from 'moment';
import InstitutionListItem from 'src/view/institution/list/InstitutionListItem';
import EventTypeListItem from 'src/view/eventType/list/EventTypeListItem';
import LicenceListItem from 'src/view/licence/list/LicenceListItem';

const EventListTable = (props) => {
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasPermissionToEdit = useSelector(
    eventSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    eventSelectors.selectPermissionToDestroy,
  );

  const handleTableChange = (
    pagination,
    filters,
    sorter,
  ) => {
    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  const doDestroy = (id) => {
    dispatch(destroyActions.doDestroy(id));
  };

  const columns = [
      {
        title: i18n('entities.event.fields.institution'),
        sorter: false,
        dataIndex: 'institution',
        render: (value) => <InstitutionListItem value={value} />,
      },
      {
        title: i18n('entities.event.fields.type'),
        sorter: false,
        dataIndex: 'type',
        render: (value) => <EventTypeListItem value={value} />,
      },
      {
        title: i18n('entities.event.fields.category'),
        sorter: true,
        dataIndex: 'category',
      },
      {
        title: i18n('entities.event.fields.startDate'),
        sorter: true,
        dataIndex: 'startDate',
        render: (value) =>
          value
            ? moment(value).format('YYYY-MM-DD HH:mm')
            : null,
      },
      {
        title: i18n('entities.event.fields.live'),
        sorter: true,
        dataIndex: 'live',
        render: (value) =>
          value ? i18n('common.yes') : i18n('common.no'),
      },
      {
        title: i18n('entities.event.fields.time'),
        sorter: true,
        dataIndex: 'time',
      },
      {
        title: i18n('entities.event.fields.place'),
        sorter: false,
        dataIndex: 'place',
        render: (value) => <LicenceListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/event/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/event/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  const rowSelection = () => {
    return {
      selectedRowKeys: selectedKeys,
      onChange: (selectedRowKeys) => {
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  return (
    <TableWrapper>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns as any}
        dataSource={rows}
        pagination={pagination}
        onChange={handleTableChange}
        rowSelection={rowSelection()}
        scroll={{
          x: true,
        }}
      />
    </TableWrapper>
  );
};

export default EventListTable;
