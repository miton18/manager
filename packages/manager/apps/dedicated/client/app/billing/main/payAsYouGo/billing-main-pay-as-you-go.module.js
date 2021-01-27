import routing from './billing-main-pay-as-you-go.routes';

const moduleName = 'ovhManagerBillingMainPayAsYouGo';

angular
  .module(moduleName, ['ui.router'])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
