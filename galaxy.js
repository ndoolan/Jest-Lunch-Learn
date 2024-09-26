import axios from "axios";
// Function to fetch data from the Star Wars API
const galaxy = {
  getStarWarsCharacter: async (id) => {
    try {
      console.log(
        "with spyOn ==> the force is with you and so is this function"
      );
      const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
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
  },
};

export default galaxy;
