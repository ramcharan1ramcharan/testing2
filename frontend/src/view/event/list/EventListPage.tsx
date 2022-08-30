import React from 'react';
import { i18n } from 'src/i18n';
import EventListFilter from 'src/view/event/list/EventListFilter';
import EventListTable from 'src/view/event/list/EventListTable';
import EventListToolbar from 'src/view/event/list/EventListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EventListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.event.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.event.list.title')}
        </PageTitle>

        <EventListToolbar />
        <EventListFilter />
        <EventListTable />
      </ContentWrapper>
    </>
  );
};

export default EventListPage;
