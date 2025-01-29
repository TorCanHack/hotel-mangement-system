import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from 'react';

const SchedulingCalendar = () => {

  // Current date state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedView, setSelectedView] = useState('month');
  
  // Sample events/appointments data
  const [events] = useState([
    {
      id: 1,
      title: "Room 201 - Check-in",
      start: new Date(2025, 0, 29, 14, 0),
      end: new Date(2025, 0, 29, 15, 0),
      type: "reservation",
      status: "confirmed",
      guest: "John Smith"
    },
    {
      id: 2,
      title: "Spa Appointment",
      start: new Date(2025, 0, 29, 10, 0),
      end: new Date(2025, 0, 29, 11, 30),
      type: "appointment",
      status: "pending",
      guest: "Sarah Johnson"
    }
  ]);

  // Calendar navigation
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  // Get events for a specific day
  const getEventsForDay = (date) => {
    if (!date) return [];
    return events.filter(event => 
      event.start.getDate() === date.getDate() &&
      event.start.getMonth() === date.getMonth() &&
      event.start.getFullYear() === date.getFullYear()
    );
  };

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Get week days
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get current week
  const getCurrentWeek = () => {
    const current = new Date(currentDate);
    const week = [];
    current.setDate(current.getDate() - current.getDay());
    
    for (let i = 0; i < 7; i++) {
      week.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return week;
  };

  // Get hours for day view
  const getHours = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(i);
    }
    return hours;
  };

  const getEventStatus = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 bg-white">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Scheduling Calendar</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Plus className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-lg font-medium">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button 
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* View Selection */}
      <div value={selectedView} className="w-full mb-6 ">
        <div className=" flex flex-row justify-between items-center bg-gray-200 w-52 p-1  rounded-xl">
          <button
            value="month" 
            onClick={() => setSelectedView('month')}
            className={`w-20 cursor-pointer  ${selectedView === 'month' ? "bg-white rounded-lg" : "" }`}
          >
            Month
          </button>
          <button
            value="week" 
            onClick={() => setSelectedView('week')}
            className={`w-20 cursor-pointer  ${selectedView === 'week' ? "bg-white rounded-lg" : "" }`}
          >
            Week
          </button>
          <button
            value="day" 
            onClick={() => setSelectedView('day')}
            className={`w-20 cursor-pointer  ${selectedView === 'day' ? "bg-white rounded-lg" : "" }`}
          >
            Day
          </button>
        </div>

        {/* Month View */}
        { selectedView === "month" && <div value="month">
          <div>
            <div className="p-4">
              {/* Week days header */}
              <div className="grid grid-cols-7 mb-2">
                {weekDays.map(day => (
                  <div key={day} className="text-center font-medium text-gray-600">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentDate).map((date, index) => (
                  <div 
                    key={index}
                    className={`min-h-[100px] p-2 border rounded ${
                      date ? 'hover:bg-gray-50' : 'bg-gray-50'
                    }`}
                  >
                    {date && (
                      <>
                        <div className={`text-sm ${
                          date.getDate() === new Date().getDate() &&
                          date.getMonth() === new Date().getMonth() &&
                          date.getFullYear() === new Date().getFullYear()
                            ? 'bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center'
                            : ''
                        }`}>
                          {date.getDate()}
                        </div>
                        <div className="space-y-1 mt-1">
                          {getEventsForDay(date).map(event => (
                            <div 
                              key={event.id}
                              className={`text-xs p-1 rounded ${getEventStatus(event.status)}`}
                            >
                              {formatTime(event.start)} - {event.title}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>}

        {/* Week View */}
        {selectedView === "week" && <div value="week">
          <div>
            <div className="p-4">
              <div className="grid grid-cols-8 gap-1">
                {/* Time column */}
                <div className="border-r">
                  <div className="h-8"></div>
                  {getHours().map(hour => (
                    <div key={hour} className="h-20 text-sm text-gray-500 pr-2 text-right">
                      {hour}:00
                    </div>
                  ))}
                </div>
                
                {/* Days columns */}
                {getCurrentWeek().map(date => (
                  <div key={date.toISOString()} className="relative">
                    <div className="h-8 text-center text-sm font-medium">
                      {date.toLocaleDateString('default', { weekday: 'short' })}
                      <div className="text-gray-500">
                        {date.getDate()}
                      </div>
                    </div>
                    {getHours().map(hour => (
                      <div key={hour} className="h-20 border-t relative">
                        {getEventsForDay(date)
                          .filter(event => event.start.getHours() === hour)
                          .map(event => (
                            <div 
                              key={event.id}
                              className={`absolute w-full p-1 rounded ${getEventStatus(event.status)}`}
                              style={{
                                top: `${(event.start.getMinutes() / 60) * 100}%`,
                                height: `${((event.end - event.start) / (1000 * 60 * 60)) * 100}%`
                              }}
                            >
                              <div className="text-xs">
                                {event.title}
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>}

        {/* Day View */}
        {selectedView === "day" && <div value="day">
          <div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Timeline */}
                <div className="space-y-4">
                  {getHours().map(hour => (
                    <div key={hour} className="relative h-20 border-t">
                      <div className="absolute -top-3 text-sm text-gray-500">
                        {hour}:00
                      </div>
                      {getEventsForDay(currentDate)
                        .filter(event => event.start.getHours() === hour)
                        .map(event => (
                          <div 
                            key={event.id}
                            className={`absolute w-full p-2 rounded ${getEventStatus(event.status)}`}
                            style={{
                              top: `${(event.start.getMinutes() / 60) * 100}%`,
                              height: `${((event.end - event.start) / (1000 * 60 * 60)) * 100}%`
                            }}
                          >
                            <div className="font-medium">{event.title}</div>
                            <div className="text-sm">
                              {formatTime(event.start)} - {formatTime(event.end)}
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>

                {/* Event Details */}
                <div className="space-y-4">
                  <h3 className="font-medium">Today's Events</h3>
                  {getEventsForDay(currentDate).map(event => (
                    <div key={event.id}>
                      <div className="p-4">
                        <h4 className="font-medium">{event.title}</h4>
                        <div className="text-sm text-gray-500">
                          {formatTime(event.start)} - {formatTime(event.end)}
                        </div>
                        <div className={`text-sm mt-2 px-2 py-1 rounded-full inline-block ${getEventStatus(event.status)}`}>
                          {event.status}
                        </div>
                        <div className="mt-2 text-sm">
                          Guest: {event.guest}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );




}

export default SchedulingCalendar