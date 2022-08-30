import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/eventLogs/view/eventLogsViewActions';
import selectors from 'src/modules/eventLogs/view/eventLogsViewSelectors';
import EventLogsView from 'src/view/eventLogs/view/EventLogsView';
import EventLogsViewToolbar from 'src/view/eventLogs/view/EventLogsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EventLogsPage = (props) => {
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
          [i18n('entities.eventLogs.menu'), '/event-logs'],
          [i18n('entities.eventLogs.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.eventLogs.view.title')}
        </PageTitle>

        <EventLogsViewToolbar match={match} />

        <EventLogsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default EventLogsPage;
