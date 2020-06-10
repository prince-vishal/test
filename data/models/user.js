// User Model
import { Model } from '@vuex-orm/core'

export default class User extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'users';

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      user_id: this.attr(''),
      hasMarketing: this.attr('N'),
      hasNewBusinessUnderwriting: this.attr('N'),
      hasInquiryOnly: this.attr('N'),
      hasAdmin: this.attr('Y')
    }
  }
}
