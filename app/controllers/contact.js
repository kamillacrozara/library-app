import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',

    message: '',

    validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

    validMessage: Ember.computed.gte('message.length', 5),

    validData: Ember.computed.and('validEmail', 'validMessage'),

    isDisabled: Ember.computed.not('validData'),

    actions: {
      saveMessage(){
          alert(`Saving message of the following email address is in progress: ${this.get('emailAddress')}`);
          this.set('responseMessage', `We got your message and we’ll get in touch soon.`);
          this.set('emailAddress', '');
          this.set('message', '');
      }
    }
});
