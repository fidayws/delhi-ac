import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdArrowForward, MdCheckCircle } from 'react-icons/md';

// Consolidated service data from all categories
const allServices = [
  // AC Services
  {
    id: 'ac-service', name: 'AC Service', description: 'Complete air conditioner service including cleaning, performance check, and basic maintenance', features: ['Filter cleaning and sanitization', 'Condenser and evaporator cleaning', 'Drainage system check and cleaning', 'Performance check and calibration', 'Gas pressure inspection'], price: 'Starting at ₹599', image: '/images/ac-service.jpg', category: 'AC Services'
  },
  { id: 'ac-gas-fill', name: 'AC Gas Fill', description: 'Professional refrigerant gas filling for all types of air conditioners', features: ['Leak detection and repair', 'Proper gas filling as per unit specification', 'Performance testing after filling', 'Pressure check and balancing', 'Cooling efficiency optimization'], price: 'Starting at ₹1200', image: '/images/ac-gas-fill.jpg', category: 'AC Services' },
  { id: 'ac-fitting', name: 'AC Fitting', description: 'Expert installation and fitting services for all types of air conditioners', features: ['Proper unit mounting and securing', 'Copper pipe installation and insulation', 'Drainage system installation', 'Electrical connection and testing', 'Post-installation performance check'], price: 'Starting at ₹1500', image: '/images/ac-fitting.jpg', category: 'AC Services' },
  { id: 'ac-repair', name: 'AC Repair', description: 'Comprehensive repair services for all air conditioner problems and brands', features: ['Diagnostic assessment', 'Component replacement', 'Electrical fault repair', 'Cooling system repair', 'Warranty on repairs'], price: 'Starting at ₹499', image: '/images/ac-repair.jpg', category: 'AC Services' },
  { id: 'ac-installation', name: 'AC Installation', description: 'Complete air conditioner installation service with proper setup and testing', features: ['Mounting bracket installation', 'Indoor and outdoor unit installation', 'Copper piping and electrical wiring', 'System charging and testing', 'User operation guidance'], price: 'Starting at ₹2000', image: '/images/ac-installation.jpg', category: 'AC Services' },
  { id: 'ac-maintenance', name: 'AC Maintenance', description: 'Regular maintenance services to ensure optimal performance and longevity', features: ['Comprehensive system check', 'Component cleaning and servicing', 'Minor repairs and adjustments', 'Performance optimization', 'Preventative maintenance'], price: 'Starting at ₹799', image: '/images/ac-maintenance.jpg', category: 'AC Services' },
  { id: 'amc-services', name: 'AMC Services', description: 'Annual Maintenance Contracts for hassle-free air conditioner care throughout the year', features: ['Regular scheduled servicing', 'Priority emergency support', 'Discounts on repairs and parts', 'Extended component warranty', 'Preventative maintenance plan'], price: 'Starting at ₹3999/year', image: '/images/amc-services.jpg', category: 'AC Services' },
  { id: 'ac-parts', name: 'Air Conditioner Parts (All Company)', description: 'Genuine replacement parts for all air conditioner brands and models', features: ['Genuine OEM parts', 'Compressors and condenser units', 'Control boards and electrical components', 'Mounting brackets and accessories', 'Professional installation available'], price: 'Varies by part', image: '/images/ac-parts.jpg', category: 'AC Services' },
  // Refrigerator Services
  { id: 'fridge-repair', name: 'Fridge Repair', description: 'Comprehensive repair services for all types of refrigerators and freezers', features: ['Diagnostic assessment', 'Component replacement', 'Electrical circuit repair', 'Cooling system troubleshooting', 'Performance optimization'], price: 'Starting at ₹499', image: '/images/fridge-repair.jpg', category: 'Refrigerator Services' },
  { id: 'refrigerator-gas', name: 'Refrigerator Gas Fill', description: 'Professional refrigerant gas filling service for optimal cooling performance', features: ['Gas leak detection', 'Proper gas filling as per model specifications', 'Pressure testing and adjustment', 'Performance verification', 'Cooling efficiency check'], price: 'Starting at ₹1200', image: '/images/refrigerator-gas.jpg', category: 'Refrigerator Services' },
  { id: 'refrigerator-repair', name: 'Refrigerator Repair', description: 'Expert repair services for all brands of single-door and double-door refrigerators', features: ['Compressor repair or replacement', 'Thermostat calibration', 'Door seal replacement', 'Defrost system repair', 'Complete performance tuning'], price: 'Starting at ₹599', image: '/images/refrigerator-repair.jpg', category: 'Refrigerator Services' },
  // Water Services
  { id: 'water-cooler-gas', name: 'Water Cooler Gas Fill', description: 'Professional gas filling service for all types of water coolers', features: ['Gas leak detection and repair', 'Proper gas filling as per specifications', 'Performance testing after filling', 'Cooling efficiency check', 'Safety inspection'], price: 'Starting at ₹999', image: '/images/water-cooler-gas.jpg', category: 'Water Services' },
  { id: 'water-cooler-repair', name: 'Water Cooler Repair', description: 'Expert repair services for commercial and residential water coolers', features: ['Comprehensive diagnostic check', 'Compressor repair or replacement', 'Fan motor repair', 'Thermostat and sensor calibration', 'Complete system optimization'], price: 'Starting at ₹499', image: '/images/water-cooler-repair.jpg', category: 'Water Services' },
  { id: 'water-dispenser', name: 'Water Dispenser Repair & Gas', description: 'Complete repair and gas filling services for all types of water dispensers', features: ['Cooling system repair', 'Heating element replacement', 'Gas leak detection and filling', 'Tap and valve replacement', 'Sanitization and cleaning'], price: 'Starting at ₹599', image: '/images/water-dispenser.jpg', category: 'Water Services' },
  // Kitchen Services
  { id: 'oven-repair', name: 'Oven Repair', description: 'Professional repair services for all types of electric and gas ovens', features: ['Heating element replacement', 'Thermostat repair or replacement', 'Door seal replacement', 'Control panel repair', 'Gas system troubleshooting'], price: 'Starting at ₹599', image: '/images/oven-repair.jpg', category: 'Kitchen Services' },
  { id: 'microwave-repair', name: 'Microwave Oven Repair', description: 'Expert repair services for all brands of microwave ovens', features: ['Magnetron replacement', 'Door switch repair', 'Turntable motor repair', 'Control panel troubleshooting', 'Power supply repair'], price: 'Starting at ₹499', image: '/images/microwave-repair.jpg', category: 'Kitchen Services' },
  // Washing Machine Services
  { id: 'semi-washing-machine', name: 'Semi Washing Machine Repair & Service', description: 'Expert repair and maintenance services for all brands of semi-automatic washing machines', features: ['Motor repair or replacement', 'Timer and control panel repair', 'Drain system cleaning and repair', 'Belt and pulley replacement', 'Complete mechanical overhaul'], price: 'Starting at ₹499', image: '/images/semi-washing-machine.jpg', category: 'Washing Machine Services' },
  { id: 'automatic-washing-machine', name: 'Fully Automatic Washing Machine Repair & Service', description: 'Comprehensive repair and service for front-loading and top-loading fully automatic washing machines', features: ['PCB and electronic component repair', 'Motor and drive system repair', 'Drum and bearing replacement', 'Door lock mechanism repair', 'Water inlet and drain pump repair'], price: 'Starting at ₹699', image: '/images/automatic-washing-machine.jpg', category: 'Washing Machine Services' },
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = allServices.find(s => s.path === `/services/${serviceId}` || s.id === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="text-primary-600 font-semibold hover:underline">Back to All Services</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={service.image} alt={service.name} className="w-full h-64 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
          <p className="text-gray-700 mb-6">{service.description}</p>
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">What's Included:</h3>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <MdCheckCircle className="text-primary-500 mr-2 flex-shrink-0" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <span className="text-primary-600 font-bold text-xl">{service.price}</span>
            <Link to="/services" className="text-primary-600 font-semibold hover:underline flex items-center">
              All Services <MdArrowForward className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 