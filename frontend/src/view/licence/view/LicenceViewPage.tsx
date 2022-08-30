import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/licence/view/licenceViewActions';
import selectors from 'src/modules/licence/view/licenceViewSelectors';
import LicenceView from 'src/view/licence/view/LicenceView';
import LicenceViewToolbar from 'src/view/licence/view/LicenceViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const LicencePage = (props) => {
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
          [i18n('entities.licence.menu'), '/licence'],
          [i18n('entities.licence.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.licence.view.title')}
        </PageTitle>

        <LicenceViewToolbar match={match} />

        <LicenceView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default LicencePage;
