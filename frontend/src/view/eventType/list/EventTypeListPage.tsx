import React from 'react';
import { i18n } from 'src/i18n';
import EventTypeListFilter from 'src/view/eventType/list/EventTypeListFilter';
import EventTypeListTable from 'src/view/eventType/list/EventTypeListTable';
import EventTypeListToolbar from 'src/view/eventType/list/EventTypeListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EventTypeListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.eventType.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.eventType.list.title')}
        </PageTitle>

        <EventTypeListToolbar />
        <EventTypeListFilter />
        <EventTypeListTable />
      </ContentWrapper>
    </>
  );
};

export default EventTypeListPage;
