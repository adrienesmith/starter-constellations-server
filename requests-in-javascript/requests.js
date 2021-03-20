const axios = require("axios");

const url = "http://localhost:5000/constellations";

axios.get(url).then((response) => {
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.data);
});

/*
axios   
    .get(url)
    .then((response) => {
        console.log(response.status);
        console.log(response.statusText);
        const lessThanTen = response.data.filter((constellation) => {
            if (constellation.starsWithPlanets < 10) return constellation;
        });
        console.log(lessThanTen);
    })
    .catch((error) => {
        console.log(error.message);
    });
*/
/*
axios
  .delete(url)
  .then((response) => {
    console.log(response.data);
  });
*/
