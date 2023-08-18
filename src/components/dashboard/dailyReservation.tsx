import React from 'react';
import { LuAlertCircle } from 'react-icons/lu';
import { BiRightArrowCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function DailyReservation() {
  return (
    <div className="mt-[10rem] mx-10 absolute">
      <div className="grid grid-cols-[3fr_1fr] gap-5">
        <div
          className="relative py-4 px-10"
          style={{
            boxShadow: '10px 14px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="flex justify-between">
            <div className="flex items-start gap-3">
              <h1 className="uppercase font-semibold text-lg">
                Today Reservations
              </h1>
              <LuAlertCircle className="my-2" />
            </div>
            <div className="flex gap-2 items-center">
              <h2 className="text-base">Reservations Report</h2>
              <BiRightArrowCircle className="text-2xl" />
            </div>
          </div>
          <div className="flex justify-between text-center gap-3">
            <div className="mt-7">
              <h1>12</h1>
              <p className="mt-2">Arrival</p>
            </div>
            <div className="mt-7">
              <h1>4</h1>
              <p className="mt-2">Departures</p>
            </div>
            <div className="mt-7">
              <h1>1</h1>
              <p className="mt-2">Booking</p>
            </div>
            <div className="mt-7">
              <h1>0</h1>
              <p className="mt-2">Stay overs</p>
            </div>
            <div className="mt-7">
              <h1>0</h1>
              <p className="mt-2">Cancellation</p>
            </div>
          </div>
        </div>

        <div
          className="card py-3 w-[20rem] h-[9rem]"
          style={{
            position: 'relative',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            className="svg-background"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1, // Add zIndex here
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="320" cy="30" r="90" fill="#041649" />
              <circle cx="300" cy="180" r="110" fill="#3b82f6" opacity="0.3" />
            </svg>
          </div>
          <div
            className="card-content relative"
            style={{
              paddingLeft: '20px',
              zIndex: 1, // Add zIndex here
            }}
          >
            <h2 className="font-semibold text-lg">Help and Learning Centre</h2>
            <p className="mt-1 text-justify w-[80%]">
              24/7 access to all the learning training resource, video, and
              tours in one easy place. Learn more.
            </p>
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-300 py-1 px-2 -mt-1 absolute right-0"
            >
              Learn More <BiRightArrowCircle className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[3fr_1fr] gap-5 mt-[3rem]">
        <div
          className="relative py-4 px-10"
          style={{
            boxShadow: '10px 14px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="flex justify-between">
            <div className="flex items-start gap-3">
              <h1 className="uppercase font-semibold text-lg">
                Available Room Types
              </h1>
              <LuAlertCircle className="my-2" />
            </div>
            <div className="flex gap-2 items-center">
              <h2 className="text-base">Inventory</h2>
              <BiRightArrowCircle className="text-2xl" />
            </div>
          </div>
          <div className="flex justify-between text-center gap-3">
            <div className="mt-7">
              <h1 className="text-lg">TODAY</h1>
              <p>18 Nov</p>
              <h3 className="mt-3 text-xl">6</h3>
            </div>

            <div className="mt-7">
              <h1 className="text-lg">TUE</h1>
              <p>18 Nov</p>
              <h3 className="mt-3 text-xl">6</h3>
            </div>

            <div className="mt-7">
              <h1 className="text-lg">WED</h1>
              <p>18 Nov</p>
              <h3 className="mt-3 text-xl">6</h3>
            </div>

            <div className="mt-7">
              <h1 className="text-lg">THU</h1>
              <p>18 Nov</p>
              <h3 className="mt-3 text-xl">6</h3>
            </div>

            <div className="mt-7">
              <h1 className="text-lg">FRI</h1>
              <p>18 Nov</p>
              <h3 className="mt-3 text-xl">6</h3>
            </div>

            <div className="mt-7">
              <h1 className="text-lg">SAT</h1>
              <p>18 Nov</p>
              <h3 className="mt-3 text-xl">6</h3>
            </div>
            <div className="mt-7">
              <h1 className="text-lg">SUN</h1>
              <p>18 Nov</p>
              <h3 className="mt-3 text-xl">6</h3>
            </div>
            <div className="mt-7">
              <h1 className="text-lg">MON</h1>
              <p>18 Nov</p>
              <h3 className="mt-3 text-xl">6</h3>
            </div>
            <div className="mt-7">
              <h1 className="text-lg">TUE</h1>
              <p>18 Nov</p>
              <h3 className="mt-3 text-xl">6</h3>
            </div>
            <div className="mt-7">
              <h1 className="text-lg">WED</h1>
              <p>18 Nov</p>
              <h3 className="mt-3 text-xl">6</h3>
            </div>
          </div>
        </div>

        <div
          className="card px-3"
          style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)' }}
        >
          <div className="flex justify-between">
            <h2 className="font-semibold text-lg flex gap-3 items-center">
              Property Status
              <span>
                <LuAlertCircle />
              </span>
            </h2>

            <div className="pr-7">
              <AiOutlineCheckCircle className="text-2xl text-green-500" />
            </div>
          </div>

          <div className="mt-5">
            <ul>
              <li className="grid grid-cols-[5fr_1fr] gap-3 items-center">
                Reservation delivery Feature Today
                <span
                  className="bg-black/20 text-lg rounded-full w-[2rem] text-center"
                  style={{ backdropFilter: 'blur(20px)' }}
                >
                  0
                </span>
              </li>

              <li className="grid grid-cols-[5fr_1fr] gap-3 items-center">
                Channels experiencing delayed updates
                <span
                  className="bg-black/20 text-lg rounded-full w-[2rem] text-center"
                  style={{ backdropFilter: 'blur(20px)' }}
                >
                  0
                </span>
              </li>

              <li className="grid grid-cols-[5fr_1fr] gap-3 items-center">
                Disable channels
                <span
                  className="bg-black/20 text-lg rounded-full w-[2rem] text-center"
                  style={{ backdropFilter: 'blur(20px)' }}
                >
                  0
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-[3rem]">
        <div style={{ boxShadow: '10px 14px 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="flex items-start gap-3">
            <h1 className="uppercase font-semibold text-lg">Pace Summary</h1>
            <LuAlertCircle className="my-2" />
          </div>
          <p>Last 7 Days</p>

          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
