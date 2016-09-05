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

          const newInvitation = this.store.createRecord('invitation', { email : email});

          newInvitation.save();

          this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
          this.set('emailAddress', '');
          this.set('message', '');
      }
    }
});
