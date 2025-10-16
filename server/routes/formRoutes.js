const express = require('express');
const router = express.Router();
const { generateAIGuide, sendGuideEmail } = require('../services/guideService');

// Submit form and generate AI guide
router.post('/submit-form', async (req, res) => {
  try {
    const { firstName, lastName, email, businessDescription } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !businessDescription) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: firstName, lastName, email, businessDescription'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    console.log(`📝 Processing form submission for ${firstName} ${lastName} (${email})`);

    // Generate AI guide based on business description
    const guide = generateAIGuide({
      firstName,
      lastName,
      email,
      businessDescription
    });

    // Send email with the guide
    await sendGuideEmail({
      firstName,
      lastName,
      email,
      guide
    });

    console.log(`✅ Guide sent successfully to ${email}`);

    res.status(200).json({
      success: true,
      message: 'AI Agent guide has been generated and sent to your email!',
      data: {
        recipient: `${firstName} ${lastName}`,
        email: email,
        guideTitle: guide.title
      }
    });

  } catch (error) {
    console.error('❌ Error processing form submission:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process your request. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;