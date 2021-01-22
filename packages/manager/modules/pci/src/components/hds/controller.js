import { Environment } from '@ovh-ux/manager-config';
import { HDS_GET_MORE_INFO } from './hds.constant';

export default class HdsComponentController {
  constructor() {
    this.infoLink = HDS_GET_MORE_INFO[Environment.getUser().ovhSubsidiary];
  }

  isValidForCheckout() {
    return (
      this.hds.isValidSupportLevel &&
      this.hds.isValidForCertification &&
      !this.hds.isCertifiedProject
    );
  }
}
