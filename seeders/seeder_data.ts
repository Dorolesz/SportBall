import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const users = await queryInterface.bulkInsert('Users', [
      {
        name: 'Alex',
        goalCount: 10,
        birthDate: '1995-08-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jordan',
        goalCount: 7,
        birthDate: '1998-03-22',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taylor',
        goalCount: 12,
        birthDate: '2001-11-30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Morgan',
        goalCount: 8,
        birthDate: '1993-07-19',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Casey',
        goalCount: 15,
        birthDate: '2002-02-10',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { returning: true } as any);

    await queryInterface.bulkInsert('Teams', [
      {
        name: 'Team Alpha',
        country: 'USA',
        userId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Team Beta',
        country: 'Canada',
        userId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Team Gamma',
        country: 'UK',
        userId: users[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Team Delta',
        country: 'Australia',
        userId: users[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Team Epsilon',
        country: 'Germany',
        userId: users[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Teams', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
