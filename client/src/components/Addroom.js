import axios from "axios";
import React, { useState, useEffect } from "react";

function Addroom() {
  const [room, setroom] = useState("");
  const [rentperday, setrentperday] = useState();
  const [maxcount, setmaxcount] = useState();
  const [description, setdescription] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [type, settype] = useState("");
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");
  const [image3, setimage3] = useState("");

  async function addRoom(e) {
    e.preventDefault()
    console.log("click")
    const roomobj = {
      room,
      rentperday, maxcount, description, phonenumber, type, image1, image2, image3
    }
    try {
      const result = await axios.post('/api/rooms/addroom', roomobj)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="row" onSubmit={(e) => addRoom(e)}>
      
      <div className="col-md-5">
        <input
          type="text"
          className="form-control mt-1"
          placeholder="name"
          value={room}
          onChange={(e) => {
            setroom(e.target.value);
          }}
          required
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="rentperday"
          value={rentperday}
          onChange={(e) => {
            setrentperday(e.target.value);
          }}
          required
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="maxcount"
          value={maxcount}
          onChange={(e) => {
            setmaxcount(e.target.value);
          }}
          required
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          required
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="phonenumber"
          value={phonenumber}
          onChange={(e) => {
            setphonenumber(e.target.value);
          }}
          required
        />

      </div>

      <div className="col-md-6">
        <input
          type="text"
          className="form-control mt-1"
          placeholder="type"
          value={type}
          onChange={(e) => {
            settype(e.target.value);
          }}
          required
        />
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Image url 1"
          value={image1}
          onChange={(e) => {
            setimage1(e.target.value);
          }}
          required
        />
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Image url 2"
          value={image2}
          onChange={(e) => {
            setimage2(e.target.value);
          }}
          required
        />
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Image url 3"
          value={image3}
          onChange={(e) => {
            setimage3(e.target.value);
          }}
          required
        />
        <div className='mt-1 text-right'>
          <button type="submit" className="btn btn-primary">ADD ROOM</button>
        </div>
      </div>

    </form>
  );
}

export default Addroom;
