const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    eventType: {
        name: 'Tipo de Evento',
        label: 'Tipos de Evento',
        menu: 'Tipos de Evento',
        exporterFileName: 'Tipo de Evento_exportados',
        list: {
          menu: 'Tipos de Evento',
          title: 'Tipos de Evento',
        },
        create: {
          success: 'Tipo de Evento salvo com sucesso',
        },
        update: {
          success: 'Tipo de Evento salvo com sucesso',
        },
        destroy: {
          success: 'Tipo de Evento deletado com sucesso',
        },
        destroyAll: {
          success: 'Tipo de Evento(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Tipo de Evento',
        },
        fields: {
          id: 'Id',
          'nombre': 'Nombre',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'nombre': 'Nombre',
        },
        hints: {

        },
        new: {
          title: 'Novo Tipo de Evento',
        },
        view: {
          title: 'Visualizar Tipo de Evento',
        },
        importer: {
          title: 'Importar Tipos de Evento',
          fileName: 'eventType_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    event: {
        name: 'Evento',
        label: 'Eventos',
        menu: 'Eventos',
        exporterFileName: 'Evento_exportados',
        list: {
          menu: 'Eventos',
          title: 'Eventos',
        },
        create: {
          success: 'Evento salvo com sucesso',
        },
        update: {
          success: 'Evento salvo com sucesso',
        },
        destroy: {
          success: 'Evento deletado com sucesso',
        },
        destroyAll: {
          success: 'Evento(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Evento',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Evento',
        },
        view: {
          title: 'Visualizar Evento',
        },
        importer: {
          title: 'Importar Eventos',
          fileName: 'event_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    licence: {
        name: 'Licencia',
        label: 'Licencias',
        menu: 'Licencias',
        exporterFileName: 'Licencia_exportados',
        list: {
          menu: 'Licencias',
          title: 'Licencias',
        },
        create: {
          success: 'Licencia salvo com sucesso',
        },
        update: {
          success: 'Licencia salvo com sucesso',
        },
        destroy: {
          success: 'Licencia deletado com sucesso',
        },
        destroyAll: {
          success: 'Licencia(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Licencia',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'active': 'Activo',
          'institution': 'Institución',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'Nombre de la licencia / lugar',
        },
        hints: {

        },
        new: {
          title: 'Novo Licencia',
        },
        view: {
          title: 'Visualizar Licencia',
        },
        importer: {
          title: 'Importar Licencias',
          fileName: 'licence_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    eventLogs: {
        name: 'Log de Evento',
        label: 'Logs de Evento',
        menu: 'Logs de Evento',
        exporterFileName: 'Log de Evento_exportados',
        list: {
          menu: 'Logs de Evento',
          title: 'Logs de Evento',
        },
        create: {
          success: 'Log de Evento salvo com sucesso',
        },
        update: {
          success: 'Log de Evento salvo com sucesso',
        },
        destroy: {
          success: 'Log de Evento deletado com sucesso',
        },
        destroyAll: {
          success: 'Log de Evento(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Log de Evento',
        },
        fields: {
          id: 'Id',
          'eventId': 'Evento',
          'time': 'Tiempo',
          'team': 'Equipo',
          'type': 'Tipo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Log de Evento',
        },
        view: {
          title: 'Visualizar Log de Evento',
        },
        importer: {
          title: 'Importar Logs de Evento',
          fileName: 'eventLogs_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    eventData: {
        name: 'Data de Evento',
        label: 'Datos de Evento',
        menu: 'Datos de Evento',
        exporterFileName: 'Data de Evento_exportados',
        list: {
          menu: 'Datos de Evento',
          title: 'Datos de Evento',
        },
        create: {
          success: 'Data de Evento salvo com sucesso',
        },
        update: {
          success: 'Data de Evento salvo com sucesso',
        },
        destroy: {
          success: 'Data de Evento deletado com sucesso',
        },
        destroyAll: {
          success: 'Data de Evento(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Data de Evento',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Data de Evento',
        },
        view: {
          title: 'Visualizar Data de Evento',
        },
        importer: {
          title: 'Importar Datos de Evento',
          fileName: 'eventData_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    institution: {
        name: 'Institución',
        label: 'Instituciones',
        menu: 'Instituciones',
        exporterFileName: 'Institución_exportados',
        list: {
          menu: 'Instituciones',
          title: 'Instituciones',
        },
        create: {
          success: 'Institución salvo com sucesso',
        },
        update: {
          success: 'Institución salvo com sucesso',
        },
        destroy: {
          success: 'Institución deletado com sucesso',
        },
        destroyAll: {
          success: 'Institución(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Institución',
        },
        fields: {
          id: 'Id',
          'name': 'Nombre',
          'active': 'Activo',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Institución',
        },
        view: {
          title: 'Visualizar Institución',
        },
        importer: {
          title: 'Importar Instituciones',
          fileName: 'institution_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },

  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    passwordChange: {
      title: 'Alterar Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas não conferem',
    },
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },
  roles: {
    admin: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado aos recursos',
    },
  },

  user: {
    invite: 'Convidar',
    title: 'Usuários',
    menu: 'Usuários',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
    },
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    disable: 'Desabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess:
      'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess:
      'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    exporterFileName: 'usuarios_export',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSuccess: 'Usuário(s) deletados com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Padrão',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar ao dashboard',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },
};

export default ptBR;
