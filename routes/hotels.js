import express from 'express'
import {
    createHotel,
    deleteHotel,
    getHotel,
    getHotels,
    updateHotel
} from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
const router = express.Router();

//create
router.post("/", createHotel);

//update
router.put("/:id", updateHotel)

//Delete
router.delete("/:id", deleteHotel)

//GET
router.get("/:id", getHotel)

//GET All
router.get("/", getHotels)

export default router;