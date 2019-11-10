// geterrors, clearerrors

export const getErrors = (errorMsg, status) => {
  return {
    type: 'GET_ERRORS',
    payload: {
      errorMsg,
      status
    }
  };
};

export const clearErrors = () => {
  return {
    type: 'CLEAR_ERRORS'
  };
};
