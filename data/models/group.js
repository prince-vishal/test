// User Model
import { Model } from '@vuex-orm/core'

export default class Group extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'groups';

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      gpoNumber: this.attr(''),
      businessName: this.attr('N'),
      firstName: this.attr(''),
      lastName: this.attr(''),
      phoneNumber: this.attr(''),
      currentLocalOffice: this.attr(''),
      businessState: this.attr(''),
    }
  }
}
