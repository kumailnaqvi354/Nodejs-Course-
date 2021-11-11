require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findOneAndDelete({ _id: "617fbf4fe75faca724e370d3" })
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const result = await Task.findOneAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("617fc2126dce27a8be400cc3")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
