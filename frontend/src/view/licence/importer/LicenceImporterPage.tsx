import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/licence/importer/licenceImporterActions';
import fields from 'src/modules/licence/importer/licenceImporterFields';
import selectors from 'src/modules/licence/importer/licenceImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const LicenceImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.licence.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.licence.menu'), '/licence'],
          [i18n('entities.licence.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.licence.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default LicenceImportPage;
