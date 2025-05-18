import express from 'express';
import { Router } from 'express';
import medicationController from "../controllers/medicationController.js"

const router= Router()

// Add medication route
router.post('/add', medicationController.addMedication);

// Get all medications for a user
router.get('/user/:id', medicationController.getUserMedications);

//Update all medications for a user
router.put('/user/:_id',medicationController.updateUserMedication);

//delete medications
router.delete('/user/:_id', medicationController.deleteUserMedication);

export default router;