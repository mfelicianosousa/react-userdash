const { fakerPT_BR: faker } = require('@faker-js/faker');

module.exports = () =>{
    const data = {
        users: [],
    };

    for (let i = 1 ; i < 2000; i++) {
        data.users.push(
            // @ts-ignore
            { id: i,
              name:  faker.person.firstName(),
              email: faker.internet.email(),
              birthdate: faker.date.past(),
              phone: faker.phone.number(),
              image: faker.image.avatar(),
              address: {
                country: 'Brasil', //fakerPT_BR.location.country(),
                state: faker.location.state(),
                strate: faker.location.street(),
                number: Math.floor(Math.random() * 100)
              }
            }
        );
            
    }
    return data;
};

