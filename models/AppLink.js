const mongoose = require('mongoose');

const appLinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const AppLink = mongoose.model('AppLink', appLinkSchema);

module.exports = AppLink;
