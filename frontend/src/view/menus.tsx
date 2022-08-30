import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import config from 'src/config';

import {
  DashboardOutlined,
  UserAddOutlined,
  FileSearchOutlined,
  SettingOutlined,
  RightOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardOutlined />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlined />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <UserAddOutlined />,
  },

  {
    path: '/audit-logs',
    icon: <FileSearchOutlined />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingOutlined />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/event-type',
    permissionRequired: permissions.eventTypeRead,
    icon: <RightOutlined />,
    label: i18n('entities.eventType.menu'),
  },

  {
    path: '/event',
    permissionRequired: permissions.eventRead,
    icon: <RightOutlined />,
    label: i18n('entities.event.menu'),
  },

  {
    path: '/licence',
    permissionRequired: permissions.licenceRead,
    icon: <RightOutlined />,
    label: i18n('entities.licence.menu'),
  },

  {
    path: '/event-logs',
    permissionRequired: permissions.eventLogsRead,
    icon: <RightOutlined />,
    label: i18n('entities.eventLogs.menu'),
  },

  {
    path: '/event-data',
    permissionRequired: permissions.eventDataRead,
    icon: <RightOutlined />,
    label: i18n('entities.eventData.menu'),
  },

  {
    path: '/institution',
    permissionRequired: permissions.institutionRead,
    icon: <RightOutlined />,
    label: i18n('entities.institution.menu'),
  },
].filter(Boolean);
