'use client';

import React, { useState } from 'react';
import { Settings, Zap, Monitor, Sliders, Palette, Bot, Lightbulb, Cpu, Heart } from 'lucide-react';

interface Course {
  code: string;
  name: string;
  credits: number;
  term: string;
  description: string;
  category: string;
}

const CurriculumMap: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const courses: Course[] = [
    // 1A
    { code: 'MTE 100', name: 'Intro to Mechatronics & Engineering Graphics', credits: 0.75, term: '1A', description: 'Design process, CAD, engineering graphics', category: 'mechanical' },
    { code: 'MTE 121', name: 'Digital Computation', credits: 0.50, term: '1A', description: 'Computer hardware/software, algorithms', category: 'software' },
    // 1B
    { code: 'MTE 120', name: 'Circuits', credits: 0.75, term: '1B', description: 'DC/AC analysis, transient response', category: 'electrical' },
    { code: 'MTE 111', name: 'Structure and Properties of Materials', credits: 0.50, term: '1B', description: 'Material properties, metals, polymers', category: 'mechanical' },
    { code: 'MTE 119', name: 'Statics', credits: 0.50, term: '1B', description: 'Force systems, equilibrium, trusses', category: 'mechanical' },
    { code: 'MTE 140', name: 'Algorithms and Data Structures', credits: 0.50, term: '1B', description: 'Software design, data structures', category: 'software' },
    // 2A
    { code: 'MTE 201', name: 'Experimental Measurement & Statistical Analysis', credits: 0.50, term: '2A', description: 'Error analysis, statistics', category: 'controls' },
    { code: 'MTE 202', name: 'Ordinary Differential Equations', credits: 0.50, term: '2A', description: 'ODEs, Laplace transforms', category: 'controls' },
    { code: 'MTE 219', name: 'Mechanics of Deformable Solids', credits: 0.50, term: '2A', description: 'Stress-strain, tension, bending', category: 'mechanical' },
    // 2B
    { code: 'MTE 203', name: 'Advanced Calculus', credits: 0.50, term: '2B', description: 'Multivariable calculus, Fourier series', category: 'controls' },
    { code: 'MTE 204', name: 'Numerical Methods', credits: 0.50, term: '2B', description: 'Numerical integration, eigenvalues', category: 'controls' },
    { code: 'MTE 220', name: 'Sensors and Instrumentation', credits: 0.50, term: '2B', description: 'Op-amps, transducers, signal conditioning', category: 'electrical' },
    { code: 'MTE 241', name: 'Computer Structures & Real-Time Systems', credits: 0.50, term: '2B', description: 'OS concepts, memory management', category: 'software' },
    { code: 'MTE 262', name: 'Microprocessors and Digital Logic', credits: 0.50, term: '2B', description: 'Logic gates, FPGAs, PLCs', category: 'electrical' },
    // 3A
    { code: 'MTE 309', name: 'Thermodynamics and Heat Transfer', credits: 0.50, term: '3A', description: 'Energy analysis, entropy, heat transfer', category: 'mechanical' },
    { code: 'MTE 320', name: 'Actuators & Power Electronics', credits: 0.50, term: '3A', description: 'Power circuits, PWM, motor control', category: 'electrical' },
    { code: 'MTE 321', name: 'Design and Dynamics of Machines', credits: 0.50, term: '3A', description: 'Mechanisms, kinematic analysis', category: 'mechanical' },
    { code: 'MTE 325', name: 'Microprocessor Systems and Interfacing', credits: 0.50, term: '3A', description: 'Parallel/serial interfacing, buses', category: 'electrical' },
    // 3B
    { code: 'MTE 322', name: 'Electromechanical Machine Design', credits: 0.50, term: '3B', description: 'Integrated design, gearing, motors', category: 'design' },
    { code: 'MTE 360', name: 'Automatic Control Systems', credits: 0.50, term: '3B', description: 'Feedback control, stability, state space', category: 'controls' },
    { code: 'MTE 380', name: 'Mechatronics Design Workshop', credits: 0.50, term: '3B', description: 'Design process, prototyping', category: 'design' },
    // 4A
    { code: 'MTE 481', name: 'Mechatronics Design Project', credits: 0.50, term: '4A', description: 'Individual/group design', category: 'design' },
    // 4B
    { code: 'MTE 482', name: 'Mechatronics Engineering Project', credits: 0.50, term: '4B', description: 'Prototyping, presentations, pitch', category: 'design' },
  ];

  const categories = [
    { id: 'mechanical', name: 'Mechanical', color: 'bg-orange-100 border-orange-500 text-orange-900', icon: <Settings className="w-5 h-5" /> },
    { id: 'electrical', name: 'Electrical', color: 'bg-yellow-100 border-yellow-500 text-yellow-900', icon: <Zap className="w-5 h-5" /> },
    { id: 'software', name: 'Software', color: 'bg-blue-100 border-blue-500 text-blue-900', icon: <Monitor className="w-5 h-5" /> },
    { id: 'controls', name: 'Controls', color: 'bg-purple-100 border-purple-500 text-purple-900', icon: <Sliders className="w-5 h-5" /> },
    { id: 'design', name: 'Design', color: 'bg-red-100 border-red-500 text-red-900', icon: <Palette className="w-5 h-5" /> },
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : '';
  };

  const terms = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B'];
  const years = [
    { year: 1, label: 'First Year', terms: ['1A', '1B'] },
    { year: 2, label: 'Second Year', terms: ['2A', '2B'] },
    { year: 3, label: 'Third Year', terms: ['3A', '3B'] },
    { year: 4, label: 'Fourth Year', terms: ['4A', '4B'] },
  ];

  const getCoursesForTerm = (term: string) => {
    return courses.filter(c => c.term === term);
  };

  const getFilteredCourses = (courses: Course[]) => {
    if (!selectedCategory) return courses;
    return courses.filter(c => c.category === selectedCategory);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mechatronics Curriculum Map
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your four-year journey through engineering disciplines
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Discipline</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              All Courses
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all border-2 ${
                  selectedCategory === category.id
                    ? category.color
                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline View */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Timeline</h2>
          
          <div className="space-y-12">
            {years.map((yearGroup, yearIndex) => (
              <div key={yearGroup.year}>
                {/* Year Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white font-bold text-lg">
                    {yearGroup.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{yearGroup.label}</h3>
                  {yearIndex < years.length - 1 && (
                    <div className="flex-1 h-0.5 bg-gray-300 ml-4"></div>
                  )}
                </div>

                {/* Terms in Year */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-16">
                  {yearGroup.terms.map(term => {
                    const termCourses = getFilteredCourses(getCoursesForTerm(term));
                    const totalCredits = termCourses.reduce((sum, c) => sum + c.credits, 0);

                    return (
                      <div key={term} className=" border-gray-300 pl-6 pb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-4 h-4 rounded-full bg-gray-400 -ml-8"></div>
                          <h4 className="text-lg font-bold text-gray-900">
                            {term === '1A' || term === '2A' || term === '3A' || term === '4A' ? 'Fall' : 'Winter'}
                          </h4>
                        </div>

                        {/* Courses */}
                        <div className="space-y-3">
                          {termCourses.length > 0 ? (
                            termCourses.map(course => (
                              <div
                                key={course.code}
                                className={`p-4 rounded-lg  transition-all ${
                                  getCategoryColor(course.category)
                                }`}
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-900">{course.code}</div>
                                    <div className="text-sm text-gray-700 mt-1">{course.name}</div>
                                    <div className="text-xs text-gray-600 mt-1">{course.description}</div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="p-4 text-gray-500 italic">
                              No courses in selected discipline
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumMap;
