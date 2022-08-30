const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    eventType: {
        name: 'eventType',
        label: 'Tipos de Evento',
        menu: 'Tipos de Evento',
        exporterFileName: 'eventType_export',
        list: {
          menu: 'Tipos de Evento',
          title: 'Tipos de Evento',
        },
        create: {
          success: 'Tipo de Evento successfully saved',
        },
        update: {
          success: 'Tipo de Evento successfully saved',
        },
        destroy: {
          success: 'Tipo de Evento successfully deleted',
        },
        destroyAll: {
          success: 'Tipo de Evento(s) successfully deleted',
        },
        edit: {
          title: 'Edit Tipo de Evento',
        },
        fields: {
          id: 'Id',
          'nombre': 'Nombre',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'nombre': 'Nombre',
        },
        hints: {

        },
        new: {
          title: 'New Tipo de Evento',
        },
        view: {
          title: 'View Tipo de Evento',
        },
        importer: {
          title: 'Import Tipos de Evento',
          fileName: 'eventType_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    event: {
        name: 'event',
        label: 'Eventos',
        menu: 'Eventos',
        exporterFileName: 'event_export',
        list: {
          menu: 'Eventos',
          title: 'Eventos',
        },
        create: {
          success: 'Evento successfully saved',
        },
        update: {
          success: 'Evento successfully saved',
        },
        destroy: {
          success: 'Evento successfully deleted',
        },
        destroyAll: {
          success: 'Evento(s) successfully deleted',
        },
        edit: {
          title: 'Edit Evento',
        },
        fields: {
          id: 'Id',
          'institution': 'Institution',
          'type': 'Tipo',
          'category': 'Category',
          'startDateRange': 'Fecha y Hora de inicio',
          'startDate': 'Fecha y Hora de inicio',
          'live': 'Live',
          'time': 'Time',
          'place': 'Lugar',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'type': 'Tipo de Evento',
          'category': 'Id de categoría',
          'startDate': 'Fecha y Hora de inicio',
          'time': 'Tiempo',
          'place': 'Lugar',
        },
        hints: {

        },
        new: {
          title: 'New Evento',
        },
        view: {
          title: 'View Evento',
        },
        importer: {
          title: 'Import Eventos',
          fileName: 'event_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    licence: {
        name: 'licence',
        label: 'Licencias',
        menu: 'Licencias',
        exporterFileName: 'licence_export',
        list: {
          menu: 'Licencias',
          title: 'Licencias',
        },
        create: {
          success: 'Licencia successfully saved',
        },
        update: {
          success: 'Licencia successfully saved',
        },
        destroy: {
          success: 'Licencia successfully deleted',
        },
        destroyAll: {
          success: 'Licencia(s) successfully deleted',
        },
        edit: {
          title: 'Edit Licencia',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'active': 'Activo',
          'institution': 'Institución',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Nombre de la licencia / lugar',
        },
        hints: {

        },
        new: {
          title: 'New Licencia',
        },
        view: {
          title: 'View Licencia',
        },
        importer: {
          title: 'Import Licencias',
          fileName: 'licence_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    eventLogs: {
        name: 'eventLogs',
        label: 'Logs de Evento',
        menu: 'Logs de Evento',
        exporterFileName: 'eventLogs_export',
        list: {
          menu: 'Logs de Evento',
          title: 'Logs de Evento',
        },
        create: {
          success: 'Log de Evento successfully saved',
        },
        update: {
          success: 'Log de Evento successfully saved',
        },
        destroy: {
          success: 'Log de Evento successfully deleted',
        },
        destroyAll: {
          success: 'Log de Evento(s) successfully deleted',
        },
        edit: {
          title: 'Edit Log de Evento',
        },
        fields: {
          id: 'Id',
          'eventId': 'Evento',
          'time': 'Tiempo',
          'team': 'Equipo',
          'type': 'Tipo',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'team': {
            'local': 'Local',
            'visitante': 'Visitante',
          },
          'type': {
            'gol': 'Gol',
            'tarjeta_amarilla': 'Tarjeta_amarilla',
            'tarjeta_roja': 'Tarjeta_roja',
            'substitucion': 'Substitucion',
            'penal': 'Penal',
          },
        },
        placeholders: {
          'eventId': 'Evento',
          'time': 'Tiempo',
          'team': 'Equipo',
          'type': 'Tipo',
        },
        hints: {

        },
        new: {
          title: 'New Log de Evento',
        },
        view: {
          title: 'View Log de Evento',
        },
        importer: {
          title: 'Import Logs de Evento',
          fileName: 'eventLogs_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    eventData: {
        name: 'eventData',
        label: 'Datos de Evento',
        menu: 'Datos de Evento',
        exporterFileName: 'eventData_export',
        list: {
          menu: 'Datos de Evento',
          title: 'Datos de Evento',
        },
        create: {
          success: 'Data de Evento successfully saved',
        },
        update: {
          success: 'Data de Evento successfully saved',
        },
        destroy: {
          success: 'Data de Evento successfully deleted',
        },
        destroyAll: {
          success: 'Data de Evento(s) successfully deleted',
        },
        edit: {
          title: 'Edit Data de Evento',
        },
        fields: {
          id: 'Id',
          'eventId': 'Evento',
          'delayRange': 'Delay',
          'delay': 'Delay',
          'extraTimeDurationRange': 'Duración Tiempo Extra',
          'extraTimeDuration': 'Duración Tiempo Extra',
          'localTeamName': 'Equipo Local',
          'localTeamShortname': 'Iniciales Equipo Local',
          'localTeamColor': 'Color del Equipo Local',
          'localTeamLogo': 'Escudo Equipo Local',
          'visitTeamName': 'Equipo Visitante',
          'visitTeamShortname': 'Iniciales Equipo Visitante',
          'visitTeamColor': 'Color Equipo Visitante',
          'visitTeamLogo': 'Escudo Equipo Visitante',
          'partDurationRange': 'Duración Tiempos',
          'partDuration': 'Duración Tiempos',
          'info': 'Información adicional',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'delay': 'delay de marcador',
          'extraTimeDuration': '0',
        },
        hints: {

        },
        new: {
          title: 'New Data de Evento',
        },
        view: {
          title: 'View Data de Evento',
        },
        importer: {
          title: 'Import Datos de Evento',
          fileName: 'eventData_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    institution: {
        name: 'institution',
        label: 'Instituciones',
        menu: 'Instituciones',
        exporterFileName: 'institution_export',
        list: {
          menu: 'Instituciones',
          title: 'Instituciones',
        },
        create: {
          success: 'Institución successfully saved',
        },
        update: {
          success: 'Institución successfully saved',
        },
        destroy: {
          success: 'Institución successfully deleted',
        },
        destroyAll: {
          success: 'Institución(s) successfully deleted',
        },
        edit: {
          title: 'Edit Institución',
        },
        fields: {
          id: 'Id',
          'name': 'Nombre',
          'active': 'Activo',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Institución',
        },
        view: {
          title: 'View Institución',
        },
        importer: {
          title: 'Import Instituciones',
          fileName: 'institution_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom access to resources',
    },
  },

  user: {
    invite: 'Invite',
    title: 'Users',
    menu: 'Users',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
    },
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    disable: 'Disable',
    enable: 'Enable',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'User(s) successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
