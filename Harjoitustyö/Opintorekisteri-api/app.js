const express = require('express');
const app = express();
const opiskelijaRoutes = require('./routes/opiskelija');

app.use(express.json());
app.use('/api/opiskelijat', opiskelijaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Palvelin käynnissä portissa ${PORT}`);
});
