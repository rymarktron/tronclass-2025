'use client';

import { EnhancedPieChart, EnhancedBarChart, ChartContainer } from '@/components/charts/ChartLibrary';
import postTronData from '@/public/survey-data/8_post_tron.json';
import reflectionsData from '@/public/survey-data/9_reflections_and_future.json';

const FuturePlansPage = () => {
  // Workforce Plans
  const workforceData = {
    labels: ['Yes', 'No', 'Undecided', 'Eventually'],
    datasets: [{
      data: [
        postTronData.postGraduationPlans.workforcePlans.responses.yes,
        postTronData.postGraduationPlans.workforcePlans.responses.no,
        postTronData.postGraduationPlans.workforcePlans.responses.undecided,
        postTronData.postGraduationPlans.workforcePlans.responses.eventually,
      ],
    }],
  };

  // Further Education Plans
  const educationData = {
    labels: ['Yes', 'No', 'Maybe'],
    datasets: [{
      data: [
        postTronData.postGraduationPlans.furtherEducation.responses.yes,
        postTronData.postGraduationPlans.furtherEducation.responses.no,
        postTronData.postGraduationPlans.furtherEducation.responses.maybe,
      ],
    }],
  };

  // Current Employment Status
  const employmentData = {
    labels: ['Employed (Signed Offer)', 'Not Employed'],
    datasets: [{
      data: [
        postTronData.postGraduationPlans.currentEmployment.responses.yes,
        postTronData.postGraduationPlans.currentEmployment.responses.no,
      ],
    }],
  };

  // Top Companies (Tesla, ATS, Startup, etc.)
  const topCompanies = Object.entries(postTronData.postGraduationPlans.employedCompanies.topCompanies)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 8);

  const companyData = {
    labels: topCompanies.map(([company]) => company.charAt(0).toUpperCase() + company.slice(1)),
    datasets: [{
      label: 'Number of Students',
      data: topCompanies.map(([,count]) => count),
    }],
  };

  // Role Categories
  const roleCategories = postTronData.postGraduationPlans.positionTitles.roleCategories;
  const roleCategoryData = {
    labels: Object.keys(roleCategories).map(role => 
      role.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    ),
    datasets: [{
      label: 'Number of Students',
      data: Object.values(roleCategories),
    }],
  };

  // Special Plans Categories
  const specialPlansData = {
    labels: ['Entrepreneurship', 'Law School', 'Teaching', 'Sleep'],
    datasets: [{
      data: [
        postTronData.postGraduationPlans.specialPlans.categories.entrepreneurship,
        postTronData.postGraduationPlans.specialPlans.categories.law_school,
        postTronData.postGraduationPlans.specialPlans.categories.teaching,
        postTronData.postGraduationPlans.specialPlans.categories.sleep,
      ],
    }],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-gray-200 to-yellow-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Future Plans</h1>
          <p className="text-lg text-gray-600">
            Post-graduation plans and career aspirations of Mechatronics Engineering Class of 2025
          </p>
        </div>

        {/* Top Row - Main Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <ChartContainer 
            title="Entering Workforce"
            subtitle={postTronData.postGraduationPlans.workforcePlans.question}
          >
            <EnhancedPieChart 
              data={workforceData} 
              colorTheme="gold"
              showTitle={false}
            />
          </ChartContainer>

          <ChartContainer 
            title="Further Education Plans"
            subtitle={postTronData.postGraduationPlans.furtherEducation.question}
          >
            <EnhancedPieChart 
              data={educationData} 
              colorTheme="bronze"
              showTitle={false}
            />
          </ChartContainer>

          <ChartContainer 
            title="Current Employment Status"
            subtitle={postTronData.postGraduationPlans.currentEmployment.question}
          >
            <EnhancedPieChart 
              data={employmentData} 
              colorTheme="silver"
              showTitle={false}
            />
          </ChartContainer>
        </div>

        {/* Second Row - Career Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChartContainer 
            title="Top Employers"
            subtitle="Companies where students will be working"
          >
            <EnhancedBarChart 
              data={companyData} 
              colorTheme="gold"
              showTitle={false}
            />
          </ChartContainer>

          <ChartContainer 
            title="Role Categories"
            subtitle="Types of positions students are taking"
          >
            <EnhancedBarChart 
              data={roleCategoryData} 
              colorTheme="bronze"
              showTitle={false}
            />
          </ChartContainer>
        </div>

        {/* Special Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChartContainer 
            title="Alternative Plans"
            subtitle="Special future plans beyond traditional workforce entry"
          >
            <EnhancedPieChart 
              data={specialPlansData} 
              colorTheme="mixed"
              showTitle={false}
            />
          </ChartContainer>

          {/* Notable Special Plans */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Notable Future Plans</h2>
            <div className="space-y-3">
              {postTronData.postGraduationPlans.specialPlans.responses.map((plan, index) => (
                <div key={index} className="bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg border-l-4 border-amber-400">
                  <p className="text-gray-700 italic">&ldquo;{plan}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* First Year Goals Preview */}
        <div className="mb-8">
          <ChartContainer 
            title="First Year After Graduation Goals"
            subtitle="What students hope to achieve professionally and personally"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {reflectionsData.futureAchievements.responses.slice(0, 12).map((goal, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-gray-700 italic mb-2">&ldquo;{goal.response}&rdquo;</p>
                  <div className="mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      goal.tone === 'aspirational' ? 'bg-yellow-100 text-yellow-800' :
                      goal.tone === 'humorous' ? 'bg-amber-100 text-amber-800' :
                      goal.tone === 'practical' ? 'bg-gray-100 text-gray-800' :
                      'bg-bronze-100 text-bronze-800'
                    }`}>
                      {goal.tone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ChartContainer>
        </div>

        {/* Statistics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((postTronData.postGraduationPlans.currentEmployment.responses.yes / 
                (postTronData.postGraduationPlans.currentEmployment.responses.yes + postTronData.postGraduationPlans.currentEmployment.responses.no)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Have Job Offers</div>
          </div>
          <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {postTronData.postGraduationPlans.employedCompanies.topCompanies.tesla}
            </div>
            <div className="text-sm opacity-90">Going to Tesla</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {postTronData.postGraduationPlans.positionTitles.roleCategories.software_engineer}
            </div>
            <div className="text-sm opacity-90">Software Engineers</div>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-yellow-700 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {postTronData.postGraduationPlans.specialPlans.categories.entrepreneurship}
            </div>
            <div className="text-sm opacity-90">Starting Startups</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePlansPage;