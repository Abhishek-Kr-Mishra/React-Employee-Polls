const logger = (store) => (next) => (action) => {debugger
    console.group(action.type);
    const returnValue = next(action);
    console.groupEnd();
    return returnValue;
  };
  
  export default logger;