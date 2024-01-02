const API = import.meta.env.VITE_API_KEY;

let parameter = {};

const fetchData = async (loadObj) => {
  if (loadObj.type === 'id') {
    parameter = `i=${loadObj.value}`;
  } else if (loadObj.type === 'search') {
    parameter = `s=${loadObj.value}`;
  } else if (loadObj.type === 'movie') {
    parameter = `t=${loadObj.value}`;
  }
  let res = await fetch(`https://www.omdbapi.com/?${parameter}&apikey=${API}`);
  let data = await res.json();
  return data;
};

export default fetchData;
