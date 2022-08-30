import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/eventData/importer/eventDataImporterActions';
import fields from 'src/modules/eventData/importer/eventDataImporterFields';
import selectors from 'src/modules/eventData/importer/eventDataImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EventDataImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.eventData.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.eventData.menu'), '/event-data'],
          [i18n('entities.eventData.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.eventData.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default EventDataImportPage;
