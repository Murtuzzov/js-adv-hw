const baseURL = "https://api.thecatapi.com/v1/breeds";
axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["x-api-key"] =
  "live_BckDD3scGppyB5jUosQYkSoSFHkLtsK8NLRvNZjIROReIc3ltL7Rk8O4kWnXSwHL";

const getBreeds = async () => {
  try {
    const response = await axios.get(baseURL);
    console.log("response", response.data);

    const selectBreeds = document.querySelector(".cat-breeds");
    const paragraph = document.querySelector(".cat-name");
    const catDescription = document.querySelector(".cat-description");

    response.data.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      selectBreeds.appendChild(option);
    });

    selectBreeds.addEventListener("change", function () {
      const selectedBreedId = selectBreeds.value;

      const selectedBreed = response.data.find(
        (breed) => breed.id === selectedBreedId
      );

      if (selectedBreed) {
        paragraph.textContent = selectedBreed.name;
      }

      if (selectedBreed.description) {
        catDescription.textContent = selectedBreed.description;
      }
    });
  } catch (error) {
    console.log("Error", error);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  getBreeds();
});
