exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("families")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("families").insert([
        { name: "Smith" },
        { name: "Jones" },
        { name: "O'Reilly" },
      ]);
    });
};
