const express = require('express');
const router = express.Router();
const db = require('../db');

// GET kaikki opiskelijat
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Opiskelija');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST uusi opiskelija
router.post('/', async (req, res) => {
  const { nimi, sahkoposti } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Opiskelija (nimi, sahkoposti) VALUES (?, ?)',
      [nimi, sahkoposti]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT päivitys
router.put('/:id', async (req, res) => {
  const { nimi, sahkoposti } = req.body;
  const { id } = req.params;
  try {
    await db.query(
      'UPDATE Opiskelija SET nimi = ?, sahkoposti = ? WHERE opiskelija_id = ?',
      [nimi, sahkoposti, id]
    );
    res.json({ message: 'Opiskelija päivitetty' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM Opiskelija WHERE opiskelija_id = ?', [id]);
    res.json({ message: 'Opiskelija poistettu' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
