import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/eventData/view/eventDataViewActions';
import selectors from 'src/modules/eventData/view/eventDataViewSelectors';
import EventDataView from 'src/view/eventData/view/EventDataView';
import EventDataViewToolbar from 'src/view/eventData/view/EventDataViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EventDataPage = (props) => {
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
          [i18n('entities.eventData.menu'), '/event-data'],
          [i18n('entities.eventData.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.eventData.view.title')}
        </PageTitle>

        <EventDataViewToolbar match={match} />

        <EventDataView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default EventDataPage;
