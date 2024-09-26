import axios from "axios";
// Function to fetch data from the Star Wars API
async function getStarWarsCharacter() {
  try {
    console.log("getStarWarsCharacter: run it has");
    const response = await axios.get(`https://swapi.dev/api/people/1/`);
    console.log("response", response);
    const { name, hair_color, skin_color } = response.data;
    const character = {
      name: name,
      hair_color: hair_color,
      skin_color: skin_color,
    };

    return character;
  } catch (error) {
    console.error("The force is not with you because...", error);
  }
}

export default getStarWarsCharacter;
