const express = require("express");
const router = express.Router();
const { Comment } = require("../models");
const { authenticateUser } = require("../middleware/auth");

// retrieve all comments for a specific post
router.get("/posts/:id/comments", authenticateUser, async (req, res) => {
  const postId = parseInt(req.params.id, 10);

  try {
    const post = await Post.findOne({ where: { id: postId } });

    if (post) {
      //got the post
      try {
        const allComments = await Comment.findAll();

        res.status(200).json(allComments);
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: err.message });
      }
    } else {
      res.status(404).send({ message: "Post not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// retrieve a specific comment by id
router.get("/comments/:id", authenticateUser, async (req, res) => {
  const commentId = parseInt(req.params.id, 10);

  try {
    const comment = await Comment.findOne({ where: { id: commentId } });

    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).send({ message: "Comment not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// add a new comment to a post
router.post("/comments", authenticateUser, async (req, res) => {
  try {
    // create new comment
    const newComment = await Comment.create(req.body);

    res.status(201).json(newComment);
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// update a comment
router.patch("/comments/:id", authenticateUser, async (req, res) => {
  const commentId = parseInt(req.params.id, 10);

  try {
    const record = await Comment.findOne({ where: { id: commentId } });
    if (record && record.UserId !== parseInt(req.session.userId, 10)) {
      return res
        .status(403)
        .json({ message: "You are not authorized to perform that action." });
    }
    const [numberOfAffectedRows, affectedRows] = await Comment.update(
      req.body,
      {
        where: { id: commentId },
        returning: true,
      }
    );

    if (numberOfAffectedRows > 0) {
      res.status(200).json(affectedRows[0]);
    } else {
      res.status(404).send({ message: "Comment not found" });
    }
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// delete a comment from a post
router.delete("/comments/:id", authenticateUser, async (req, res) => {
  const commentId = parseInt(req.params.id, 10);

  try {
    const record = await Comment.findOne({ where: { id: commentId } });
    if (record && record.UserId !== parseInt(req.session.userId, 10)) {
      return res
        .status(403)
        .json({ message: "You are not authorized to perform that action." });
    }
    const deleteOp = await Comment.destroy({ where: { id: commentId } });

    if (deleteOp > 0) {
      res.status(200).send({ message: "Comment deleted successfully" });
    } else {
      res.status(404).send({ message: "Comment not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
