const express = require('express');
const { Book } = require('../models');
const router = express.Router();


router.get('/', async (_req, res) => {
  const books = await Book.findAll();

  if (books.length === 0) return res.status(500).json({ message: 'Algo deu errado' });

  return res.status(200).json(books);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  if (!book) return res.status(500).json({ message: 'algo deu errado' });

  return res.status(200).json(book);
});

router.post('/', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  if (!title || !author || !pageQuantity) return res.status(500).json({ message: 'algo deu errado' });
  const result = await Book.create({ title, author, pageQuantity, createdAt: Date() });


  return res.status(201).json(result);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const [result] = await Book.update({ title, author, pageQuantity }, { where: { id }});
  
  if (!result) return res.status(500).json({ message: 'algo deu errado' });

  return res.status(200).json({ message: 'livro atualizado' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  
  const result = await Book.destroy({ where: { id }});

  if (!result) return res.status(500).json({ message: 'algo deu errado' });

  return res.status(200).json({ message: 'livro deletado' });
});

module.exports = router;