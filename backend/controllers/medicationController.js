import Medication from "../models/medication.js";
// Add medication function
const addMedication = async (req, res) => {
  const { name, medicationType, doseCount, doseTiming, reminderEnabled,userId,intakeTiming} = req.body;
  
  try {
    const newMedication = new Medication({
      name,
      medicationType,
      doseCount,
      doseTiming,
      reminderEnabled,
      userId,
      intakeTiming
    });

    await newMedication.save();
    res.status(201).json({ message: 'Medication added successfully', medication: newMedication });
  } catch (error) {
    res.status(500).json({ message: 'Error adding medication', error });
  }
};

// Get all medications for a user by id (Firebase)
const getUserMedications = async (req, res) => {
  const userId = req.params.id;

  try {
    const medications = await Medication.find({ userId });
    console.log(medications);
    res.status(200).json({ medications });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching medications', error });
  }
};

//Added Today
// Update a medication for user
const updateUserMedication = async (req, res) => {
  const medicationId = req.params._id; // Use req.params._id to get the medication ID
  const updates = req.body; // New data to update the medication with

  try {
    // Find the medication by ID and update it with the new data
    const updatedMedication = await Medication.findByIdAndUpdate(
      medicationId,
      updates,      
      { new: true, runValidators: true }
    );

    // If the medication was not found, return a 404 error
    if (!updatedMedication) {
      return res.status(404).json({ message: 'Medication not found' });
    }
    res.status(200).json({ message: 'Medication updated successfully', updatedMedication });
  } catch (error) {
    console.error('Error updating medication:', error);
    res.status(500).json({ message: 'Error updating medication', error });
  }
};

// Delete medication controller
const deleteUserMedication = async (req, res) => {
  const medicationId = req.params._id; // The ID of the medication to delete
  try {
    // Find the medication by ID and delete it
    const deletedMedication = await Medication.findByIdAndDelete(medicationId);

    // If the medication was not found, return a 404 error
    if (!deletedMedication) {
      return res.status(404).json({ message: 'Medication not found' });
    }

    // Return success message if deletion is successful
    res.status(200).json({ message: 'Medication deleted successfully' });
  } catch (error) {
    // Handle any errors that occur during the deletion
    console.error('Error deleting medication:', error);
    res.status(500).json({ message: 'Error deleting medication', error });
  }
};


export default { addMedication, getUserMedications, updateUserMedication, deleteUserMedication };
