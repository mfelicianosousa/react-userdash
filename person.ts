import faker from 'faker';

faker.locale = 'pt_BR'

const people =[]

    for (let i = 0; i < 100; i++) {
        const person = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            address: {
                city: faker.address.city(),
                country: faker.address.country(),
                phone: faker.phone.phoneNumber(),
                state: faker.address.stateAbbr(),
                street: faker.address.streetName(),
                zipCode: faker.address.zipCode()
            },
            birthDay: faker.date.past(),
            image: faker.image.avatar(),
            email: faker.internet.email(),
            userName: faker.internet.userName(),
            password: faker.internet.password(),
            ip: faker.internet.ip(),
        }
        people.push(person)
}
console.log(people)