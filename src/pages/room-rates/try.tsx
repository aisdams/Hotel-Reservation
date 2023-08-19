import React, { useState } from 'react';
import DeluxeRoom from '../../../public/img/deluxe-room.jpg';
import StandarRoom from '../../../public/img/standard-room.jpg';
import RoomSuite from '../../../public/img/suite-room.jpg';

// Definisikan tipe data Room
type Room = {
  id: number;
  type: string;
  price: string;
  description: string;
  facilities: string[];
  rating: number;
  reviews: { id: number; rating: number; comment: string }[];
  image: string;
};

const rooms: Room[] = [
  {
    id: 1,
    type: 'Deluxe Room',
    price: '$150',
    description: 'Luxurious room with a king-size bed.',
    facilities: ['Air Conditioning', 'TV', 'Mini Bar'],
    rating: 4.5,
    reviews: [
      { id: 1, rating: 5, comment: 'Excellent room!' },
      { id: 2, rating: 4, comment: 'Great stay, would recommend.' },
    ],
    image: DeluxeRoom.src,
  },
  {
    id: 2,
    type: 'Standar Room',
    price: '$150',
    description: 'Cozy room with a queen-size bed.',
    facilities: ['Air Conditioning', 'TV', 'Mini Bar'],
    rating: 4.5,
    reviews: [
      { id: 1, rating: 5, comment: 'Excellent room!' },
      { id: 2, rating: 4, comment: 'Great stay, would recommend.' },
    ],
    image: StandarRoom.src,
  },
  {
    id: 3,
    type: 'Suite Room',
    price: '$150',
    description: 'Spacious suite with a separate living area.',
    facilities: ['Air Conditioning', 'TV', 'Mini Bar'],
    rating: 4.5,
    reviews: [
      { id: 1, rating: 5, comment: 'Excellent room!' },
      { id: 2, rating: 4, comment: 'Great stay, would recommend.' },
    ],
    image: RoomSuite.src,
  },
];

export default function RoomRates() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleRoomClick = (room: Room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="mx-4 mt-10">
      <h1 className="mb-4 text-2xl font-semibold">Room & Rates</h1>
      <div className="flex gap-10">
        {/* Tampilan Daftar Kamar */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Tampilan Daftar Kamar</h2>
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`p-2 cursor-pointer ${
                selectedRoom?.id === room.id ? 'bg-transparent' : ''
              }`}
              onClick={() => handleRoomClick(room)}
            >
              <img
                src={room.image}
                alt={room.type}
                className="w-[300px] h-auto rounded"
              />
              <h3 className="text-md font-semibold mt-2">{room.type}</h3>
              <p className="text-gray-500">{room.price} / night</p>
              <p className="text-sm mt-1">{room.description}</p>
            </div>
          ))}
        </div>
        {/* Detail Kamar */}
        {selectedRoom && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Detail Kamar</h2>
            <h3 className="text-xl font-semibold">{selectedRoom.type}</h3>
            <p className="text-gray-500">{selectedRoom.price} / night</p>
            <p className="mt-2">{selectedRoom.description}</p>
            <h4 className="text-md font-semibold mt-4">Fasilitas</h4>
            <ul className="list-disc ml-6">
              {selectedRoom.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
            <div className="mt-4">
              {/* Sistem Bintang */}
              <h4 className="text-md font-semibold">Penilaian</h4>
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl">
                  {selectedRoom.rating.toFixed(1)}
                </span>
                <span className="ml-2 text-gray-500">
                  ({selectedRoom.reviews.length} ulasan)
                </span>
              </div>
              {/* Ulasan Tamu */}
              <div className="mt-4">
                <h4 className="text-md font-semibold">Ulasan Tamu</h4>
                {selectedRoom.reviews.map((review) => (
                  <div key={review.id} className="mt-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-lg">
                        {review.rating} ★
                      </span>
                      <p className="ml-2">{review.comment}</p>
                    </div>
                  </div>
                ))}
                {/* Filter Penilaian */}
                <div className="mt-4">
                  <h4 className="text-md font-semibold">Filter Penilaian</h4>
                  {/* Tambahkan opsi filter di sini */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
