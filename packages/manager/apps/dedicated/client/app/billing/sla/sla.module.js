import routing from './sla.routing';
import service from './billing-sla.service';

const moduleName = 'ovhManagerBillingSla';

angular
  .module(moduleName, ['ui.router'])
  .service('BillingSla', service)
  .config(routing);

export default moduleName;
