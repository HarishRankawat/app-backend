const express = require('express');
const AppLink = require('../models/AppLink'); // Import the AppLink model
const router = express.Router();

// Create a new app link
router.post('/add', async (req, res) => {
  const { name, link, platform } = req.body;

  try {
    const appLink = new AppLink({ name, link, platform });
    await appLink.save();
    res.status(201).json({ message: 'App link added successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error adding app link', error });
  }
});

// Get all app links
router.get('/', async (req, res) => {
  try {
    const appLinks = await AppLink.find();
    res.status(200).json(appLinks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving app links', error });
  }
});

// Get a specific app link by ID
router.get('/:id', async (req, res) => {
  try {
    const appLink = await AppLink.findById(req.params.id);
    if (!appLink) {
      return res.status(404).json({ message: 'App link not found' });
    }
    res.status(200).json(appLink);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving app link', error });
  }
});

// Update an app link
router.put('/:id', async (req, res) => {
  const { name, link, platform } = req.body;

  try {
    const appLink = await AppLink.findByIdAndUpdate(
      req.params.id,
      { name, link, platform },
      { new: true }
    );
    if (!appLink) {
      return res.status(404).json({ message: 'App link not found' });
    }
    res.status(200).json(appLink);
  } catch (error) {
    res.status(500).json({ message: 'Error updating app link', error });
  }
});

// Delete an app link
router.delete('/:id', async (req, res) => {
  try {
    const appLink = await AppLink.findByIdAndDelete(req.params.id);
    if (!appLink) {
      return res.status(404).json({ message: 'App link not found' });
    }
    res.status(200).json({ message: 'App link deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting app link', error });
  }
});

module.exports = router;
