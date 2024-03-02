export interface UserCredentials {
  username: string;
  password: string;
}
export interface UserInfo {
  username: string;
  name: string;
  email: string;
}

export const testuser: UserCredentials = {
  username: "testuser",
  password: "testpassword",
};

export const testUserInfo: UserInfo = {
  username: "testuser",
  name: "Test User",
  email: "sh2575@cornell.edu",
};

export const userCredentialTable: Record<string, UserCredentials> = {
  testuser: testuser,
};

export const userInfoTable: Record<string, UserInfo> = {
  testuser: testUserInfo,
};
