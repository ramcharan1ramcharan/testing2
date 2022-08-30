import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/eventLogs/list/eventLogsListActions';
import destroyActions from 'src/modules/eventLogs/destroy/eventLogsDestroyActions';
import selectors from 'src/modules/eventLogs/list/eventLogsListSelectors';
import destroySelectors from 'src/modules/eventLogs/destroy/eventLogsDestroySelectors';
import eventLogsSelectors from 'src/modules/eventLogs/eventLogsSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import EventListItem from 'src/view/event/list/EventListItem';

const EventLogsListTable = (props) => {
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
    eventLogsSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    eventLogsSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.eventLogs.fields.eventId'),
        sorter: false,
        dataIndex: 'eventId',
        render: (value) => <EventListItem value={value} />,
      },
      {
        title: i18n('entities.eventLogs.fields.time'),
        sorter: true,
        dataIndex: 'time',
      },
      {
        title: i18n('entities.eventLogs.fields.team'),
        sorter: true,
        dataIndex: 'team',
        render: (value) =>
          value
            ? i18n(
                `entities.eventLogs.enumerators.team.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.eventLogs.fields.type'),
        sorter: true,
        dataIndex: 'type',
        render: (value) =>
          value
            ? i18n(
                `entities.eventLogs.enumerators.type.${value}`,
              )
            : null,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/event-logs/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/event-logs/${record.id}/edit`}>
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

export default EventLogsListTable;
