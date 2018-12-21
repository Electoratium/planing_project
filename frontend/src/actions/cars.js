export const car = car => {
  console.log(car);
  return {
    type: 'CAR_SELECTED',
    payload: car
  }
};
