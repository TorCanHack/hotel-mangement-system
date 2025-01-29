import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Users, BarChart3, BedDouble, Loader2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';


const Housekeeping = () => {

      // Sample data for a hotel - in a real application, this would come from your backend
  const [rooms] = useState([
    { id: 101, type: "Standard", status: "needs-cleaning", priority: "high", assigned: "Maria L.", checkoutTime: "11:00 AM" },
    { id: 102, type: "Suite", status: "in-progress", priority: "medium", assigned: "John D.", checkoutTime: "12:00 PM" },
    { id: 103, type: "Deluxe", status: "completed", priority: "low", assigned: "Sarah K.", checkoutTime: "10:30 AM" },
    { id: 104, type: "Standard", status: "needs-inspection", priority: "medium", assigned: "James R.", checkoutTime: "11:30 AM" },
    { id: 105, type: "Suite", status: "completed", priority: "low", assigned: "Lisa M.", checkoutTime: "10:00 AM" },
  ]);

  const staffPerformance = [
    { name: "Maria L.", roomsCleaned: 12, avgTime: 35, rating: 4.8 },
    { name: "John D.", roomsCleaned: 10, avgTime: 40, rating: 4.5 },
    { name: "Sarah K.", roomsCleaned: 15, avgTime: 30, rating: 4.9 },
    { name: "James R.", roomsCleaned: 11, avgTime: 38, rating: 4.6 },
    { name: "Lisa M.", roomsCleaned: 13, avgTime: 33, rating: 4.7 },
  ];

  const roomStatusData = [
    { name: "Needs Cleaning", value: 8, color: "#ef4444" },
    { name: "In Progress", value: 5, color: "#3b82f6" },
    { name: "Completed", value: 15, color: "#22c55e" },
    { name: "Needs Inspection", value: 4, color: "#eab308" },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'needs-cleaning': return 'bg-red-500';
      case 'needs-inspection': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* div with Current Time */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Hotel Housekeeping Dashboard</h1>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleString()}
        </div>
      </div>

      {/* Urgent divs Section */}
      <div className="mb-6">
        <div className="bg-red-50 border-red-200">
          <div>
            <div className="flex items-center space-x-2">
              <Loader2 className="h-4 w-4 text-red-500 animate-spin" />
              <span>3 VIP rooms require immediate attention</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI divs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <div className="flex flex-row items-center justify-between pb-2">
            <div className="text-sm font-medium">Rooms Cleaned Today</div>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">32/50</div>
            <p className="text-xs text-gray-500">Target: 45 rooms</p>
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center justify-between pb-2">
            <div className="text-sm font-medium">Average Cleaning Time</div>
            <Clock className="h-4 w-4 text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">35 min</div>
            <p className="text-xs text-gray-500">Target: 30 min</p>
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center justify-between pb-2">
            <div className="text-sm font-medium">Staff on Duty</div>
            <Users className="h-4 w-4 text-purple-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">8/10</div>
            <p className="text-xs text-gray-500">2 on break</p>
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center justify-between pb-2">
            <div className="text-sm font-medium">Pending Inspections</div>
            <BedDouble className="h-4 w-4 text-yellow-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-gray-500">Due within 1 hour</p>
          </div>
        </div>
      </div>

      {/* Main  */}
      <div defaultValue="rooms" className="w-full">
        <div>
          <div value="rooms">Room Status</div>
          <div value="staff">Staff Performance</div>
          <div value="analytics">Analytics</div>
        </div>

        <div value="rooms">
          <div>
            <div>
              <div>Current Room Status</div>
            </div>
            <div>
              <div className="space-y-4">
                {rooms.map(room => (
                  <div key={room.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(room.status)}`} />
                      <div>
                        <div className="font-medium">Room {room.id}</div>
                        <div className="text-sm text-gray-500">{room.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-sm">
                        <div className={getPriorityColor(room.priority)}>
                          {room.priority} priority
                        </div>
                        <div className="text-gray-500">Checkout: {room.checkoutTime}</div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {room.assigned}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div value="staff">
          <div>
            <div>
              <div>Staff Performance</div>
            </div>
            <div>
              <div className="space-y-4">
                {staffPerformance.map(staff => (
                  <div key={staff.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Users className="h-4 w-4 text-gray-500" />
                      <div>
                        <div className="font-medium">{staff.name}</div>
                        <div className="text-sm text-gray-500">Rating: {staff.rating}/5.0</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-sm">
                        <div>Rooms: {staff.roomsCleaned}</div>
                        <div className="text-gray-500">Avg: {staff.avgTime} min</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div>
                <div>Room Status Distribution</div>
              </div>
              <div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={roomStatusData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {roomStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>Cleaning Time by Staff Member</div>
              </div>
              <div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={staffPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="avgTime" fill="#3b82f6" name="Average Time (minutes)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Housekeeping;





  
