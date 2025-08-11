import { Calendar, MapPin } from "lucide-react";

export default function Experience({ title, company, location, duration, responsibilities = [] }) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 top-8 w-0.5 h-full bg-blue-500"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-2 top-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
      
      {/* Content */}
      <div className="ml-12 pb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <h4 className="text-lg font-medium text-blue-600 mb-2">{company}</h4>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
          
          {responsibilities.length > 0 && (
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="text-sm">{responsibility}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
