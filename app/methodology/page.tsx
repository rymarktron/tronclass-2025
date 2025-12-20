'use client';

import PageContainer from '@/components/PageContainer';

const MethodologyPage = () => {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Survey Methodology</h1>
          <p className="text-lg text-gray-600">
            Understanding how the Class of 2025 survey was conducted
          </p>
        </div>

        {/* Overview */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This survey project captures the diverse experiences and perspectives of the Mechatronics Engineering Class of 2025. 
            Data was collected through two comprehensive survey releases spanning the final year of the program, providing insights 
            into student experiences across academics, co-op placements, personal development, and post-graduation aspirations.
          </p>
        </div>

        {/* Survey Timeline */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Survey Timeline</h2>
          
          <div className="space-y-6">
            {/* Wave 1 */}
            <div className=" border-yellow-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wave 1: Mid-January 2025</h3>
              <p className="text-gray-700 mb-3">
                <strong>Timing:</strong> Released in mid-January after the winter break, capturing students at the beginning of their final term.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-800 font-semibold mb-2">Focus Areas:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Demographics and background information</li>
                  <li>Pre-university experiences and aspirations</li>
                  <li>Family and household context</li>
                  <li>Co-op and work term experiences (completed terms)</li>
                  <li>University experience and academics</li>
                  <li>Health and sports/physical activity</li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm mt-3 italic">
                Captures students' mid-year perspective on their journey through the program.
              </p>
            </div>

            {/* Wave 2 */}
            <div className=" border-purple-500 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wave 2: June 2025 (Post-4B)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Timing:</strong> Released in June after completing 4B (the final term), capturing students' complete university experience.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-800 font-semibold mb-2">Focus Areas:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Complete reflections on the Mechatronics program</li>
                  <li>Mental health and wellness throughout program</li>
                  <li>Relationships and social experiences</li>
                  <li>Personal development and growth</li>
                  <li>Post-graduation plans and aspirations</li>
                  <li>Advice for future students</li>
                  <li>Photography and memories from the program</li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm mt-3 italic">
                Captures students' reflections after completing the entire 4-year program.
              </p>
            </div>
          </div>
        </div>

        {/* Survey Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Survey Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Quantitative Data</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Multiple choice responses</li>
                <li>✓ Rating scales and rankings</li>
                <li>✓ Binary yes/no questions</li>
                <li>✓ Statistical demographic data</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Qualitative Data</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Open-ended text responses</li>
                <li>✓ Personal stories and experiences</li>
                <li>✓ Advice and recommendations</li>
                <li>✓ Commentary and reflections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Participation */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Participation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This survey was administered to members of the Mechatronics Engineering Class of 2025 at the University of Waterloo. 
            Participation was voluntary, with responses collected anonymously to encourage honest and candid feedback.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-800 font-semibold mb-2">Response Categories:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Demographics:</strong> All students reporting background information</li>
              <li>• <strong>Academic/Co-op:</strong> Students with completed work terms</li>
              <li>• <strong>Personal Reflections:</strong> Self-selected participation on reflection questions</li>
              <li>• <strong>Media:</strong> Students contributing photos and memories</li>
            </ul>
          </div>
        </div>

        {/* Data Analysis */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Analysis & Visualization</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All survey responses have been analyzed and presented through:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• <strong>Statistical summaries</strong> showing frequency distributions and percentages</li>
            <li>• <strong>Interactive charts</strong> visualizing trends across categories</li>
            <li>• <strong>Thematic analysis</strong> identifying common patterns in open-ended responses</li>
            <li>• <strong>Comparative views</strong> examining differences across demographic groups</li>
          </ul>
        </div>

        {/* Limitations & Notes */}
        <div className="bg-blue-50  border-blue-500 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Notes</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Self-Selection:</strong> Participation in each section was voluntary, so response rates vary by topic area.
            </li>
            <li>
              <strong>Sampling:</strong> Results represent the perspectives of students who chose to participate and may not represent the entire class equally.
            </li>
            <li>
              <strong>Timeline:</strong> Some questions reflect experiences from earlier in the program, while others capture current perspectives.
            </li>
            <li>
              <strong>Privacy:</strong> All responses have been anonymized to protect student privacy while preserving meaningful insights.
            </li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
};

export default MethodologyPage;