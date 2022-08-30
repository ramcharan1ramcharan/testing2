import React from 'react';
import { i18n } from 'src/i18n';
import EventDataListFilter from 'src/view/eventData/list/EventDataListFilter';
import EventDataListTable from 'src/view/eventData/list/EventDataListTable';
import EventDataListToolbar from 'src/view/eventData/list/EventDataListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EventDataListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.eventData.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.eventData.list.title')}
        </PageTitle>

        <EventDataListToolbar />
        <EventDataListFilter />
        <EventDataListTable />
      </ContentWrapper>
    </>
  );
};

export default EventDataListPage;
