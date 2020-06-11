// User Model
import { Model } from '@vuex-orm/core'

export default class Client extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'clients';

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      clientNumber: this.attr(''),
      businessName: this.attr(''),
      originalLocalOffice: this.attr(''),
      currentLocalOffice: this.attr(''),
      lastBillDate: this.attr('')
    }
  }
}
