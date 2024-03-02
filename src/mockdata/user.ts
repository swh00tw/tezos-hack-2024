export interface UserCredentials {
  username: string;
  password: string;
}
export interface UserInfo {
  username: string;
  name: string;
  email: string;
  apt: string;
  unit: string;
  numResident: number;
  aptType: string;
}

export const testuser: UserCredentials = {
  username: "testuser",
  password: "testpassword",
};

export const testUserInfo: UserInfo = {
  username: "testuser",
  name: "Test User",
  email: "sh2575@cornell.edu",
  apt: "13",
  unit: "A",
  numResident: 2,
  aptType: "1 Bedroom 1 Bathroom",
};

export const userCredentialTable: Record<string, UserCredentials> = {
  testuser: testuser,
};

export const userInfoTable: Record<string, UserInfo> = {
  testuser: testUserInfo,
};
