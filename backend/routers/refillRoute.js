import express from 'express';
import { Router } from 'express';
import refillController from '../controllers/refillController.js';

const router= Router()

// Add medication route
router.post('/add-refill', refillController.addRefill);

// Update medication route
router.put('/update-refill/:id', refillController.updateRefill);

// Update medication route
router.delete('/delete-refill/:id', refillController.deleteRefill);

// Update medication route
router.get('/refills/:user_id', refillController.getRefills);

export default router;