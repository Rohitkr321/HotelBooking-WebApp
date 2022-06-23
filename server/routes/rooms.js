import express from 'express'
import { verifyAdmin } from '../utils/verifyToken.js';
import {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability
} from '../controllers/room.js';
const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);

//update
router.put("/:id", verifyAdmin, updateRoom)
router.put("/availability/:id", updateRoomAvailability);

//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

//GET
router.get("/:id", getRoom)

//GET All
router.get("/", getRooms)

export default router;