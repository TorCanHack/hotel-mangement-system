import React, { useState } from 'react';
import { Shield, AlertTriangle, Key, Users, Camera, DoorClosed, Activity, Bell } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';


const Security = () => {

    // In a real application, these would be real-time data streams
    const [securityEvents] = useState([
        { 
          id: 1, 
          type: "unauthorized_access", 
          location: "Service Entrance", 
          timestamp: "2025-01-28 14:23:45", 
          status: "investigating",
          priority: "high" 
        },
        { 
          id: 2, 
          type: "door_held", 
          location: "Emergency Exit B", 
          timestamp: "2025-01-28 14:20:30", 
          status: "resolved",
          priority: "medium" 
        },
        { 
          id: 3, 
          type: "camera_offline", 
          location: "Parking Level 2", 
          timestamp: "2025-01-28 14:15:22", 
          status: "in_progress",
          priority: "high" 
        },
      ]);

      const [securityOverview, setSecurityOverview] = useState("incident")

      const [accessAttempts] = useState([
        { hour: '00:00', authorized: 45, unauthorized: 2 },
        { hour: '04:00', authorized: 30, unauthorized: 1 },
        { hour: '08:00', authorized: 120, unauthorized: 5 },
        { hour: '12:00', authorized: 150, unauthorized: 3 },
        { hour: '16:00', authorized: 140, unauthorized: 4 },
        { hour: '20:00', authorized: 90, unauthorized: 2 },
      ]);
    
      const [activeAlarms] = useState([
        { id: 1, zone: "North Wing", type: "Fire Detection", status: "active", _time: "14:23:45" },
        { id: 2, zone: "Kitchen Area", type: "Gas Detection", status: "active", _time: "14:20:30" },
      ]);
    
      const getEventPriorityColor = (priority) => {
        switch(priority) {
          case 'high': return 'bg-red-500';
          case 'medium': return 'bg-yellow-500';
          case 'low': return 'bg-blue-500';
          default: return 'bg-gray-500';
        }
      };
    
      const getEventStatusColor = (status) => {
        switch(status) {
          case 'investigating': return 'text-yellow-500';
          case 'resolved': return 'text-green-500';
          case 'in_progress': return 'text-blue-500';
          default: return 'text-gray-500';
        }
      };


    return (

        <div className="p-4 space-y-4">
      {/* div with Security Status */}
      <div className="flex flex-col justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-center">Security Operations Center</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">System Status: Operational</span>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-500">{new Date().toLocaleString()}</span>
        </div>
      </div>

      {/* Active Alerts Section */}
      {activeAlarms.length > 0 && (
        <div className="mb-6 ">
          <div className="bg-red-50 border-red-200">
            <div>
              <div className="flex flex-col items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                <span className="font-bold">Active Alarms ({activeAlarms.length})</span>
              </div>
              <div className="mt-2 space-y-2">
                {activeAlarms.map(alarm => (
                  <div key={alarm.id} className="text-sm">
                    {alarm.zone} - {alarm.type} - ed at {alarm._time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* KPI divs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 ">
        <div className='bg-gray-100 rounded-2xl'>
          <div className="flex flex-col items-center justify-between pb-2">
            <div className="text-sm font-medium">Active Cameras</div>
            <Camera className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">48/50</div>
            <p className="text-xs text-gray-500">2 cameras offline</p>
          </div>
        </div>

        <div className='bg-gray-100 rounded-2xl'>
          <div className="flex flex-col items-center justify-between pb-2">
            <div className="text-sm font-medium">Access Points</div>
            <DoorClosed className="h-4 w-4 text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">24/24</div>
            <p className="text-xs text-gray-500">All operational</p>
          </div>
        </div>

        <div className='bg-gray-100 rounded-2xl'>
          <div className="flex flex-col items-center justify-between pb-2">
            <div className="text-sm font-medium">Security Staff</div>
            <Users className="h-4 w-4 text-purple-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">6/6</div>
            <p className="text-xs text-gray-500">Full coverage</p>
          </div>
        </div>

        <div className='bg-gray-100 rounded-2xl'>
          <div className="flex flex-col items-center justify-between pb-2">
            <div className="text-sm font-medium">Active Incidents</div>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">2 high priority</p>
          </div>
        </div>
      </div>

      {/* Main div */}
      <div defaultValue="incidents" className="w-full">
        <div className='flex flex-row justify-between items-center bg-gray-100 w-96  mx-auto rounded-lg p-1 mb-7' >
          <button value="incidents" onClick={() => setSecurityOverview("incident")} className={`${securityOverview === "incident"? "bg-yellow-300 rounded-xl p-1" : ""}`}>Active Incidents</button>
          <button value="access" onClick={() => setSecurityOverview("access")} className={`${securityOverview === "access"? "bg-green-400 rounded-xl p-1" : ""}`}>Access Control</button>
          <button value="analytics" onClick={() => setSecurityOverview("analytics")} className={`${securityOverview === "analytics"? "bg-red-400 rounded-xl p-1" : ""}`}>Security Analytics</button>
        </div>

        {securityOverview === "incident" && <div value="incidents">
          <div>
            <div>
              <div>Current Security Events</div>
            </div>
            <div>
              <div className="space-y-4">
                {securityEvents.map(event => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-2 h-2 rounded-full ${getEventPriorityColor(event.priority)}`} />
                      <div>
                        <div className="font-medium">
                          {event.type.replace(/_/g, ' ').charAt(0).toUpperCase() + 
                           event.type.replace(/_/g, ' ').slice(1)}
                        </div>
                        <div className="text-sm text-gray-500">{event.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-sm">
                        <div className={getEventStatusColor(event.status)}>
                          {event.status.replace(/_/g, ' ').charAt(0).toUpperCase() + 
                           event.status.replace(/_/g, ' ').slice(1)}
                        </div>
                        <div className="text-gray-500">{event.timestamp}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>}

        {securityOverview === "access" && <div value="access">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div>
                <div>Access Attempts (Last 24 Hours)</div>
              </div>
              <div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={accessAttempts}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="authorized" 
                        stroke="#22c55e" 
                        name="Authorized"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="unauthorized" 
                        stroke="#ef4444" 
                        name="Unauthorized"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>Recent Access Events</div>
              </div>
              <div>
                <div className="space-y-4">
                  {/* Real-time access events would go here */}
                  <div className="text-sm text-gray-500">
                    Monitoring all access points in real-time...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}

        {securityOverview === "analytics" && <div value="analytics">
          <div>
            <div>
              <div>Security Metrics Overview</div>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Response Time Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Average Response Time</span>
                      <span className="font-medium">2.5 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Incidents Resolved</span>
                      <span className="font-medium">95%</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">System Health</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Camera Uptime</span>
                      <span className="font-medium">99.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Access Control Reliability</span>
                      <span className="font-medium">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>

    )

}

export default Security;

