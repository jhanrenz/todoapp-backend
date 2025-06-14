const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// 🟢 Custom-style routes
router.get('/', getAllTasks);         // GET    /api/tasks
router.post('/create', createTask);      // POST   /api/tasks/create
router.get('/view/:id', getTaskById);    // GET    /api/tasks/view/:id
router.put('/update/:id', updateTask);   // PUT    /api/tasks/update/:id
router.delete('/delete/:id', deleteTask);// DELETE /api/tasks/delete/:id

module.exports = router;
