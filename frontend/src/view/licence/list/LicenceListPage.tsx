import React from 'react';
import { i18n } from 'src/i18n';
import LicenceListFilter from 'src/view/licence/list/LicenceListFilter';
import LicenceListTable from 'src/view/licence/list/LicenceListTable';
import LicenceListToolbar from 'src/view/licence/list/LicenceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const LicenceListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.licence.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.licence.list.title')}
        </PageTitle>

        <LicenceListToolbar />
        <LicenceListFilter />
        <LicenceListTable />
      </ContentWrapper>
    </>
  );
};

export default LicenceListPage;
