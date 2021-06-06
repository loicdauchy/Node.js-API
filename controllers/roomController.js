import RoomModel from '../models/roomModel.js';

export const home = (_, res) => {
    res.send('Hello world')
}
export const getTest = (_, res) => {
    res.send({
        name: 'loic'
    })
}
export const postTest = (req, res) => {
    res.send(req.body)
}

export const addRoom = async (req, res) => {
    const room = new RoomModel(req.body)

    await room.save();
    res.send(room)
}

export const getRooms = async (_, res) => {
    const rooms = await RoomModel.find({});
    // const rooms = await RoomModel.find({name: 'suite 20'});
    res.send(rooms);
}

export const getRoom = async (req, res) => {
    const id = req.params.id;
    const room = await RoomModel.findById(id);
    res.send(room);
}

export const updateRoom = async (req, res) => {
    const id = req.params.id;
    const room = await RoomModel.findByIdAndUpdate(id, req.body);
    await room.save();

    const upRoom = await RoomModel.findById(id);
    res.send(upRoom);
}

export const deleteRoom = async (req, res) => {
    const id = req.params.id;
    const room = await RoomModel.findByIdAndDelete(id);
    if(!room){
        res.status(404).send('Room not found.')
    }
    res.status(200).send('OK');
}