import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/eventType/importer/eventTypeImporterActions';
import fields from 'src/modules/eventType/importer/eventTypeImporterFields';
import selectors from 'src/modules/eventType/importer/eventTypeImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EventTypeImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.eventType.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.eventType.menu'), '/event-type'],
          [i18n('entities.eventType.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.eventType.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default EventTypeImportPage;
