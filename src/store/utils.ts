type StandardAction = {
  error: string,
  success: string,
  request: string,
}

export const standardizeAction = (actionType: string) => {
  return <StandardAction>{
    error: `${actionType}_ERROR`,
    request:`${actionType}_REQUEST`,
    success: `${actionType}_SUCCESS`,
  }
};
