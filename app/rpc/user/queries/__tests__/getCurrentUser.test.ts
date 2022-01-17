// import { getUser } from "app/utils/getUser"
import db from "db"
import getCurrentUser from "../getCurrentUser"

jest.mock("db", () => ({
  user: { findFirst: jest.fn() },
}))
const mockUserFindFirst = db.user.findFirst as jest.MockedFunction<typeof db.user.findFirst>

// jest.mock("app/utils/getUser", () => ({
//   getUser: jest.fn(),
// }))
// const mockGetUser = getUser as jest.MockedFunction<typeof getUser>

describe("app/rpc/user/queries/getCurrentUser", () => {
  mockUserFindFirst.mockRejectedValue({
    id: 1,
    name: "User",
    email: "user@email.com",
    role: "user",
  })
  // mockGetUser.mockReturnValue({
  //   id: 2,
  //   name: "User",
  //   email: "user@email.com",
  //   role: "user",
  // })

  test("getCurrentUser", async () => {
    expect(await getCurrentUser(null, { session: { userId: 1 } } as any)).toEqual({
      email: "user@email.com",
      id: 1,
      name: "User",
      role: "user",
    })
  })
})
