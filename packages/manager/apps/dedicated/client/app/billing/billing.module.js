import set from 'lodash/set';

import ngOvhExportCsv from '@ovh-ux/ng-ovh-export-csv';
import ovhManagerCore from '@ovh-ux/manager-core';

import autorenew from './autoRenew/autorenew.module';
import featureAvailability from './billing-feature-availability';
import history from './main/history/history.module';
import order from './order/billing-order-tracking.module';
import orders from './orders/orders.module';
import sla from './sla/sla.module';
import termination from './confirmTerminate/termination.module';
import paymentMehtod from './payment/method';

import directives from './components/directives';
import filters from './components/filters';
import routing from './billing.routing';
import services from './services.module';

const moduleName = 'Billing';

angular
  .module(moduleName, [
    ovhManagerCore,
    autorenew,
    // constants,
    'Billing.controllers',
    directives,
    filters,
    history,
    'ngRoute',
    'ngSanitize',
    order,
    orders,
    ngOvhExportCsv,
    'ngOvhUtils',
    services,
    sla,
    termination,
    'ui.bootstrap',
    'ui.router',
    paymentMehtod,
  ])
  .constant('BILLING_BASE_URL', 'billing/')
  .config(routing)
  .service('billingFeatureAvailability', featureAvailability)
  .run(
    /* @ngInject */ ($rootScope, coreConfig) => {
      set($rootScope, 'worldPart', coreConfig.getRegion());
    },
  );

export default moduleName;
