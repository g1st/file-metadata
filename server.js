const express = require('express');
const multer = require('multer');
const upload = multer();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/size', upload.single('avatar'), function (req, res) {
  if (req.file) {
    res.json({
      size: req.file.size
    });
  }
  else {
    res.status(400).send('Bad Request');
  }
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
