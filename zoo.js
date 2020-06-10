const zoo = `ant ant bat bat bat cat cat dog dog dog dog elephant`;

// let animals = {};
let names = zoo.match(/\w+/g);

// for (let i=0; i<names.length; i++) {
//     let type = names[i];
//     if (animals[type]) {
//       animals[type] += 1;
//     } else {
//       animals[type] = 1;
//     }
//   }

let animals = new Map();

for (let i=0; i<names.length; i++) {
  let type = names[i];
  let lasso = animals.get(type);
  if (animals.get(type)) {
    animals.set(type, lasso + 1);
  } else {
    animals.set(type, 1);
  }
}

console.log(animals);

//   let animals = new Map();
//   animals.set(type, 1);
//   let catch = animals.get(type);
// animals.set(type, catch + 1);
