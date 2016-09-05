import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',

    message: '',

    validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

    validMessage: Ember.computed.gte('message.length', 5),

    isDisabled: Ember.computed.and('validEmail', 'validMessage'),

    actions: {
      saveMessage(){
          alert(`Saving message of the following email address is in progress: ${this.get('emailAddress')}`);
          this.set('responseMessage', `Thank you! We've just saved your message.`);
          this.set('emailAddress', '');
          this.set('message', '');
      }
    }
});
