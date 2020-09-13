const { UserService } = require("../src/services");
const { UserRepositoryMock,UserModelMock,UsersModelMock } = require('./mocks');

describe("User Service Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a user by id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.getById.mockReturnValue(UserModelMock);
    const _userService = new UserService({ UserRepository });
    const userFound = await _userService.getById(UserModelMock._id);
    expect(userFound).toMatchObject(UserModelMock);
  });

it("Should find a user by email", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.getUserByEmail.mockReturnValue(UserModelMock);
    const _userService = new UserService({ UserRepository });
    const userFound = await _userService.getUserByEmail(UserModelMock.email);
    expect(userFound).toMatchObject(UserModelMock);
  });

   it("Should return a user collection", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.getAll.mockReturnValue(UsersModelMock);

    const _userService = new UserService({ UserRepository });
    const usersFound = await _userService.getAll();
    expect(usersFound).toMatchObject(UsersModelMock);
  });

  it("Should update a user by id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.update.mockReturnValue(UserModelMock);
    const _userService = new UserService({ UserRepository });
    const userUpdated = await _userService.update(UserModelMock._id, UserModelMock);
    expect(userUpdated).toMatchObject(UserModelMock);
  });

  it("Should delete a user by id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.delete.mockReturnValue(UserModelMock);
    const _userService = new UserService({ UserRepository });
    const userDeleted = await _userService.repository.delete(UserModelMock._id);
    expect(userDeleted).toEqual(UserModelMock);
  });
}); 