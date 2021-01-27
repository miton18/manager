import routing from './billing-payment-refunds.routes';
import service from './billing-refunds.service';

const moduleName = 'ovhManagerBillingPaymentRefund';

angular
  .module(moduleName, ['ui.router'])
  .config(routing)
  .service('BillingRefunds', service)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
