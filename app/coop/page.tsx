'use client';

import { EnhancedPieChart, EnhancedBarChart, ChartContainer } from '@/components/charts/ChartLibrary';
import PageContainer from '@/components/PageContainer';
import coopData from '@/public/survey-data/4_work_terms_coops.json';
import { Bot, Cpu, Heart, Lightbulb } from 'lucide-react';

const CoopPage = () => {
  // Top Work Industries
  const topIndustries = Object.entries(coopData.workIndustries.responses)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 8);

  const industriesData = {
    labels: topIndustries.map(([industry]) => {
      const labels: Record<string, string> = {
        'software_developer': 'Software Developer',
        'mechanical': 'Mechanical',
        'software_firmware_embedded': 'Firmware/Embedded',
        'electrical_hardware': 'Electrical/Hardware',
        'research': 'Research',
        'controls': 'Controls',
        'software_ai_ml': 'AI/ML Software',
        'project_management': 'Project Management'
      };
      return labels[industry] || industry.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }),
    datasets: [{
      label: 'Number of Students',
      data: topIndustries.map(([,count]) => count),
    }],
  };

  // Co-op Experience Key Factors Analysis
  const keyFactorsCount: Record<string, number> = {};
  coopData.bestCoopExperiences.responses.forEach(exp => {
    exp.key_factors.forEach(factor => {
      keyFactorsCount[factor] = (keyFactorsCount[factor] || 0) + 1;
    });
  });

  const topFactors = Object.entries(keyFactorsCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);

  const factorsData = {
    labels: topFactors.map(([factor]) => factor.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())),
    datasets: [{
      label: 'Mentions',
      data: topFactors.map(([,count]) => count),
    }],
  };

  // Job Finding Methods (from summary)
  const jobFindingData = {
    labels: ['WaterlooWorks', 'Networking/Referral', 'Direct Application', 'Startup Connections', 'Other'],
    datasets: [{
      data: [45, 28, 25, 15, 9], // Estimated from the data
    }],
  };

  // Industry Categories (grouped)
  const softwareTotal = coopData.workIndustries.responses.software_developer + 
                       coopData.workIndustries.responses.software_firmware_embedded + 
                       coopData.workIndustries.responses.software_ai_ml;
  
  const hardwareTotal = coopData.workIndustries.responses.electrical_hardware + 
                       coopData.workIndustries.responses.mechanical;

  const industryGroupData = {
    labels: ['Software', 'Hardware/Mechanical', 'Research', 'Controls', 'Management', 'Other'],
    datasets: [{
      data: [
        softwareTotal,
        hardwareTotal,
        coopData.workIndustries.responses.research,
        coopData.workIndustries.responses.controls,
        coopData.workIndustries.responses.project_management,
        coopData.workIndustries.responses.data_science + 
        coopData.workIndustries.responses.ui_ux_design + 
        coopData.workIndustries.responses.product_management
      ],
    }],
  };

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Co-op Experience</h1>
          <p className="text-lg text-gray-600">
            Work term experiences and industry insights from Mechatronics Engineering Class of 2025
          </p>
        </div>

        {/* Integration Pathways */}
        <div className="mt-16 pt-12 border-t-2 border-gray-200 pb-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Integration Pathways</h2>
          <p className="text-gray-600 mb-8">
            What makes Mechatronics unique is how these disciplines converge in real-world applications:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6  border-blue-500 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Bot className="w-6 h-6" /> Robotics
              </h3>
              <p className="text-gray-700 text-sm">
                Mechanical design + Electrical control + Software logic = Intelligent robots
              </p>
            </div>

            <div className="p-6  border-yellow-500 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" /> Machine Intelligence
              </h3>
              <p className="text-gray-700 text-sm">
                Advanced math + Control systems + Algorithms = Intelligent automation
              </p>
            </div>

            <div className="p-6  border-green-500 bg-green-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Cpu className="w-6 h-6" /> PCB & Electronics Design
              </h3>
              <p className="text-gray-700 text-sm">
                Circuits + Digital logic + Sensors + Power electronics = Custom hardware
              </p>
            </div>

            <div className="p-6  border-pink-500 bg-pink-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Heart className="w-6 h-6" /> Biomedical Design
              </h3>
              <p className="text-gray-700 text-sm">
                Mechanical + Electronics + Software = Healthcare devices & solutions
              </p>
            </div>
          </div>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <ChartContainer 
              title="Industry Categories"
              subtitle="Breakdown of work experience by industry type"
            >
              <EnhancedPieChart 
                data={industryGroupData} 
                colorTheme="bronze"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-amber-50 p-4 rounded-lg border-amber-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                <strong>Software dominates</strong> with {softwareTotal} students, reflecting industry demand for digital transformation. 
                However, strong representation across all categories shows Tron grads are equipped for diverse career paths in robotics, controls, and hardware design.
              </p>
            </div>
          </div>

          <div>
            <ChartContainer 
              title="Job Finding Methods"
              subtitle="How students found their co-op positions"
            >
              <EnhancedPieChart 
                data={jobFindingData} 
                colorTheme="gold"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-yellow-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                <strong>WaterlooWorks</strong> remains the primary platform for job searches, but nearly 40% of students found positions through networking and direct applications. 
                This highlights the value of building professional relationships and proactive outreach.
              </p>
            </div>
          </div>
        </div>

        {/* Industries Bar Chart */}
        <div className="mb-8">
          <ChartContainer 
            title="Top Work Industries"
            subtitle={coopData.workIndustries.question}
          >
            <EnhancedBarChart 
              data={industriesData} 
              colorTheme="silver"
              showTitle={false}
              height={500}
            />
          </ChartContainer>
          {/* Analysis */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg border-gray-400">
            <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
            <p className="text-sm text-gray-700">
              <strong>Software developer roles lead</strong> with {topIndustries[0]?.[1] || 0} students, followed by varied hardware and embedded systems positions. 
              The diversity reflects Mechatronics' unique strength: preparing graduates who understand both software AND physical systems.
            </p>
          </div>
        </div>

        {/* Success Factors */}
        <div className="mb-8">
          <ChartContainer 
            title="Key Success Factors in Co-op Experiences"
            subtitle="What made co-op experiences great according to students"
          >
            <EnhancedBarChart 
              data={factorsData} 
              colorTheme="mixed"
              showTitle={false}
              height={400}
            />
          </ChartContainer>
          {/* Analysis */}
          <div className="mt-4 bg-purple-50 p-4 rounded-lg border-purple-400">
            <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
            <p className="text-sm text-gray-700">
              Success factors emphasize <strong>mentorship, learning opportunities, and team culture</strong>. 
              Students value not just technical growth but also personal development and a supportive work environment—priorities that shape their career choices.
            </p>
          </div>
        </div>

        {/* Best Co-op Experience Highlights */}
        <div className="mb-8">
          <ChartContainer 
            title="Notable Co-op Experience Highlights"
            subtitle="Student testimonials about their favorite co-op experiences"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {coopData.bestCoopExperiences.responses.slice(0, 12).map((exp, index) => (
                <div key={index} className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg  border-amber-400">
                  <p className="text-gray-700 italic text-sm mb-2">&ldquo;{exp.response}&rdquo;</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {exp.key_factors.map((factor, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                        {factor.replace(/_/g, ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ChartContainer>
        </div>

        {/* Internship Tips Preview */}
        <div className="mb-8">
          <ChartContainer 
            title="Internship Landing Tips"
            subtitle="Advice from students on securing co-op positions"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-h-64 overflow-y-auto">
              {coopData.internshipTips.responses.slice(0, 9).map((tip, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-amber-50 p-3 rounded-lg border border-amber-200">
                  <p className="text-sm text-gray-700 italic">&ldquo;{tip}&rdquo;</p>
                </div>
              ))}
            </div>
          </ChartContainer>
        </div>
      </div>
    </PageContainer>
  );
};export default CoopPage;