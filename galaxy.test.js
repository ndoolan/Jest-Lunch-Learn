// // // ************************ Jest.fn() ************************
// import axios from "axios";
// import getStarWarsCharacter from "./getStarWarsCharacter";

// axios.get = jest.fn(() => mockResponse);

// describe("Get Stars Wars Character", () => {
//   it("it should return Luke Skywalker", async () => {
//     expect.assertions(3);
//     const mockResponse = {
//       data: {
//         name: "Luke Skywalker",
//         hair_color: "blond",
//         skin_color: "fair",
//       },
//     };
//     // Mock the axios.get method to return the mock response
//     axios.get.mockResolvedValue(mockResponse);

//     const character = await getStarWarsCharacter();
//     // const character = await getStarWarsCharacter();
//     // console.log({ character });
//     expect(character.name).toEqual("Luke Skywalker");
//     expect(character.hair_color).toEqual("blond");
//     expect(character.skin_color).toEqual("fair");
//   });
// });

// ******************** Test Using spyOn ********************
// import galaxy from "./galaxy";
// jest.spyOn(galaxy, "getStarWarsCharacter");

// // We can also mock the function in a spy
// galaxy.getStarWarsCharacter = jest.fn().mockImplementation(() => {
//   return {
//     name: "Luke Skywalker",
//     hair_color: "blond",
//   };
// });

// // Alternative syntax
// const getStarsWarSpy = jest.spyOn(galaxy, "getStarWarsCharacter");
// getStarsWarSpy.mock.mockImplementation(() => {
//     return {
//       name: "Luke Skywalker",
//       hair_color: "blond",
//     };
//   })

// describe("Get Stars Wars Character", () => {
//   it("the character should not be Luke Skywalker if passed in id !== 1", async () => {
//     const character = await galaxy.getStarWarsCharacter(1);
//     console.log({ character });
//     expect(galaxy.getStarWarsCharacter).toHaveBeenCalled();
//     // console.log({ character });
//     expect(character.name).not.toEqual("Luke Skywalker");
//     expect(character.hair_color).not.toEqual("blond");
//   });
// });

// ******************** Test Using .mock ********************

import axios from "axios";
import getStarWarsCharacter from "./getStarWarsCharacter";

jest.mock("axios");

describe("Get Stars Wars Character", () => {
  it("it should return Luke Skywalker", async () => {
    const mockResponse = {
      data: {
        name: "Luke Skywalker",
        hair_color: "blond",
        skin_color: "fair",
      },
    };
    // What does a mocked axios look like?
    console.log("Mocked Axios", axios);

    // Mock Axios with resolved val
    axios.get.mockResolvedValue(mockResponse);

    const character = await getStarWarsCharacter();

    // Check if axios.get was called
    expect(axios.get).toHaveBeenCalledTimes(1);

    // Assert the returned data
    expect(character.name).toEqual("Luke Skywalker");
    expect(character.hair_color).toEqual("blond");
  });
});
