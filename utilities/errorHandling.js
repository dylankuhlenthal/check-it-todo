class CustomError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
  }
}

function getNameMessage(errorObject) {
  if (!errorObject?.name | !errorObject?.message) {
    return null;
  } else {
    return { name: errorObject.name, message: errorObject.message };
  }
}

function KeyError(id) {
  return {
    name: "_KeyError",
    message: `🤷🏼‍♂️ No task found at ${id}`,
  };
}

function ReqBodyError(body) {
  return {
    name: "_ReqBodyError",
    message: `👀 Missing or no body provided. Provided body: ${body}`,
  };
}

function AuthError() {
  return {
    name: "_AuthError",
    message: `🔒 User not authorised`,
  };
}

function SignInError() {
  return {
    name: "_SignInError",
    message: `🔑 Email or password incorrect`,
  };
}

function DuplicateKeyError(key) {
  return {
    name: "_DuplicateKeyError",
    message: `${key} already registered`,
  };
}

module.exports = {
  CustomError,
  getNameMessage,
  KeyError,
  ReqBodyError,
  AuthError,
  SignInError,
  DuplicateKeyError,
};
