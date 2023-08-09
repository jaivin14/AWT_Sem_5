const user1 = {
    firstName:'Jaivin',
    lastName: 'Savaliya',
    email: 'jpsavaliya14@gmail.com',
    status : ()=>{
        console.log(`my name is ${this.firstName} ${this.lastName}`);
    }
}

const dash = require('lodash')
const user2 = {
    firstName:'Jaivin',
    lastName: 'Savaliya',
    email: 'jpsavaliya14@gmail.com',
    status : ()=>{
        console.log(`my name is ${this.firstName} ${this.lastName}`);
    }
}

const clonedObject2 = dash.cloneDeepWith(user2, (value) => {
    if (typeof value === 'function') {
      return dash.cloneDeep(value);
    }
  });

clonedObject2.status()