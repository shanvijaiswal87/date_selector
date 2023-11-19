import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './index.css';
// import GuestForm from './GuestForm';






function App() {
  
   

  
  
     const [activities, setActivities] = useState({
    zipLine: { checked: false, count: 4, slotTime: '4:00 PM' },
    paragliding: { checked: false, count: 4, slotTime: '6:00 PM' },
    cookingTour: { checked: false, count: 4, slotTime: '3:45 PM' },
  });

  const [giftExperience, setGiftExperience] = useState(false);
  const [personalMessage, setPersonalMessage] = useState('');

  const handleCheckboxChange = (activity) => {
    setActivities({
      ...activities,
      [activity]: {
        ...activities[activity],
        checked: !activities[activity].checked,
      },
    });
  };

  const handleCountIncrement = (activity) => {
    setActivities({
      ...activities,
      [activity]: {
        ...activities[activity],
        count: activities[activity].count + 1,
      },
    });
  };

  const handleCountDecrement = (activity) => {
    if (activities[activity].count > 0) {
      setActivities({
        ...activities,
        [activity]: {
          ...activities[activity],
          count: activities[activity].count - 1,
        },
      });
    }
  };

  const handleSlotTimeChange0 = (activity, newSlotTime) => {
    setActivities({
      ...activities,
      [activity]: {
        ...activities[activity],
        slotTime: newSlotTime,
      },
    });
  };

  const handleSlotTimeChange = (activity, newSlotTime) => {
    setActivities({
      ...activities,
      [activity]: {
        ...activities[activity],
        slotTime: newSlotTime,
      },
    });
  };

  const handleGiftExperienceChange = () => {
    setGiftExperience(!giftExperience);
  };

  const handlePersonalMessageChange = (e) => {
    setPersonalMessage(e.target.value);
  };

  return (
    <div class="mt-10 overflow-x-hidden ">
    <div class="flex justify-top items-top h-100 ml-16 mr-16">
  <div class="container mx-auto pl-4 border border-gray-30 rounded-lg">
    <div class="mb-4 ml-4">
      {/* <!-- Date Picker --> */}
      <div class="mb-4 mt-10 flex justify-center items-center" >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
      </div>


      <div class="mb-4 ml-12 font-bold text-lg">
        Activity Book
        </div>
      {/* <!-- Paragliding Section --> */}
      <div class="mb-4 ml-10 font-semibold">
        <input
          type="checkbox"
          checked={activities.paragliding.checked}
          onChange={() => handleCheckboxChange('paragliding')}
          class="mr-2"
        />
        <label class="inline-block font-semibold mr-80 pr-12 ">Paragliding {" "}</label>
        <button onClick={() => handleCountDecrement('paragliding')} class="mx-1 ml-80 border-2 rounded-md border-solid border-black-800 pl-1 pr-1  ">-</button>
        <span>{activities.paragliding.count}</span>
        <button onClick={() => handleCountIncrement('paragliding')} class="mx-1 border-2 rounded-md border-solid border-black-800 pl-1 pr-1 ">+</button>
        <select
          value={activities.paragliding.slotTime}
          onChange={(e) => handleSlotTimeChange('paragliding', e.target.value)}
          class="ml-10 font-semibold border-2 rounded-md border-solid border-black-800 pl-1 pr-1"
        >
          <option value="6:00 PM">6:00 PM</option>
          {/* Add other time options here */}
        </select>
      </div>

      {/* <!-- Zip Line Section --> */}
      <div class="mb-4 ml-10 font-semibold">
        <input
          type="checkbox"
          checked={activities.zipLine.checked}
          onChange={() => handleCheckboxChange('zipLine')}
          class="mr-2"
        />
        <label class="inline-block mr-80 pr-20">Zip line </label>
        <button onClick={() => handleCountDecrement('zipLine')} class="mx-1 ml-80 border-2 rounded-md border-solid border-black-800 pl-1 pr-1">-</button>
        <span>{activities.zipLine.count}</span>
        <button onClick={() => handleCountIncrement('zipLine')} class="mx-1 border-2 rounded-md border-solid border-black-800 pl-1 pr-1">+</button>
        <select
          value={activities.zipLine.slotTime}
          onChange={(e) => handleSlotTimeChange('zipLine', e.target.value)}
          class="ml-10 border-2 rounded-md border-solid border-black-800 pl-1 pr-1"
        >
          <option value="4:00 PM">4:00 PM</option>
          {/* Add other time options here */}
        </select>
        <select 
          value={activities.zipLine.slotTime}
          onChange={(e) => handleSlotTimeChange('zipLine', e.target.value)}
          class="ml-10 border-2 rounded-md border-solid border-black-800 pl-1 pr-1"
        >
          <option value="4:00 PM">4:00 PM</option>
          {/* Add other time options here */}
        </select>
      </div>

      {/* <!-- Cooking Tour Section --> */}
      <div class="mb-4 ml-10 font-semibold">
        <input
          type="checkbox"
          checked={activities.cookingTour.checked}
          onChange={() => handleCheckboxChange('cookingTour')}
          class="mr-2"
        />
        <label class="inline-block font-semibold mr-80 pr-8">Cooking Tour </label>
        <button onClick={() => handleCountDecrement('cookingTour')} class="mx-1 ml-80 border-2 rounded-md border-solid border-black-800 pl-1 pr-1">-</button>
        <span>{activities.cookingTour.count}</span>
        <button onClick={() => handleCountIncrement('cookingTour')} class="mx-1 border-2 rounded-md border-solid border-black-800 pl-1 pr-1">+</button>
        <select
          value={activities.cookingTour.slotTime}
          onChange={(e) => handleSlotTimeChange('cookingTour', e.target.value)}
          class="ml-10 border-2 rounded-md border-solid border-black-800 pl-1 pr-1"
        >
          <option value="3:45 PM">3:45 PM</option>
          
        </select>
      </div>
{/* 
      <!-- Gift Experience Section --> */}
      <div class="mb-4 ml-20 font-semibold">
        <input
          type="checkbox"
          checked={giftExperience}
          onChange={handleGiftExperienceChange}
          class="mr-2 mt-8"
        />
        <label class="inline-block">Gift this experience</label>
      </div>

      {/* <!-- Personal Message Section --> */}
      {giftExperience && (
        <div>
          <div class="mb-2 ml-20 font-semibold">Send your personal message</div>
          <textarea
            value={personalMessage}
            onChange={handlePersonalMessageChange}
            class="w-40 ml-20 p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
      )}
    </div>
  </div>
</div>
<div className="mt-4 ml-16 mr-16  ">
          
          <div className="w-full">
          <label className="text-xs font-semibold">Email*</label>
          <input type="email" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your email" />
        </div>
        <hr className="my-4 border" />
        <div className="mt-4 w-full">
          <label className="text-xs font-semibold">Contact Number*</label>
          <input type="tel" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="e.g. +91 9876543210" />
        </div>
        <hr className="my-4 border" />
        <div className="mt-4 w-full">
        
          <label className="text-xs font-semibold">Travelers</label>
          <p></p>
        </div>
        </div>
        {/* <GuestForm /> */}
        <hr className="my-4 border ml-16 mr-16 " />
      <div className="flex mt-4  ml-16 mr-16 ">
    <div className="mr-4 w-1/2">
      <label className="text-xs font-semibold">First Name*</label>
      <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your first name" />
    </div>
    <div className="w-1/2">
      <label className="text-xs font-semibold">Last Name*</label>
      <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Enter your last name" />
    </div>
  </div>
        <hr className="my-4 border  ml-16 mr-16 " />
        <p className="text-xs font-semibold  ml-16 mr-16 ">Date of Birth*</p>
          <div className="grid grid-cols-5 gap-4 ml-16 mr-16">
            {/* <div>
              <label className="text-xs font-semibold ml-16  ">Day</label>
              <select className=" mt-1 px-3 py-2 border rounded-md  ml-16 ">
                <option value=""></option>
              </select>
            </div>
            
            <div>
              <label className="text-xs font-semibold ">Month</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option value=""></option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold mr-16 ">Year</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md">
                <option value=""></option>
              </select>
            </div> */}
           <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
          </div>
        <hr className="my-4 border ml-16 mr-16" />
          <div className="bg-white rounded-xl p-4 ml-16 mr-16">
    <h2 className="text-xl font-semibold text-red-700">Travel Insurance</h2>
    <p className="text-xs">Secure your travel with just Rs 267 per traveler</p>
    <div className="flex items-center space-x-2 mt-4">
      <img src="" alt="Reactangle" className='w-24 h-24 images-booking' />
      <img src='' alt="Reactangle" className='w-24 h-24 images-booking' />
      <img src='' alt="Reactangle" className='w-24 h-24 images-booking' />
  </div>

    <div className="flex items-center justify-between mt-4">
      <div>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio text-blue-500 h-4 w-4" name="secureTrip" />
          <span className="ml-2">Yes, secure my trip</span>
        </label>
      </div>
      <div>
        <label className=" items-center">
          <input type="radio" className="form-radio text-blue-500 h-4 w-4" name="secureTrip" />
          <span className="ml-2">I am willing to risk my trip</span>
        </label>
      </div>
    </div>
    
  </div>
</div>


  );
}

export default App;


