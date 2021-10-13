export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const failureAPI = () => ({type: 'FAILED_REQUEST', payload: 'error'})

export function fetchAPI() {
  // const fetchCat = await fetch('https://aws.random.cat/meow')
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const giveCat = await fetch('https://aws.random.cat/meow');
      const json2Data = await giveCat.json();
      dispatch(getPicture(json2Data));
      
    } catch (error) {
      console.error(error);
    }
    
  }
  // Desenvolva aqui o código da action assíncrona
}
