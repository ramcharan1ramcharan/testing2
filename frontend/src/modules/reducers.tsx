import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import eventType from 'src/modules/eventType/eventTypeReducers';
import event from 'src/modules/event/eventReducers';
import licence from 'src/modules/licence/licenceReducers';
import eventLogs from 'src/modules/eventLogs/eventLogsReducers';
import eventData from 'src/modules/eventData/eventDataReducers';
import institution from 'src/modules/institution/institutionReducers';
import { combineReducers } from 'redux';
import plan from 'src/modules/plan/planReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    eventType,
    event,
    licence,
    eventLogs,
    eventData,
    institution,
  });
