'use client';

import { EnhancedPieChart, EnhancedBarChart, ChartContainer } from '@/components/charts/ChartLibrary';
import coopData from '@/public/survey-data/4_work_terms_coops.json';

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
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-gray-200 to-yellow-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Co-op Experience</h1>
          <p className="text-lg text-gray-600">
            Work term experiences and industry insights from Mechatronics Engineering Class of 2025
          </p>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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

        {/* Statistics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {coopData.workIndustries.responses.software_developer}
            </div>
            <div className="text-sm opacity-90">Software Developers</div>
          </div>
          <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {coopData.workIndustries.responses.mechanical}
            </div>
            <div className="text-sm opacity-90">Mechanical Roles</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {coopData.workIndustries.responses.research}
            </div>
            <div className="text-sm opacity-90">Research Positions</div>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-yellow-700 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {coopData.bestCoopExperiences.responses.length}
            </div>
            <div className="text-sm opacity-90">Experience Stories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoopPage;