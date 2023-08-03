const router = require("express").Router();
const Task = require("../models/Task");
const { requireAuth } = require("../middleware/requireAuth");
const {
  CustomError,
  getNameMessage,
  KeyError,
  ReqBodyError,
} = require("../utilities/errorHandling");

//** Validate user permission on task */
// Find task, compare userId to task.authorId
// If found && valid, rtns task
// If found but not valid, throws error
// If not found, rtns null
async function taskUserValid(userId, taskId) {
  try {
    const task = await Task.findById(taskId);

    //Check for task found
    if (task) {
      // Compare authorId vs userId
      if (task.authorId === userId) {
        // Valid
        return task;
      } else {
        // Task found but not valid
        throw new CustomError("_AuthError", "User not authorised");
      }
    } else {
      // Task not found
      return null;
    }
  } catch (err) {
    throw err;
  }
}

//** NEW TASK */
//? text, completed?, dueDate?
// Receives userId from requireAuth as res.locals.userId
router.post("/new", requireAuth, async (req, res) => {
  //Catch missing fields
  if (!req.body.text) {
    res.status(400).json(ReqBodyError(req.body));
    return;
  }

  const newTask = new Task({
    text: req.body.text,
    authorId: res.locals.userId,
    dueDate: req.body.dueDate,
  });

  try {
    const task = await newTask.save();
    res.status(200).json(task);
  } catch (err) {
    console.error("New task error:", err);
    res.status(500).json(getNameMessage(err));
  }
});

//** GET ALL TASKS */
//? none
// Receives userId (String) from requireAuth as res.locals.userId
router.get("/", requireAuth, async (req, res) => {
  try {
    //Find tasks
    const tasks = await Task.find({ authorId: res.locals.userId });
    if (!tasks) {
      console.log("No tasks found", tasks);
      res.status(200).json([]);
      return;
    }
    res.status(200).json(tasks);
  } catch (err) {
    console.log("/api/tasks/ get tasks error", err);
    res.status(500).json(getNameMessage(err));
  }
});

//** GET SINGLE TASK BY ID */
//? taskId as param
// Receives userId from requireAuth as res.locals.userId
router.get("/single/:id", requireAuth, async (req, res) => {
  try {
    // Get task using Validate Fn, throws err if authorId != userId
    const task = await taskUserValid(res.locals.userId, req.params.id);

    // Catch no task response
    if (!task) {
      res.status(400).json(KeyError(req.params.id));
      return;
    }

    // Otherwise return task
    res.status(200).json(task);
  } catch (err) {
    console.log("api/tasks/:id get single err", err);
    res.status(500).json(getNameMessage(err));
  }
});

//** UPDATE TASK BY ID */
//? taskId
// Receives userId from requireAuth as res.locals.userId
router.post("/update/:id", requireAuth, async (req, res) => {
  // Catch missing body
  if (!Object.keys(req.body).length) {
    res.status(400).json(ReqBodyError(req.body));
    return;
  }
  try {
    //Validate userId == authorId: rtns null if not found, throws err if invalid
    const task = await taskUserValid(res.locals.userId, req.params.id);

    if (!task) {
      res.status(400).json(KeyError(req.params.id));
      return;
    }

    const updateTask = await Task.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Task updated");
  } catch (err) {
    console.log("api/tasks/ update by ID error", err);
    res.status(500).json(getNameMessage(err));
  }
});

//** DELETE TASK BY ID */
//? taskId
// Receives userId from requireAuth as res.locals.userId
router.get("/delete/:id", requireAuth, async (req, res) => {
  try {
    // Validate userId == authorId, rtns null if not found, throws err if invalid
    const task = await taskUserValid(res.locals.userId, req.params.id);

    if (!task) {
      res.status(400).json(KeyError(req.params.id));
      return;
    }

    const deleteRes = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json("Task deleted");
  } catch (err) {
    console.log("/api/tasks delete error", err);
    res.status(500).json(getNameMessage(err));
  }
});

//** VERIFY TASK COUNT */
router.get("/verify", requireAuth, async (req, res) => {
  try {
    // Get all tasks
    const allTasks = await Task.find({ authorId: res.locals.userId });

    // Count all, complete & incomplete
    const allCount = allTasks.length;
    console.log("All", allCount);
    const completeCount = allTasks.reduce((count, task) => {
      if (task.completed) {
        return count + 1;
      } else {
        return count;
      }
    }, 0);
    console.log("complete", completeCount);
    const incompleteCount = allTasks.reduce((count, task) => {
      if (!task.completed) {
        return count + 1;
      } else {
        return count;
      }
    }, 0);
    console.log("incomplete", incompleteCount);

    res.status(200).json({ allCount, completeCount, incompleteCount });
  } catch (err) {
    console.log("/api/tasks/ verify tasks error", err);
    res.status(500).json(getNameMessage(err));
  }
});

module.exports = router;
