// 1st challenge:Create a mock user json object.

// const users = [
//   {
//     id: "user-1",
//     name: "David Honk",
//     email: "david_honk@gmail.com",
//     password: "david1234",
//   },
//   {
//     id: "user-2",
//     name: "Jhon Mitchell ",
//     email: "jhon_mitchell@gmail.com",
//     password: "jhon1234",
//   },
//   {
//     id: "user-3",
//     name: "Arzin Carter",
//     email: "arzin_carter@gmail.com",
//     password: "arzin1234",
//   },
// ];

// users.forEach((char, idx) => {
//   console.log(
//     `Hello ${users[idx]["name"]}, your email is ${users[idx]["email"]}`
//   );
// });

// =========== 2st challenge:"promisfy" the xmlhttprequest function

const getStarWarsData = () => {
  const characterId = prompt(
    "Enter a Star Wars character ID (e.g., 1 for Luke Skywalker):"
  );

  return new Promise((resolve, reject) => {
    if (!characterId || isNaN(characterId)) {
      return reject("Invalid character ID. Please enter a number.");
    }

    const url = `https://swapi.tech/api/people/${characterId}`;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(`HTTP Error: ${xhr.status}`);
      }
    };

    xhr.onerror = () => reject("Network Error occurred.");
    xhr.ontimeout = () => reject("Request timed out.");
    xhr.send();
  });
};

const swapiPromise = getStarWarsData();

swapiPromise
  .then((data) => {
    console.log("Response:", data);
    alert("Data fetched successfully!check the consol.");
    return data.result.properties;
  })
  .then((character) => {
    console.log("Character Name:", character.name);
    alert(`The character's name is: ${character.name}`);
  })
  .catch((err) => {
    console.error("Error:", err);
    alert(`Something went wrong: ${err}`);
  });
