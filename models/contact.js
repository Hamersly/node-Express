const mongoose = require('mongoose');
const Scema = mongoose.Schema;

const contactScema = new Scema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model('Contact', contactScema)

module.exports = Contact;