import express from 'express';
import Doctor from '../models/doctor.js';

const router = express.Router();
router.use(express.json());

router.post('/fetchdoctor', (req, res) => {
    const data = req.body;
    Doctor.findOne({ name: data.name })
        .exec()
        .then(existingDoctor => {
            if (existingDoctor) {
                console.log('Doctor found in the database:', existingDoctor);
                return res.json(existingDoctor);
            } else {
                return res.status(404).json({ message: 'Doctor not found' });
            }

        })
        .catch(err => {
            console.error('Error while fetching data from the database:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
});

export default router;