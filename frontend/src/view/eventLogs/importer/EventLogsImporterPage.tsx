import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/eventLogs/importer/eventLogsImporterActions';
import fields from 'src/modules/eventLogs/importer/eventLogsImporterFields';
import selectors from 'src/modules/eventLogs/importer/eventLogsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EventLogsImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.eventLogs.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.eventLogs.menu'), '/event-logs'],
          [i18n('entities.eventLogs.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.eventLogs.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default EventLogsImportPage;
