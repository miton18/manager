import routing from './billing-main-history-debt-details.routes';

const moduleName = 'ovhManagerBillingMainHistoryDebtDetails';

angular
  .module(moduleName, ['ui.router'])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
