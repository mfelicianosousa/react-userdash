const faker = require('faker');

module.exports = () => {
    const data = {
        users: [],
    };

    for (let i = 1 ; i < 2000; i++) {
        data.users.push(
            // @ts-ignore
            { id: i,
              name: faker.name.firstName(),
              email: faker.internet.email(),
              birthdate: faker.date.past(),
              phone: faker.phone.phoneNumber(),
              image: faker.image.people(),
              address: {
                country: faker.address.country(),
                state: faker.address.state(),
                street: faker.address.streetName(),
                number: Math.floor(Math.random() * 100)
              }
            }
        );
            
    }
    return data;
};



// export function createRandomUser(): User {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
//   }
//   export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
//     count: 5,
//   });

