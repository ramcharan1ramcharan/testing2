import React from 'react';
import { i18n } from 'src/i18n';
import InstitutionListFilter from 'src/view/institution/list/InstitutionListFilter';
import InstitutionListTable from 'src/view/institution/list/InstitutionListTable';
import InstitutionListToolbar from 'src/view/institution/list/InstitutionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const InstitutionListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.institution.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.institution.list.title')}
        </PageTitle>

        <InstitutionListToolbar />
        <InstitutionListFilter />
        <InstitutionListTable />
      </ContentWrapper>
    </>
  );
};

export default InstitutionListPage;
