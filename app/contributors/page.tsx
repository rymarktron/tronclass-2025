'use client';

import { Heart, Github, ExternalLink } from 'lucide-react';
import PageContainer from '@/components/PageContainer';

export default function ContributorsPage() {
  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto">
        {/* Main Acknowledgment Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contributors</h1>
          <p className="text-lg text-gray-600">
            A heartfelt thank you to everyone who contributed to the Class of 2025 survey and website.
          </p>
        </div>
        {/* Special Thanks Section */}
        <div className="bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-2xl p-8 md:p-12 border-2 border-amber-200 mb-16">
          <div className="flex items-start gap-4">
            <Heart className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Thanks</h2>

              <p className="text-gray-800 mb-4">
              Thank you to Jesse, Ryan, Nathan, and Alvin for creating survey and leading the design and deployment of the site.
                </p>
                <p className="text-gray-800 mb-4">
                To the 2022 and 2020 classes, and to all the upper years who mentored us, supported us, and showed us 
                what it means to be part of the Mechatronics community:
              </p>
            </div>
          </div>
        </div>

        {/* Upper Years Projects Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Previous Tron Class Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2022 Class */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                  <Github className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tron Class of 2022</h3>
              </div>
              <p className="text-gray-700 mb-6">
                The 2022 class created one of the first comprehensive class profile surveys, 
                setting the gold standard for documentation and self-reflection in the Mechatronics program.
              </p>
              <a 
                href="https://nielmistry.github.io/tron2022classprofile/index.html?utm_source=reddit&utm_medium=uwaterloo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all"
              >
                View 2022 Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* 2020 Class */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                  <Github className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tron Class of 2020</h3>
              </div>
              <p className="text-gray-700 mb-6">
                The 2020 class pioneered the concept of creating a comprehensive class profile survey, 
                breaking new ground and inspiring future generations to document their experiences.
              </p>
              <a 
                href="https://tron2020classprofile.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all"
              >
                View 2020 Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}