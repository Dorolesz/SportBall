const { fakerHU } = '@faker-js/faker';

module.exports = {
  up: async (queryInterface) => {
    const users = [];

    for (let i = 0; i < 5; i++) {
      users.push({
        name: fakerHU.name.firstName(),
        goalCount: fakerHU.number.int({ min: 1, max: 20 }),
        birthDate: fakerHU.date.past({ years: 30 }).toISOString().split('T')[0],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    const insertedUsers = await queryInterface.bulkInsert('Users', users, { returning: true });

    const teams = [];

    for (let i = 0; i < 5; i++) {
      teams.push({
        name: `Team ${fakerHU.company.name()}`,
        country: fakerHU.address.country(),
        userId: insertedUsers[i].id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Teams', teams, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Teams', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
