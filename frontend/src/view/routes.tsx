import config from 'src/config';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/event-type',
    loader: () =>
      import('src/view/eventType/list/EventTypeListPage'),
    permissionRequired: permissions.eventTypeRead,
    exact: true,
  },
  {
    path: '/event-type/new',
    loader: () =>
      import('src/view/eventType/form/EventTypeFormPage'),
    permissionRequired: permissions.eventTypeCreate,
    exact: true,
  },
  {
    path: '/event-type/importer',
    loader: () =>
      import(
        'src/view/eventType/importer/EventTypeImporterPage'
      ),
    permissionRequired: permissions.eventTypeImport,
    exact: true,
  },
  {
    path: '/event-type/:id/edit',
    loader: () =>
      import('src/view/eventType/form/EventTypeFormPage'),
    permissionRequired: permissions.eventTypeEdit,
    exact: true,
  },
  {
    path: '/event-type/:id',
    loader: () =>
      import('src/view/eventType/view/EventTypeViewPage'),
    permissionRequired: permissions.eventTypeRead,
    exact: true,
  },

  {
    path: '/event',
    loader: () =>
      import('src/view/event/list/EventListPage'),
    permissionRequired: permissions.eventRead,
    exact: true,
  },
  {
    path: '/event/new',
    loader: () =>
      import('src/view/event/form/EventFormPage'),
    permissionRequired: permissions.eventCreate,
    exact: true,
  },
  {
    path: '/event/importer',
    loader: () =>
      import(
        'src/view/event/importer/EventImporterPage'
      ),
    permissionRequired: permissions.eventImport,
    exact: true,
  },
  {
    path: '/event/:id/edit',
    loader: () =>
      import('src/view/event/form/EventFormPage'),
    permissionRequired: permissions.eventEdit,
    exact: true,
  },
  {
    path: '/event/:id',
    loader: () =>
      import('src/view/event/view/EventViewPage'),
    permissionRequired: permissions.eventRead,
    exact: true,
  },

  {
    path: '/licence',
    loader: () =>
      import('src/view/licence/list/LicenceListPage'),
    permissionRequired: permissions.licenceRead,
    exact: true,
  },
  {
    path: '/licence/new',
    loader: () =>
      import('src/view/licence/form/LicenceFormPage'),
    permissionRequired: permissions.licenceCreate,
    exact: true,
  },
  {
    path: '/licence/importer',
    loader: () =>
      import(
        'src/view/licence/importer/LicenceImporterPage'
      ),
    permissionRequired: permissions.licenceImport,
    exact: true,
  },
  {
    path: '/licence/:id/edit',
    loader: () =>
      import('src/view/licence/form/LicenceFormPage'),
    permissionRequired: permissions.licenceEdit,
    exact: true,
  },
  {
    path: '/licence/:id',
    loader: () =>
      import('src/view/licence/view/LicenceViewPage'),
    permissionRequired: permissions.licenceRead,
    exact: true,
  },

  {
    path: '/event-logs',
    loader: () =>
      import('src/view/eventLogs/list/EventLogsListPage'),
    permissionRequired: permissions.eventLogsRead,
    exact: true,
  },
  {
    path: '/event-logs/new',
    loader: () =>
      import('src/view/eventLogs/form/EventLogsFormPage'),
    permissionRequired: permissions.eventLogsCreate,
    exact: true,
  },
  {
    path: '/event-logs/importer',
    loader: () =>
      import(
        'src/view/eventLogs/importer/EventLogsImporterPage'
      ),
    permissionRequired: permissions.eventLogsImport,
    exact: true,
  },
  {
    path: '/event-logs/:id/edit',
    loader: () =>
      import('src/view/eventLogs/form/EventLogsFormPage'),
    permissionRequired: permissions.eventLogsEdit,
    exact: true,
  },
  {
    path: '/event-logs/:id',
    loader: () =>
      import('src/view/eventLogs/view/EventLogsViewPage'),
    permissionRequired: permissions.eventLogsRead,
    exact: true,
  },

  {
    path: '/event-data',
    loader: () =>
      import('src/view/eventData/list/EventDataListPage'),
    permissionRequired: permissions.eventDataRead,
    exact: true,
  },
  {
    path: '/event-data/new',
    loader: () =>
      import('src/view/eventData/form/EventDataFormPage'),
    permissionRequired: permissions.eventDataCreate,
    exact: true,
  },
  {
    path: '/event-data/importer',
    loader: () =>
      import(
        'src/view/eventData/importer/EventDataImporterPage'
      ),
    permissionRequired: permissions.eventDataImport,
    exact: true,
  },
  {
    path: '/event-data/:id/edit',
    loader: () =>
      import('src/view/eventData/form/EventDataFormPage'),
    permissionRequired: permissions.eventDataEdit,
    exact: true,
  },
  {
    path: '/event-data/:id',
    loader: () =>
      import('src/view/eventData/view/EventDataViewPage'),
    permissionRequired: permissions.eventDataRead,
    exact: true,
  },

  {
    path: '/institution',
    loader: () =>
      import('src/view/institution/list/InstitutionListPage'),
    permissionRequired: permissions.institutionRead,
    exact: true,
  },
  {
    path: '/institution/new',
    loader: () =>
      import('src/view/institution/form/InstitutionFormPage'),
    permissionRequired: permissions.institutionCreate,
    exact: true,
  },
  {
    path: '/institution/importer',
    loader: () =>
      import(
        'src/view/institution/importer/InstitutionImporterPage'
      ),
    permissionRequired: permissions.institutionImport,
    exact: true,
  },
  {
    path: '/institution/:id/edit',
    loader: () =>
      import('src/view/institution/form/InstitutionFormPage'),
    permissionRequired: permissions.institutionEdit,
    exact: true,
  },
  {
    path: '/institution/:id',
    loader: () =>
      import('src/view/institution/view/InstitutionViewPage'),
    permissionRequired: permissions.institutionRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
