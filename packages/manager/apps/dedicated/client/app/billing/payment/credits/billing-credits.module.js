import movements from './movements/billing-credits-movements.module';

import routing from './billing-payment-credits.routes';
import service from './billing-credits.service';

const moduleName = 'ovhManagerBillingPaymentCredits';

angular
  .module(moduleName, ['ui.router', movements])
  .config(routing)
  .service('BillingCredits', service)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
