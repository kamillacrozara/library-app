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

          const email = this.get('emailAddress');
          const message = this.get('message');

          const newContact = this.store.createRecord('contact', {email: email, message: message});

          newContact.save().then((response) => {
              this.set('responseMessage', `We got your message and we’ll get in touch soon.`);
              this.set('emailAddress', '');
              this.set('message', '');
          });

      }

});
