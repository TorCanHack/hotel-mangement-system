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
    Users,
    Award,
    Calendar,
    TrendingUp,
    BookOpen,
    DollarSign,
    Clock,
    UserCheck
  } from 'lucide-react';
  

const Employees = () => {

   
    const turnoverData = [
        { month: 'Jan', departures: 3, newHires: 5, turnoverRate: 2.5 },
        { month: 'Feb', departures: 2, newHires: 4, turnoverRate: 2.1 },
        { month: 'Mar', departures: 4, newHires: 6, turnoverRate: 2.8 },
        { month: 'Apr', departures: 2, newHires: 5, turnoverRate: 1.9 },
        { month: 'May', departures: 3, newHires: 4, turnoverRate: 2.2 },
        { month: 'Jun', departures: 2, newHires: 5, turnoverRate: 1.8 }
    ];
      
        // Training completion data by department
    const trainingData = [
        { department: 'Front Office', completed: 95, pending: 5 },
        { department: 'Housekeeping', completed: 88, pending: 12 },
        { department: 'F&B', completed: 92, pending: 8 },
        { department: 'Maintenance', completed: 85, pending: 15 },
        { department: 'Security', completed: 90, pending: 10 }
    ];
      
        // Employee satisfaction scores
    const satisfactionTrend = [
        { month: 'Jan', score: 4.2, workLife: 4.0, compensation: 3.8, growth: 4.1 },
        { month: 'Feb', score: 4.3, workLife: 4.1, compensation: 3.9, growth: 4.2 },
        { month: 'Mar', score: 4.4, workLife: 4.2, compensation: 4.0, growth: 4.3 },
        { month: 'Apr', score: 4.5, workLife: 4.3, compensation: 4.1, growth: 4.4 },
        { month: 'May', score: 4.6, workLife: 4.4, compensation: 4.2, growth: 4.5 },
        { month: 'Jun', score: 4.7, workLife: 4.5, compensation: 4.3, growth: 4.6 }
    ];


    return (
        <div className="p-6 space-y-6 bg-gray-50">
          <h1 className="text-2xl font-bold mb-6">Human Resources Dashboard</h1>
          
          {/* Key HR Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-sm font-medium">Total Employees</div>
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-green-500">↑ 5 from last month</p>
              </div>
            </div>
    
            <div>
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-sm font-medium">Training Compliance</div>
                <BookOpen className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-gray-500">Target: 95%</p>
              </div>
            </div>
    
            <div>
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-sm font-medium">Employee Satisfaction</div>
                <UserCheck className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">4.7/5.0</div>
                <p className="text-xs text-green-500">↑ 0.1 from last quarter</p>
              </div>
            </div>
    
            <div>
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-sm font-medium">Turnover Rate</div>
                <TrendingUp className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">1.8%</div>
                <p className="text-xs text-green-500">↓ 0.4% from last month</p>
              </div>
            </div>
          </div>
    
          {/* Employee Turnover Chart */}
          <div>
            <div>
              <div>Employee Turnover Trends</div>
            </div>
            <div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={turnoverData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="newHires" fill="#4F46E5" name="New Hires" />
                    <Bar yAxisId="left" dataKey="departures" fill="#EF4444" name="Departures" />
                    <Line yAxisId="right" type="monotone" dataKey="turnoverRate" stroke="#10B981" name="Turnover Rate %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
    
          {/* Training and Satisfaction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div>
                <div>Training Completion by Department</div>
              </div>
              <div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trainingData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="department" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="completed" stackId="a" fill="#10B981" name="Completed %" />
                      <Bar dataKey="pending" stackId="a" fill="#EF4444" name="Pending %" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
    
            <div>
              <div>
                <div>Employee Satisfaction Trends</div>
              </div>
              <div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={satisfactionTrend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[0, 5]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="score" stroke="#8884d8" name="Overall Score" />
                      <Line type="monotone" dataKey="workLife" stroke="#82ca9d" name="Work-Life Balance" />
                      <Line type="monotone" dataKey="compensation" stroke="#ffc658" name="Compensation" />
                      <Line type="monotone" dataKey="growth" stroke="#ff7300" name="Growth Opportunities" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
    );


}

export default Employees;
