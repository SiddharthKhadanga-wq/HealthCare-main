import Refill from '../models/refill.js';


const addRefill = async (req, res) => {
    const { user_id, medicine_name, quantity } = req.body;
    try {
        // Create a new refill document
        const newRefill = new Refill({
            user_id,
            medicine_name,
            quantity
        });
        //Saving the document to the database
        await newRefill.save();
        res.status(201).json({ message: 'Refill added successfully', data: newRefill });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add refill', error: error.message });
    }
};

const deleteRefill = async (req, res) => {
    const { id } = req.params;
    try {
        // Find the refill by ID and remove it
        const deletedRefill = await Refill.findByIdAndDelete(id);

        if (!deletedRefill) {
            return res.status(404).json({ message: 'Refill not found' });
        }

        res.status(200).json({ message: 'Refill deleted successfully', data: deletedRefill });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete refill', error: error.message });
    }
};

const updateRefill = async (req, res) => {
    const { id } = req.params;
    const { medicine_name, quantity } = req.body;

    try {
        // Find the refill by ID and update its values
        const updatedRefill = await Refill.findByIdAndUpdate(
            id,
            { medicine_name, quantity },
            { new: true } // Return the updated document
        );

        if (!updatedRefill) {
            return res.status(404).json({ message: 'Refill not found' });
        }

        res.status(200).json({ message: 'Refill updated successfully', data: updatedRefill });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update refill', error: error.message });
    }
};

const getRefills = async (req, res) => {
    const { user_id } = req.params;

    try {
        // Find all refills for the user
        const refills = await Refill.find({ user_id });

        if (!refills || refills.length === 0) {
            return res.status(404).json({ message: 'No refills found for this user' });
        }

        res.status(200).json({ message: 'Refills fetched successfully', data: refills });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch refills', error: error.message });
    }
};

export default {addRefill,getRefills,updateRefill,deleteRefill};