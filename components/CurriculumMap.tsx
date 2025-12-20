'use client';

import React, { useState } from 'react';

interface Course {
  code: string;
  name: string;
  credits: number;
  term: string;
  description: string;
}

interface CategoryNode {
  name: string;
  color: string;
  icon: string;
  courses: Course[];
  bgColor: string;
  borderColor: string;
}

const CurriculumMap: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const courseData: Record<string, CategoryNode> = {
    mechanical: {
      name: 'Mechanical Engineering',
      color: 'text-orange-600',
      icon: '⚙️',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      courses: [
        {
          code: 'MTE 100',
          name: 'Intro to Mechatronics & Engineering Graphics',
          credits: 0.75,
          term: '1A',
          description: 'Design process, CAD, engineering graphics, sketching'
        },
        {
          code: 'MTE 111',
          name: 'Structure and Properties of Materials',
          credits: 0.50,
          term: '1B/2A',
          description: 'Material properties, metals, polymers, ceramics'
        },
        {
          code: 'MTE 119',
          name: 'Statics',
          credits: 0.50,
          term: '1B/2A',
          description: 'Force systems, equilibrium, trusses, beams'
        },
        {
          code: 'MTE 219',
          name: 'Mechanics of Deformable Solids',
          credits: 0.50,
          term: '2A',
          description: 'Stress-strain, tension, bending, torsion'
        },
        {
          code: 'MTE 321',
          name: 'Design and Dynamics of Machines',
          credits: 0.50,
          term: '3A',
          description: 'Mechanisms, kinematic analysis, shaft design'
        },
        {
          code: 'MTE 309',
          name: 'Thermodynamics and Heat Transfer',
          credits: 0.50,
          term: '3A',
          description: 'Energy analysis, entropy, heat transfer'
        }
      ]
    },
    electrical: {
      name: 'Electrical Engineering',
      color: 'text-yellow-600',
      icon: '⚡',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      courses: [
        {
          code: 'MTE 120',
          name: 'Circuits',
          credits: 0.75,
          term: '1B/2A',
          description: 'DC/AC analysis, transient response, transistors'
        },
        {
          code: 'MTE 220',
          name: 'Sensors and Instrumentation',
          credits: 0.50,
          term: '2B',
          description: 'Op-amps, transducers, signal conditioning, filters'
        },
        {
          code: 'MTE 262',
          name: 'Microprocessors and Digital Logic',
          credits: 0.50,
          term: '2B/3A',
          description: 'Logic gates, FPGAs, PLCs, assembly language'
        },
        {
          code: 'MTE 320',
          name: 'Actuators & Power Electronics',
          credits: 0.50,
          term: '3A',
          description: 'Power circuits, H-bridges, PWM, motor control'
        },
        {
          code: 'MTE 325',
          name: 'Microprocessor Systems and Interfacing',
          credits: 0.50,
          term: '3A/3B',
          description: 'Parallel/serial interfacing, buses, DMA'
        }
      ]
    },
    software: {
      name: 'Software Engineering',
      color: 'text-blue-600',
      icon: '💻',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      courses: [
        {
          code: 'MTE 121',
          name: 'Digital Computation',
          credits: 0.50,
          term: '1A',
          description: 'Computer hardware/software, algorithms'
        },
        {
          code: 'MTE 140',
          name: 'Algorithms and Data Structures',
          credits: 0.50,
          term: '1B/2A',
          description: 'Software design, data structures, recursion'
        },
        {
          code: 'MTE 241',
          name: 'Computer Structures & Real-Time Systems',
          credits: 0.50,
          term: '2B',
          description: 'OS concepts, memory, process management'
        }
      ]
    },
    controls: {
      name: 'Control Systems',
      color: 'text-purple-600',
      icon: '🎛️',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      courses: [
        {
          code: 'MTE 201',
          name: 'Experimental Measurement & Statistical Analysis',
          credits: 0.50,
          term: '2A',
          description: 'Error analysis, statistics, hypothesis testing'
        },
        {
          code: 'MTE 202',
          name: 'Ordinary Differential Equations',
          credits: 0.50,
          term: '2A',
          description: 'ODEs, Laplace transforms, systems of equations'
        },
        {
          code: 'MTE 203',
          name: 'Advanced Calculus',
          credits: 0.50,
          term: '2B',
          description: 'Multivariable calculus, Fourier series, vectors'
        },
        {
          code: 'MTE 204',
          name: 'Numerical Methods',
          credits: 0.50,
          term: '2B',
          description: 'Numerical integration, eigenvalues, PDEs'
        },
        {
          code: 'MTE 360',
          name: 'Automatic Control Systems',
          credits: 0.50,
          term: '3B',
          description: 'Feedback control, stability, state space, digital control'
        }
      ]
    },
    design: {
      name: 'Design & Integration',
      color: 'text-red-600',
      icon: '🎨',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      courses: [
        {
          code: 'MTE 322',
          name: 'Electromechanical Machine Design',
          credits: 0.50,
          term: '3B',
          description: 'Integrated design, gearing, motors, controllers'
        },
        {
          code: 'MTE 380',
          name: 'Mechatronics Design Workshop',
          credits: 0.50,
          term: '3B',
          description: 'Design process, prototyping, competitive design project'
        },
        {
          code: 'MTE 481',
          name: 'Mechatronics Design Project',
          credits: 0.50,
          term: '4A',
          description: 'Individual/group design incorporating all elements'
        },
        {
          code: 'MTE 482',
          name: 'Mechatronics Engineering Project',
          credits: 0.50,
          term: '4B',
          description: 'Prototyping, presentations, product pitch'
        }
      ]
    }
  };

  const getCoursesByTerm = (term: string) => {
    const courses: Course[] = [];
    Object.values(courseData).forEach(category => {
      category.courses.forEach(course => {
        if (course.term.includes(term)) {
          courses.push(course);
        }
      });
    });
    return courses;
  };

  const terms = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-gray-200 to-yellow-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mechatronics Curriculum Map
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A visual guide to your four-year journey through specialized engineering disciplines, 
            integrated with core design projects
          </p>
        </div>

        {/* Category Overview - Mindmap Style */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Course Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(courseData).map(([key, category]) => (
              <div
                key={key}
                className={`${category.bgColor} rounded-xl p-6 border-2 ${category.borderColor} cursor-pointer hover:shadow-lg transition-shadow`}
                onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className={`text-xl font-bold ${category.color}`}>
                    {category.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  {category.courses.length} courses
                </p>
                <div className="text-xs text-gray-600">
                  Total Credits: {(category.courses.reduce((sum, c) => sum + c.credits, 0)).toFixed(2)}
                </div>

                {/* Course List */}
                {expandedCategory === key && (
                  <div className="mt-4 pt-4 border-t-2 border-current border-opacity-20">
                    <ul className="space-y-2">
                      {category.courses.map((course) => (
                        <li key={course.code} className="text-sm">
                          <div className="font-semibold text-gray-900">{course.code}</div>
                          <div className="text-gray-700">{course.name}</div>
                          <div className="text-xs text-gray-600">{course.term}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline View */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Course Timeline</h2>
          
          <div className="space-y-8">
            {/* Year 1 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">1</span>
                First Year
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Term 1A */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">1A (Fall)</h4>
                  <div className="space-y-3">
                    {getCoursesByTerm('1A').map(course => (
                      <div key={course.code} className="p-3 bg-gray-50 rounded-lg border-l-2 border-blue-400">
                        <div className="font-semibold text-gray-900">{course.code}: {course.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{course.credits} credits</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Term 1B */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">1B (Winter)</h4>
                  <div className="space-y-3">
                    {getCoursesByTerm('1B').map(course => (
                      <div key={course.code} className="p-3 bg-gray-50 rounded-lg border-l-2 border-green-400">
                        <div className="font-semibold text-gray-900">{course.code}: {course.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{course.credits} credits</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Year 2 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center">2</span>
                Second Year
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Term 2A */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">2A (Fall)</h4>
                  <div className="space-y-3">
                    {getCoursesByTerm('2A').map(course => (
                      <div key={course.code} className="p-3 bg-gray-50 rounded-lg border-l-2 border-purple-400">
                        <div className="font-semibold text-gray-900">{course.code}: {course.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{course.credits} credits</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Term 2B */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">2B (Winter)</h4>
                  <div className="space-y-3">
                    {getCoursesByTerm('2B').map(course => (
                      <div key={course.code} className="p-3 bg-gray-50 rounded-lg border-l-2 border-orange-400">
                        <div className="font-semibold text-gray-900">{course.code}: {course.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{course.credits} credits</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Year 3 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center">3</span>
                Third Year
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Term 3A */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">3A (Fall)</h4>
                  <div className="space-y-3">
                    {getCoursesByTerm('3A').map(course => (
                      <div key={course.code} className="p-3 bg-gray-50 rounded-lg border-l-2 border-red-400">
                        <div className="font-semibold text-gray-900">{course.code}: {course.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{course.credits} credits</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Term 3B */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">3B (Winter)</h4>
                  <div className="space-y-3">
                    {getCoursesByTerm('3B').map(course => (
                      <div key={course.code} className="p-3 bg-gray-50 rounded-lg border-l-2 border-pink-400">
                        <div className="font-semibold text-gray-900">{course.code}: {course.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{course.credits} credits</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Year 4 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center">4</span>
                Fourth Year
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Term 4A */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">4A (Fall)</h4>
                  <div className="space-y-3">
                    {getCoursesByTerm('4A').map(course => (
                      <div key={course.code} className="p-3 bg-gray-50 rounded-lg border-l-2 border-amber-400">
                        <div className="font-semibold text-gray-900">{course.code}: {course.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{course.credits} credits</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Term 4B */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border-l-4 border-cyan-500">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">4B (Winter)</h4>
                  <div className="space-y-3">
                    {getCoursesByTerm('4B').map(course => (
                      <div key={course.code} className="p-3 bg-gray-50 rounded-lg border-l-2 border-cyan-400">
                        <div className="font-semibold text-gray-900">{course.code}: {course.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{course.credits} credits</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Pathways */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-amber-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Integration Pathways</h2>
          <p className="text-gray-700 mb-8 text-center text-lg">
            What makes Mechatronics unique is how these disciplines converge:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🤖</span> Robotics
              </h3>
              <p className="text-gray-700 mb-3">
                Combine mechanical design (MTE 321), electrical circuits (MTE 120), motors (MTE 320), 
                and software control (MTE 241) to build intelligent robots.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span> Machine Intelligence
              </h3>
              <p className="text-gray-700 mb-3">
                Apply advanced math (MTE 203), control systems (MTE 360), and algorithms (MTE 140) 
                to create intelligent automation.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚡</span> PCB & Electronics Design
              </h3>
              <p className="text-gray-700 mb-3">
                Master circuits (MTE 120), digital logic (MTE 262), sensors (MTE 220), 
                and power electronics (MTE 320) for custom hardware solutions.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏥</span> Biomedical Design
              </h3>
              <p className="text-gray-700 mb-3">
                Integrate mechanical engineering (MTE 219), electronics (MTE 320), 
                and software (MTE 241) to develop healthcare devices.
              </p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Click on any category card above to see all courses in that discipline</p>
        </div>
      </div>
    </div>
  );
};

export default CurriculumMap;
