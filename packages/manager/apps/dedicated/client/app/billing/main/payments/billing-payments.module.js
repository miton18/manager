import details from './details/billing-payments-details.module';
import request from './request/billing-payments-request.module';

import routing from './billing-payments.routes';
import service from './billing-payments.service';

const moduleName = 'ovhManagerBillingMainPayments';

angular
  .module(moduleName, [details, request, 'ui.router'])
  .config(routing)
  .service('BillingPayments', service)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
