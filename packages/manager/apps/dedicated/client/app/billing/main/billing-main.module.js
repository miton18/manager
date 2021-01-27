import history from './history/history.module';
import payments from './payments/billing-payments.module';
import payAsYouGo from './payAsYouGo/billing-main-pay-as-you-go.module';

import routing from './billing-main.routes';

const moduleName = 'ovhManagerBillingMain';

angular
  .module(moduleName, ['ui.router', history, payments, payAsYouGo])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
