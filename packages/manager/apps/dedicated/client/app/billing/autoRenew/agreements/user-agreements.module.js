import atInternet from '@ovh-ux/ng-at-internet';

import acceptAll from './popup-agreement/popup-agreement.module';
import details from './details/details.module';
import routing from './user-agreements.routes';
import service from './user-agreements.service';

const moduleName = 'ovhManagerBillingAgreements';

angular
  .module(moduleName, ['ui.router', acceptAll, atInternet, details])
  .config(routing)
  .service('UserAccountServicesAgreements', service)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
