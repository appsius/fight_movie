const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '8e5c5dc5',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();
