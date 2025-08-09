import React from 'react'
import {
  Plus
} from 'lucide-react';

const Tasks = () => {

  const tasks = [
    { id: 1, title: 'Check herbal inventory', status: 'pending', priority: 'high', dueDate: '2025-08-08' },
    { id: 2, title: 'Prepare turmeric extract', status: 'in-progress', priority: 'medium', dueDate: '2025-08-09' },
    { id: 3, title: 'Customer consultation - Mrs. Silva', status: 'completed', priority: 'high', dueDate: '2025-08-07' },
    { id: 4, title: 'Update product database', status: 'pending', priority: 'low', dueDate: '2025-08-10' }
  ];


  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Tasks</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
          <Plus size={16} className="mr-2" />
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <h3 className="font-semibold text-red-600 mb-4">Pending Tasks</h3>
          <div className="space-y-3">
            {tasks.filter(task => task.status === 'pending').map(task => (
              <div key={task.id} className="p-3 border border-red-200 rounded-lg bg-red-50">
                <h4 className="font-medium text-sm">{task.title}</h4>
                <p className="text-xs text-gray-600 mt-1">Due: {task.dueDate}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${
                  task.priority === 'high' ? 'bg-red-500 text-white' : 
                  task.priority === 'medium' ? 'bg-orange-500 text-white' : 'bg-gray-500 text-white'
                }`}>
                  {task.priority} priority
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4">
          <h3 className="font-semibold text-orange-600 mb-4">In Progress</h3>
          <div className="space-y-3">
            {tasks.filter(task => task.status === 'in-progress').map(task => (
              <div key={task.id} className="p-3 border border-orange-200 rounded-lg bg-orange-50">
                <h4 className="font-medium text-sm">{task.title}</h4>
                <p className="text-xs text-gray-600 mt-1">Due: {task.dueDate}</p>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4">
          <h3 className="font-semibold text-green-600 mb-4">Completed</h3>
          <div className="space-y-3">
            {tasks.filter(task => task.status === 'completed').map(task => (
              <div key={task.id} className="p-3 border border-green-200 rounded-lg bg-green-50">
                <h4 className="font-medium text-sm">{task.title}</h4>
                <p className="text-xs text-gray-600 mt-1">Due: {task.dueDate}</p>
                <span className="inline-block px-2 py-1 bg-green-500 text-white rounded-full text-xs mt-2">
                  ✓ Complete
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks