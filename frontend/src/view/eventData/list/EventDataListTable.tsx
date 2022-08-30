import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/eventData/list/eventDataListActions';
import destroyActions from 'src/modules/eventData/destroy/eventDataDestroyActions';
import selectors from 'src/modules/eventData/list/eventDataListSelectors';
import destroySelectors from 'src/modules/eventData/destroy/eventDataDestroySelectors';
import eventDataSelectors from 'src/modules/eventData/eventDataSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import EventListItem from 'src/view/event/list/EventListItem';

const EventDataListTable = (props) => {
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
    eventDataSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    eventDataSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.eventData.fields.eventId'),
        sorter: false,
        dataIndex: 'eventId',
        render: (value) => <EventListItem value={value} />,
      },
      {
        title: i18n('entities.eventData.fields.delay'),
        sorter: true,  
        dataIndex: 'delay',
        align: 'right',
      },
      {
        title: i18n('entities.eventData.fields.extraTimeDuration'),
        sorter: true,  
        dataIndex: 'extraTimeDuration',
        align: 'right',
      },
      {
        title: i18n('entities.eventData.fields.localTeamName'),
        sorter: true,
        dataIndex: 'localTeamName',
      },
      {
        title: i18n('entities.eventData.fields.localTeamShortname'),
        sorter: true,
        dataIndex: 'localTeamShortname',
      },
      {
        title: i18n('entities.eventData.fields.localTeamColor'),
        sorter: true,
        dataIndex: 'localTeamColor',
      },
      {
        title: i18n('entities.eventData.fields.localTeamLogo'),
        sorter: true,
        dataIndex: 'localTeamLogo',
      },
      {
        title: i18n('entities.eventData.fields.visitTeamName'),
        sorter: true,
        dataIndex: 'visitTeamName',
      },
      {
        title: i18n('entities.eventData.fields.visitTeamShortname'),
        sorter: true,
        dataIndex: 'visitTeamShortname',
      },
      {
        title: i18n('entities.eventData.fields.visitTeamColor'),
        sorter: true,
        dataIndex: 'visitTeamColor',
      },
      {
        title: i18n('entities.eventData.fields.visitTeamLogo'),
        sorter: true,
        dataIndex: 'visitTeamLogo',
      },
      {
        title: i18n('entities.eventData.fields.partDuration'),
        sorter: true,  
        dataIndex: 'partDuration',
        align: 'right',
      },
      {
        title: i18n('entities.eventData.fields.info'),
        sorter: true,
        dataIndex: 'info',
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/event-data/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/event-data/${record.id}/edit`}>
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

export default EventDataListTable;
