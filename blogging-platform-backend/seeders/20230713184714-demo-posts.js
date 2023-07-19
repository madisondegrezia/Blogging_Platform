"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Madison",
          email: "madison@madison.com",
          password: await bcrypt.hash("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    const users = await queryInterface.sequelize.query(`SELECT id FROM users`);

    const userId = users[0][0].id;

    await queryInterface.bulkInsert(
      "posts",
      [
        {
          title: "Massive Tech Layoffs",
          content:
            "Following the pandemic, more than 93,000 jobs were slashed from public and private tech companies in the U.S.",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: userId,
        },
      ],
      {}
    );

    const posts = await queryInterface.sequelize.query(`SELECT id FROM posts`);

    const postId = posts[0][0].id;

    await queryInterface.bulkInsert(
      "comments",
      [
        {
          message: "The tech layoffs have affected a lot of people.",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: userId,
          PostId: postId,
        },
        {
          message: "The tech layoffs are insane!",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: userId,
          PostId: postId,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("comments", null, {});
  },
};
