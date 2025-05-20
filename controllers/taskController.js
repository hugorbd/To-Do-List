const Task = require("../models/Task");

// Criar nova tarefa
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar tarefas
exports.getTasks = async (_req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar tarefa
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: "Tarefa deletada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};