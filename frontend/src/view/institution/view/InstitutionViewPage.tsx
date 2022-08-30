import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/institution/view/institutionViewActions';
import selectors from 'src/modules/institution/view/institutionViewSelectors';
import InstitutionView from 'src/view/institution/view/InstitutionView';
import InstitutionViewToolbar from 'src/view/institution/view/InstitutionViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const InstitutionPage = (props) => {
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
          [i18n('entities.institution.menu'), '/institution'],
          [i18n('entities.institution.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.institution.view.title')}
        </PageTitle>

        <InstitutionViewToolbar match={match} />

        <InstitutionView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default InstitutionPage;
