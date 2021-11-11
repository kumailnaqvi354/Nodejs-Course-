require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("617ff365d916d7c953b52e9f", { age: 2 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 2 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age });
  const count = User.count({ age });

  return count;
};

updateAgeAndCount("617ff365d916d7c953b52e9f", 6)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
