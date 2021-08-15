var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleDateString('en-US'),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleDateString('en-US'),
  },
];

// Create Member
router.post('/form', (req, res) => {
  const newMessage = {
    ...req.body,
    added: new Date().toLocaleDateString('en-US'),
  };

  messages.push(newMessage);
  res.redirect('/');
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET home page. */
router.get('/form', function (req, res, next) {
  res.render('form', { title: 'Form' });
});

module.exports = router;
