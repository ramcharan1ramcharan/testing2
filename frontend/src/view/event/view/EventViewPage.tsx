import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/event/view/eventViewActions';
import selectors from 'src/modules/event/view/eventViewSelectors';
import EventView from 'src/view/event/view/EventView';
import EventViewToolbar from 'src/view/event/view/EventViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EventPage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.event.menu'), '/event'],
          [i18n('entities.event.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.event.view.title')}
        </PageTitle>

        <EventViewToolbar match={match} />

        <EventView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default EventPage;
