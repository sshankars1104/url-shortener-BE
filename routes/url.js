const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const shortid = require('shortid');

// Shorten a URL
router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  try {
    const shortId = shortid.generate();
    const newUrl = new Url({
      originalUrl,
      shortUrl: shortId,
      clickCount: 0,
    });

    await newUrl.save();
    res.json({ shortUrl: shortId });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Redirect to the original URL
router.get('/:shortUrl', async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });

    if (url) {
      url.clickCount++;
      await url.save();
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json('No URL found');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


module.exports = router;
