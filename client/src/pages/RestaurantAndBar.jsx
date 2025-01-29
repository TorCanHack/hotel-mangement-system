import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
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
  UtensilsCrossed,
  DollarSign,
  Users,
  Clock,
  Package,
  Percent,
  ChefHat,
  ShoppingCart
} from 'lucide-react';


const RestaurantAndBar = () => {

    
        // Daily revenue data
        const revenueData = [
            { day: 'Mon', breakfast: 2500, lunch: 3800, dinner: 4500, roomService: 1200 },
            { day: 'Tue', breakfast: 2300, lunch: 3600, dinner: 4200, roomService: 1100 },
            { day: 'Wed', breakfast: 2600, lunch: 3900, dinner: 4800, roomService: 1300 },
            { day: 'Thu', breakfast: 2400, lunch: 3700, dinner: 4400, roomService: 1250 },
            { day: 'Fri', breakfast: 2800, lunch: 4100, dinner: 5200, roomService: 1400 },
            { day: 'Sat', breakfast: 3200, lunch: 4500, dinner: 5800, roomService: 1600 },
            { day: 'Sun', breakfast: 3000, lunch: 4300, dinner: 5500, roomService: 1500 }
        ];
        
            // Popular menu items
        const menuItemData = [
            { name: 'Signature Steak', orders: 145, revenue: 5800 },
            { name: 'Grilled Salmon', orders: 120, revenue: 4200 },
            { name: 'Caesar Salad', orders: 95, revenue: 1900 },
            { name: 'Pasta Carbonara', orders: 85, revenue: 2550 },
            { name: 'Chocolate Cake', orders: 75, revenue: 1500 }
        ];
        
            // Low stock ingredients
        const lowStockItems = [
            { name: 'Fresh Salmon', current: 8, minimum: 10, unit: 'kg' },
            { name: 'Premium Beef', current: 12, minimum: 15, unit: 'kg' },
            { name: 'White Wine', current: 6, minimum: 10, unit: 'bottles' },
            { name: 'Fresh Herbs', current: 4, minimum: 5, unit: 'kg' }
        ];
        
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
    
    return (
            <div className="p-6 space-y-6 bg-gray-50">
              <h1 className="text-2xl font-bold mb-6">Food & Beverage Dashboard</h1>
              
              {/* Key F&B Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="text-sm font-medium">Today's Revenue</div>
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$12,450</div>
                    <p className="text-xs text-green-500">↑ 15% vs last week</p>
                  </div>
                </div>
        
                <div>
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="text-sm font-medium">Covers Served</div>
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">285</div>
                    <p className="text-xs text-gray-500">Average wait: 12 mins</p>
                  </div>
                </div>
        
                <div>
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="text-sm font-medium">Food Cost %</div>
                    <Percent className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">28.5%</div>
                    <p className="text-xs text-green-500">↓ 1.2% from target</p>
                  </div>
                </div>
        
                <div>
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="text-sm font-medium">Room Service</div>
                    <ShoppingCart className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-gray-500">Orders today</p>
                  </div>
                </div>
              </div>
        
              {/* Revenue Chart */}
              <div>
                <div>
                  <div>Daily Revenue by Service</div>
                </div>
                <div>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="breakfast" stackId="a" fill="#4F46E5" name="Breakfast" />
                        <Bar dataKey="lunch" stackId="a" fill="#10B981" name="Lunch" />
                        <Bar dataKey="dinner" stackId="a" fill="#F59E0B" name="Dinner" />
                        <Bar dataKey="roomService" stackId="a" fill="#6366F1" name="Room Service" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
        
              {/* Popular Items and Inventory */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <div>
                    <div>Top Selling Items</div>
                  </div>
                  <div>
                    <div className="space-y-4">
                      {menuItemData.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-600">{item.orders} orders</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${item.revenue}</p>
                              <p className="text-sm text-gray-600">Revenue</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
        
                <div>
                  <div>
                    <div>Low Stock Alerts</div>
                  </div>
                  <div>
                    <div className="space-y-4">
                      {lowStockItems.map((item, index) => (
                        <div key={index} className="p-4 bg-red-50 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-red-900">{item.name}</p>
                              <p className="text-sm text-red-700">
                                Current: {item.current} {item.unit}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-red-700">
                                Minimum: {item.minimum} {item.unit}
                              </p>
                              <button className="mt-2 px-3 py-1 bg-red-600 text-white rounded-md text-sm">
                                Reorder
                              </button>
                            </div>
                          </div>
                          <div className="mt-2 w-full bg-red-200 rounded-full h-2">
                            <div 
                              className="bg-red-600 h-2 rounded-full"
                              style={{ width: `${(item.current / item.minimum) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );

}

export default RestaurantAndBar;


