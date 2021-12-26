//routes for users -> register user, login user, google oauth, get profile

import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const google = require('googleapis').google
const OAuth2 = google.auth.OAuth2
const CONFIG = require('../config.cjs')

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.get('/auth/google', (req, res) => {
    const loginLink = new OAuth2(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]).generateAuthUrl({
        access_type: 'offline',
        scope: CONFIG.oauth2Credentials.scopes
    });
    return res.json({ loginLink });
})

export default router