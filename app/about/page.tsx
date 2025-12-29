'use client';

import CurriculumMap from "@/components/CurriculumMap";
import PageContainer from "@/components/PageContainer";
import { Rocket, Settings, Zap, Monitor, Wrench, Target, Bot, Lightbulb, Cpu, Heart, Users, GraduationCap, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-gray-200 to-yellow-100">
      {/* Hero Section with Group Photo */}
      <div className="relative w-full h-96 md:h-screen overflow-hidden">
        <img
          src="/TRON GROUP CLASS PHOTO.png"
          alt="Mechatronics Engineering Class of 2025"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-16">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mechatronics Engineering</h1>
            <p className="text-lg md:text-2xl opacity-90">Class of 2025</p>
            <p className="text-sm md:text-lg mt-4 opacity-75">University of Waterloo</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <PageContainer>
        <div className="max-w-6xl mx-auto">
          {/* About the Program Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About the Program</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto"></div>
          </div>

          {/* Program Overview */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-amber-500 to-yellow-600 text-white">
                  <Rocket className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Started in 2008</h3>
                <p className="text-gray-700">
                  One of the newer programs in the larger engineering faculty at Waterloo. Despite being relatively young, 
                  the Mechatronics program has quickly become renowned for its innovative and interdisciplinary approach.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Four Core Engineering Disciplines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg  border-amber-500">
                  <Settings className="w-6 h-6" />
                  <div>
                    <p className="font-semibold text-gray-900">Mechanical Engineering</p>
                    <p className="text-sm text-gray-600">Structural design and mechanics</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg  border-amber-500">
                  <Zap className="w-6 h-6" />
                  <div>
                    <p className="font-semibold text-gray-900">Electrical Engineering</p>
                    <p className="text-sm text-gray-600">Power systems and circuits</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg  border-amber-500">
                  <Monitor className="w-6 h-6" />
                  <div>
                    <p className="font-semibold text-gray-900">Computer Engineering</p>
                    <p className="text-sm text-gray-600">Hardware and embedded systems</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg  border-amber-500">
                  <Wrench className="w-6 h-6" />
                  <div>
                    <p className="font-semibold text-gray-900">Software Engineering</p>
                    <p className="text-sm text-gray-600">Algorithms and applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why It's Challenging */}
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-2xl p-8 border-2 border-amber-200 mb-8">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Why Mechatronics is More Challenging</h3>
                <p className="text-gray-800 mb-4">
                  The unique challenge of Mechatronics lies in its breadth. While other engineering disciplines specialize deeply 
                  in one area, Mechatronics engineers must master <strong>four interconnected fields</strong>. This combination creates powerful synergies:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">→</span>
                    <span><strong>Robotics:</strong> Mechanical design + Electrical control + Software logic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">→</span>
                    <span><strong>Machine Intelligence:</strong> Computer vision + Control systems + AI algorithms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">→</span>
                    <span><strong>PCB Design:</strong> Electrical circuits + Computer engineering + Manufacturing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">→</span>
                    <span><strong>Biomedical Design:</strong> Mechanical + Electrical + Software for healthcare devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Tron Name */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <Bot className="w-8 h-8" />
              <h3 className="text-2xl font-bold text-gray-900">"Tron" - Our Nickname</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Our program is lovingly known as <strong>"Tron"</strong> by students and faculty alike. 
              The name perfectly captures the essence of our discipline — the convergence of mechanical, electrical, computer, 
              and software engineering creating something greater than the sum of its parts, much like the digital world of Tron!
            </p>
          </div>
        </div>

        {/* Cohort System Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Cohort System</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Unified Learning */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8  border-blue-500">
              <div className="text-4xl mb-4">
                <Users className="w-8 h-8 mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shared Classes Across All Years</h3>
              <p className="text-gray-700 mb-4">
                Unlike many engineering disciplines, Mechatronics students in <strong>1A, 1B, 2A, and 2B</strong> share 
                most of their mandatory courses together (except for electives).
              </p>
              <div className="bg-white/70 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  This creates <strong>continuous points of interaction</strong> across year levels, fostering a tight-knit 
                  community and enabling peer mentorship from upper-year students.
                </p>
              </div>
            </div>

            {/* Elective Diversity */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8  border-purple-500">
              <div className="text-4xl mb-4">
                <GraduationCap className="w-8 h-8 mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical & General Electives</h3>
              <p className="text-gray-700 mb-4">
                While most courses are shared, students can customize their education through:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500 font-bold">▪</span>
                  <span><strong>Technical electives</strong> for specialization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500 font-bold">▪</span>
                  <span><strong>4 general electives</strong> for breadth</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500 font-bold">▪</span>
                  <span>These provide additional <strong>connection points</strong> between cohorts</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why This Matters */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why This Cohort System is Special</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-800">
                    <strong>Community Building:</strong> You see the same classmates year after year, creating lasting friendships and support networks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-800">
                    <strong>Collaborative Learning:</strong> Study groups and projects benefit from diverse year levels working together.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-800">
                    <strong>Mentorship:</strong> Upper-year students can directly support and advise newer cohorts.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-800">
                    <strong>Unique Advantage:</strong> Many other engineering faculties don't have this integrated cohort model, 
                    making Mechatronics special.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CurriculumMap />
        </div>
      </PageContainer>
    </div>
  );
}
