import { makeVar, useReactiveVar } from '@apollo/client';

import { User } from '@/models/User';

const userInitialValue = {
  id: '',
  firstName: null,
  lastName: '',
  userName: '',
};

const loginFormVarFn = makeVar(userInitialValue);

const useLoginFormVar = () => {
  return useReactiveVar(loginFormVarFn);
};

export const loginFormVar = {
  set: (p: User) => loginFormVarFn(p),
  get: () => loginFormVarFn(),
  reset: () => loginFormVarFn(userInitialValue),
  use: useLoginFormVar,
};
