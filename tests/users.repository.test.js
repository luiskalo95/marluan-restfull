const mockingoose = require('mockingoose').default;
const { UserRepository } = require('../src/repositories');
const { UserSchema } = require('../src/models');
const { UserModelMock, UsersModelMock } = require('./mocks')

describe('Test to UserRepository',() => {

  beforeEach(async() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it('Should return a user by id', async () => {
    const { password, ...user } = { ...UserModelMock };
    mockingoose(UserSchema).toReturn(user, 'findOne');
    const _userRepository = new UserRepository({ UserSchema });
    const userFound = await _userRepository.getById(user._id);
    expect(JSON.parse(JSON.stringify(userFound))).toMatchObject(user);
  });

  it("Should find a user by email", async () => {
    const { password, ...user } = { ...UserModelMock };
    mockingoose(UserSchema).toReturn(user, "findOne");
    const _userRepository = new UserRepository({ UserSchema });
    const userFound = await _userRepository.getUserByEmail(user.email);
    expect(JSON.parse(JSON.stringify(userFound))).toMatchObject(user);
  });

  it("Should return a user collection", async () => {
    const users = UsersModelMock.map(user => {
      const { password, ...newUser } = user;
      return newUser;
    });
    mockingoose(UserSchema).toReturn(users, "find");
    const _userRepository = new UserRepository({ UserSchema });
    const usersFound = await _userRepository.getAll();
    expect(JSON.parse(JSON.stringify(usersFound))).toMatchObject(users);
  });

  it("Should update an especific user by id", async () => {
    const { password, ...user } = { ...UserModelMock };
    mockingoose(UserSchema).toReturn(user, "findOneAndUpdate");
    const _userRepository = new UserRepository({ UserSchema });
    const userUpdated = await _userRepository.update(user._id, { name: "Carlos" });
    expect(JSON.parse(JSON.stringify(userUpdated))).toMatchObject(user);
  });

  it("Should delete an especific user by id", async () => {
    const { password, ...user } = { ...UserModelMock };
    mockingoose(UserSchema).toReturn(user, "findOneAndDelete");
    const _userRepository = new UserRepository({ UserSchema });
    const userDeleted = await _userRepository.delete(user._id);
    expect(JSON.parse(JSON.stringify(userDeleted))).toEqual(user);
  });

})
