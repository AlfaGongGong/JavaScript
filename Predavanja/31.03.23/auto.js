const person = {
    name: "Saša",
    surname: "Bogdanović",
    age: 33,
    eyeColor: "brown",
    cars: [
      {
        marka: "Ford",
        models: ["Fiesta", "Focus", "Mustang"]
      },
      {
        marka: "Ferarri",
        models: ["Spider 1", "Spider 2", "Spider 3"]
      },
      {
        marka : "BMW",
        models : ["320", "X3", "X5"]
      },
      {
        marka: "Mazda",
        models : ["MS", "RX7", "RX5"]
      }

    ]
  };
  let cars = person.cars;

  function showCars() {
    for (let i in cars) {
      let carsNameField = cars[i];
      if (cars[i] === "object") {
        
      }
      console.log(carsNameField);
    }
  }
 