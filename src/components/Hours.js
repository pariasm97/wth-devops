import React from 'react';

const Hours = () => {
  const getCurrentDayHours = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 is Sunday, 6 is Saturday
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    return isWeekend ? "9:00 AM - 8:00 PM" : "10:00 AM - 4:00 PM";
  };

  const getDayName = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Refugio Hours</h2>
      <p className="text-gray-600 mb-2">Today is {getDayName()}</p>
      <p className="text-gray-800 font-semibold">We are open: {getCurrentDayHours()}</p>
      <div className="mt-4 text-sm text-gray-600">
        <p>Monday - Friday: 10:00 AM - 4:00 PM</p>
        <p>Saturday - Sunday: 9:00 AM - 8:00 PM</p>
      </div>
    </div>
  );
};

export default Hours;
