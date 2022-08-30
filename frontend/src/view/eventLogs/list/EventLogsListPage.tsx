import React from 'react';
import { i18n } from 'src/i18n';
import EventLogsListFilter from 'src/view/eventLogs/list/EventLogsListFilter';
import EventLogsListTable from 'src/view/eventLogs/list/EventLogsListTable';
import EventLogsListToolbar from 'src/view/eventLogs/list/EventLogsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EventLogsListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.eventLogs.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.eventLogs.list.title')}
        </PageTitle>

        <EventLogsListToolbar />
        <EventLogsListFilter />
        <EventLogsListTable />
      </ContentWrapper>
    </>
  );
};

export default EventLogsListPage;
