import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/institution/importer/institutionImporterActions';
import fields from 'src/modules/institution/importer/institutionImporterFields';
import selectors from 'src/modules/institution/importer/institutionImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const InstitutionImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.institution.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.institution.menu'), '/institution'],
          [i18n('entities.institution.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.institution.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default InstitutionImportPage;
