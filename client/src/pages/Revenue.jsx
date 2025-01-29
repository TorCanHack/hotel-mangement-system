import { 
    BarChart, 
    Bar, 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
  } from 'recharts';

  import { 
    DollarSign, 
    TrendingUp, 
    Calendar,
    Building,
    BedDouble,
    Activity
  } from 'lucide-react';

const Revenue = () => {

    // Monthly revenue data with booking details
  const monthlyData = [
    { month: 'Jan', revenue: 958000, bookings: 450, occupancyRate: 85 },
    { month: 'Feb', revenue: 365000, bookings: 320, occupancyRate: 68 },
    { month: 'Mar', revenue: 672000, bookings: 380, occupancyRate: 79 },
    { month: 'Apr', revenue: 768000, bookings: 400, occupancyRate: 82 },
    { month: 'May', revenue: 675000, bookings: 390, occupancyRate: 81 },
    { month: 'Jun', revenue: 1082000, bookings: 540, occupancyRate: 92 }
  ];

  // Room type performance data
  const roomPerformance = [
    { name: 'Deluxe Suite', value: 35, revenue: 368000, color: '#4F46E5' },
    { name: 'Executive Room', value: 30, revenue: 252000, color: '#10B981' },
    { name: 'Standard Room', value: 25, revenue: 143000, color: '#F59E0B' },
    { name: 'Family Suite', value: 10, revenue: 319000, color: '#6366F1' }
  ];

  // Floor performance data
  const floorData = [
    { floor: '1st Floor', revenue: 842000, occupancy: 88 },
    { floor: '2nd Floor', revenue: 638000, occupancy: 85 },
    { floor: '3rd Floor', revenue: 1045000, occupancy: 92 },
    { floor: '4th Floor', revenue: 840000, occupancy: 86 },
    { floor: '5th Floor', revenue: 637000, occupancy: 84 }
  ];

    



    return (
        <div className="p-6 space-y-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Revenue Dashboard</h1>
      
      {/* Key Metrics */}
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className='bg-gray-200 rounded-2xl'>
          <div className="flex flex-col items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Total Revenue</div>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">₦1,520,000</div>
            <p className="text-xs text-green-500">+8% from last month</p>
          </div>
        </div>

        <div className='bg-gray-200 rounded-2xl'>
          <div className="flex flex-col items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Average Daily Rate</div>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">₦350,000</div>
            <p className="text-xs text-green-500">+5% from last month</p>
          </div>
        </div>

        <div className='bg-gray-200 rounded-2xl'>
          <div className="flex flex-col items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">RevPAR</div>
            <Activity className="h-4 w-4 text-purple-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">₦300,000</div>
            <p className="text-xs text-green-500">+6% from last month</p>
          </div>
        </div>

        <div className='bg-gray-200 rounded-2xl'>
          <div className="flex flex-col items-center justify-between space-y-0 pb-2 ">
            <div className="text-sm font-medium">Occupancy Rate</div>
            <BedDouble className="h-4 w-4 text-yellow-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-green-500">+4% from last month</p>
          </div>
        </div>
      </article>

      {/* Revenue Trend Chart */}
      <article className='mb-8'>
        <div>
          <div>Revenue & Bookings Trend</div>
        </div>
        <div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#4F46E5" 
                  name="Revenue (₦)"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="bookings" 
                  stroke="#10B981" 
                  name="Bookings"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </article>

      {/* Room Type Performance and Floor Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-1  gap-4">
        <div>
          <div>
            <div className="flex items-center gap-2">
              <BedDouble className="h-4 w-4" />
              Room Type Performance
            </div>
          </div>
          <div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={roomPerformance}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {roomPerformance.map((entry, index) => (
                      <Cell key={`cell-₦{index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {roomPerformance.map(room => (
                <div key={room.name} className="flex justify-between items-center">
                  <span className="text-sm font-medium">{room.name}</span>
                  <span className="text-sm text-gray-600">₦{room.revenue.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Floor Performance
            </div>
          </div>
          <div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={floorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="floor" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#4F46E5" name="Revenue (₦)" />
                  <Bar dataKey="occupancy" fill="#10B981" name="Occupancy %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Best Performing Stats */}
      <div>
        <div>
          <div>Performance Highlights</div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-800">Best Performing Month</h3>
              <p className="text-2xl font-bold text-blue-900">June</p>
              <p className="text-sm text-blue-700">₦1,082,000 Revenue</p>
              <p className="text-sm text-blue-700">92% Occupancy</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-green-800">Top Room Category</h3>
              <p className="text-2xl font-bold text-green-900">Deluxe Suite</p>
              <p className="text-sm text-green-700">₦368,000 Revenue</p>
              <p className="text-sm text-green-700">35% of Total Revenue</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-purple-800">Best Performing Floor</h3>
              <p className="text-2xl font-bold text-purple-900">3rd Floor</p>
              <p className="text-sm text-purple-700">₦1, 045,000 Revenue</p>
              <p className="text-sm text-purple-700">92% Occupancy</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default Revenue
