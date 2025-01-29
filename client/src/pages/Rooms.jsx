import { 
    BedDouble,
    Loader,
    Check,
    AlertTriangle,
    Calendar,
    Clock
  } from 'lucide-react';

const Rooms = () => {

     // Sample room data - in a real app this would come from your backend
  const rooms = [
    { id: 101, type: 'Standard', status: 'occupied', guest: 'John Smith', checkIn: '2025-01-26', checkOut: '2025-01-29', cleaning: 'clean', maintenance: null },
    { id: 102, type: 'Deluxe', status: 'available', guest: null, checkIn: null, checkOut: null, cleaning: 'clean', maintenance: null },
    { id: 103, type: 'Suite', status: 'maintenance', guest: null, checkIn: null, checkOut: null, cleaning: 'clean', maintenance: 'AC Repair' },
    { id: 104, type: 'Standard', status: 'cleaning', guest: null, checkIn: null, checkOut: null, cleaning: 'in-progress', maintenance: null },
  ];

  const getStatusColor = (status) => {
    const colors = {
      occupied: 'bg-blue-100 text-blue-800',
      available: 'bg-green-100 text-green-800',
      maintenance: 'bg-red-100 text-red-800',
      cleaning: 'bg-yellow-100 text-yellow-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

    

    return ( 
        <section className="p-6 space-y-6 bg-gray-50">
        
      <h1 className="text-2xl font-bold mb-6">Rooms Dashboard</h1>
      
      {/* Room Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className='bg-gray-200 rounded-2xl'>
          <div className="flex flex-col items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Total Rooms</div>
            <BedDouble className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">150</div>
            <p className="text-xs text-gray-500">All Rooms</p>
          </div>
        </div>

        <div className='bg-gray-200 rounded-2xl'>
          <div className="flex flex-col items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Occupied</div>
            <Check className="h-4 w-4 text-green-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-gray-500">80% Occupancy</p>
          </div>
        </div>

        <div className='bg-gray-200 rounded-2xl'>
          <div className="flex flex-col items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Maintenance</div>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500">Under Repair</p>
          </div>
        </div>

        <div className='bg-gray-200 rounded-2xl'>
          <div className="flex flex-col items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Cleaning</div>
            <Loader className="h-4 w-4 text-yellow-600" />
          </div>
          <div>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-500">In Progress</p>
          </div>
        </div>
      </div>

      {/* Floor Plan View */}
      <div>
        <div>
          <div>Floor Plan View</div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-4">
            {rooms.map(room => (
              <div key={room.id} className="p-4 border rounded-lg ">
                <div className="flex justify-between items-center mb-2 ">
                  <span className="font-bold">Room {room.id}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(room.status)}`}>
                    {room.status}
                  </span>
                </div>
                <div className="text-sm space-y-1">
                  <p className="text-gray-600">{room.type}</p>
                  {room.guest && (
                    <>
                      <p className="text-gray-600">Guest: {room.guest}</p>
                      <p className="text-gray-600">Check-out: {room.checkOut}</p>
                    </>
                  )}
                  {room.maintenance && (
                    <p className="text-red-600">{room.maintenance}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Check-ins Today
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium">Room 205 - Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Standard Room - 3 nights</p>
                </div>
                <span className="text-sm font-medium">2:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium">Room 308 - Mike Peters</p>
                  <p className="text-sm text-gray-500">Deluxe Room - 1 night</p>
                </div>
                <span className="text-sm font-medium">3:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Check-outs Today
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">Room 412 - Robert Brown</p>
                  <p className="text-sm text-gray-500">Suite - Completed</p>
                </div>
                <span className="text-sm font-medium text-green-600">✓ Done</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">Room 506 - Emma Wilson</p>
                  <p className="text-sm text-gray-500">Deluxe Room - Pending</p>
                </div>
                <span className="text-sm font-medium">11:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>)
}

export default Rooms;