import React from 'react';
import { 
    BarChart, 
    LineChart, 
    Bar, 
    Line,
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend,
    ResponsiveContainer 
  } from 'recharts';

  import { 
    Hotel, 
    Users, 
    ShoppingCart,
    Sun,
    Clock,
    Camera,
    Calendar,
    BedDouble,
    ClipboardList,
    Bell,
    Percent
  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SchedulingCalendar from '../components/SchedulingCalendar';

const FrontDesk = () => {
    const navigate = useNavigate()

    const occupancyData = [
        { name: 'Mon', occupancy: 75 },
        { name: 'Tue', occupancy: 82 },
        { name: 'Wed', occupancy: 88 },
        { name: 'Thu', occupancy: 85 },
        { name: 'Fri', occupancy: 92 },
        { name: 'Sat', occupancy: 95 },
        { name: 'Sun', occupancy: 89 }
      ];
       
      const revenueData = [
        { name: 'Mon', revenue: 12500 },
        { name: 'Tue', revenue: 13200 },
        { name: 'Wed', revenue: 14800 },
        { name: 'Thu', revenue: 13900 },
        { name: 'Fri', revenue: 15600 },
        { name: 'Sat', revenue: 16800 },
        { name: 'Sun', revenue: 15200 }
      ];

      const handleTotalRoomCLick = () => {
        navigate("/rooms")
      }

      const handleRevenueCLick = () => {
        navigate("/revenue")
      }

      const handleSecurityClick = () => {
        navigate('/security')
      }

      const handleRestaurantAndBar = () => {
        navigate('/restaurantandbar')
      }

      const handleEmployeesClick = () => {
        navigate('/employees')
      }

      const handleHouseKeepingClick = () => {
        navigate('/housekeeping')
      }

    return (
        <section className='p-6 space-y-6 bg-gray-200  rounded-2xl'>
            
            <h1 className="text-4xl font-bold mb-6">Hotel Management Dashboard</h1>

            <div className='flex flex-row justify-center items-center mb-14 '>
                <h2 className='text-2xl'>Good Morning </h2>
                <Sun className='h-14 w-14 text-amber-400 ml-3'/>
            </div>
      
            {/* Key Metrics Row */}
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button 
                    className='bg-white rounded-xl lg:cursor-pointer ' 
                    onClick={handleTotalRoomCLick}
                >
                    <div className="flex flex-col items-center justify-between space-y-0 pb-2">
                        <h1 className="text-base font-medium">
                            Total Rooms
                        </h1>
                        <BedDouble className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">120/150</div>
                        <p className="text-xs text-gray-500">Occupied/Total</p>
                    </div>
                </button>

                <button onClick={handleRevenueCLick} className='cursor-pointer'>
                    <div className='bg-white rounded-xl'>
                        <div className="flex flex-col items-center justify-between space-y-0 pb-2">
                            <h2 className="text-sm font-medium">
                                Today's Revenue
                            </h2>
                            <h3>₦</h3>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">₦815,890</div>
                            <p className="text-xs text-green-500">+12% from yesterday</p>
                        </div>
                    </div>
                </button>

                <button 
                    className='bg-white rounded-xl lg:cursor-pointer ' 
                    onClick={handleTotalRoomCLick}
                >
                    <div className='bg-white rounded-xl'>
                        <div className="flex flex-col items-center justify-between space-y-0 pb-2">
                            <div className="text-sm font-medium">
                            Pending Check-ins
                            </div>
                            <Users className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">24</div>
                            <p className="text-xs text-gray-500">Expected today</p>
                        </div>
                    </div>
                </button>

                <button onClick={handleRevenueCLick} className='cursor-pointer'>
                    <div className='bg-white rounded-xl'>
                        <div className="flex flex-col items-center justify-between space-y-0 pb-2">
                            <div className="text-sm font-medium">
                            Occupancy Rate
                            </div>
                            <Percent className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">80%</div>
                            <p className="text-xs text-purple-500">+5% from last week</p>
                        </div>
                    </div>
                </button>


                <button onClick={handleSecurityClick} className='cursor-pointer'>
                    <div className='bg-white rounded-xl'>
                        <div className="flex flex-col items-center justify-between pb-2">
                            <div className="text-sm font-medium">Active Cameras</div>
                            <Camera className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">48/50</div>
                            <p className="text-xs text-gray-500">2 cameras offline</p>
                        </div>
                    </div>
                </button>

                <button onClick={handleRestaurantAndBar} className='cursor-pointer'>

                    <div className='bg-white rounded-xl'>
                    <div className="flex flex-col items-center justify-between space-y-0 pb-2">
                        <div className="text-sm font-medium">Room Service</div>
                        <ShoppingCart className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">42</div>
                        <p className="text-xs text-gray-500">Orders today</p>
                    </div>
                    </div>
                </button>

                <button onClick={handleEmployeesClick} className='cursor-pointer'>
                    <div className='bg-white rounded-xl'>
                    <div className="flex flex-col items-center justify-between space-y-0 pb-2">
                        <div className="text-sm font-medium">Total Employees</div>
                        <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">248</div>
                        <p className="text-xs text-green-500">↑ 5 from last month</p>
                    </div>
                    </div>
                </button>

                <button onClick={handleHouseKeepingClick} className='cursor-pointer'>
                    <div className='bg-white rounded-xl'>
                    <div className="flex flex-col items-center justify-between pb-2">
                        <div className="text-sm font-medium">Average Cleaning Time</div>
                        <Clock className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">35 min</div>
                        <p className="text-xs text-gray-500">Target: 30 min</p>
                    </div>
                    </div>
                </button>
      </article>

      

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
        <div>
          <div>
            <div>Weekly Occupancy Rate</div>
          </div>
          <div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="occupancy" fill="#4F46E5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>Revenue Trend</div>
          </div>
          <div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10B981" 
                    strokeWidth={2} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <SchedulingCalendar/>

      {/* Recent Activities and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className='bg-white p-4 rounded-2xl'>
          <div >
            <div className="flex items-center gap-2 text-blue-600">
              <ClipboardList className="h-4 w-4 text-blue-600" />
              Recent Activities
            </div>
          </div>
          <div >
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 mt-3">
                <div>
                  <p className="font-medium">Room 304 Checked In</p>
                  <p className="text-sm text-gray-500">John Smith - 2 nights</p>
                </div>
                <span className="text-sm text-gray-500">10 min ago</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 mt-3">
                <div>
                  <p className="font-medium">Room 512 Maintenance</p>
                  <p className="text-sm text-gray-500">AC Repair Scheduled</p>
                </div>
                <span className="text-sm text-gray-500">1 hour ago</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 mt-3">
                <div>
                  <p className="font-medium">New Reservation</p>
                  <p className="text-sm text-gray-500">Suite 701 - Next Week</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white p-3 rounded-2xl'>
          <div>
            <div className="flex items-center gap-2 mb-3 text-yellow-500">
              <Bell className="h-4 w-4" />
              Alerts & Notifications
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div className="p-3 bg-red-50 text-red-700 rounded-lg">
                <p className="font-medium">Room 205 Checkout Overdue</p>
                <p className="text-sm">Guest was supposed to check out 30 minutes ago</p>
              </div>
              <div className="p-3 bg-yellow-50 text-yellow-700 rounded-lg">
                <p className="font-medium">Low Inventory Alert</p>
                <p className="text-sm">Housekeeping supplies running low</p>
              </div>
              <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
                <p className="font-medium">VIP Guest Arriving</p>
                <p className="text-sm">Prepare welcome package for Room 801</p>
              </div>
            </div>
          </div>
        </div>
      </div>
            
            





  


        </section>
    )
}

export default FrontDesk;