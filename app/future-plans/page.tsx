'use client';

import { EnhancedPieChart, EnhancedBarChart, ChartContainer } from '@/components/charts/ChartLibrary';
import PageContainer from '@/components/PageContainer';
import PostTron from '@/public/survey-data/8_post_tron.json';
import reflectionsData from '@/public/survey-data/9_reflections_and_future.json';

const FuturePlansPage = () => {
  // Workforce Plans
  const workforceData = {
    labels: ['Yes', 'No', 'Undecided', 'Eventually'],
    datasets: [{
      data: [
        PostTron.postGraduationPlans.workforcePlans.responses.yes,
        PostTron.postGraduationPlans.workforcePlans.responses.no,
        PostTron.postGraduationPlans.workforcePlans.responses.undecided,
        PostTron.postGraduationPlans.workforcePlans.responses.eventually,
      ],
    }],
  };

  // Further Education Plans
  const educationData = {
    labels: ['Yes', 'No', 'Maybe'],
    datasets: [{
      data: [
        PostTron.postGraduationPlans.furtherEducation.responses.yes,
        PostTron.postGraduationPlans.furtherEducation.responses.no,
        PostTron.postGraduationPlans.furtherEducation.responses.maybe,
      ],
    }],
  };

  // Current Employment Status
  const employmentData = {
    labels: ['Employed (Signed Offer)', 'Not Employed'],
    datasets: [{
      data: [
        PostTron.postGraduationPlans.currentEmployment.responses.yes,
        PostTron.postGraduationPlans.currentEmployment.responses.no,
      ],
    }],
  };

  // Top Companies (Tesla, ATS, Startup, etc.)
  const topCompanies = Object.entries(PostTron.postGraduationPlans.employedCompanies.topCompanies)
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
  const roleCategories = PostTron.postGraduationPlans.positionTitles.roleCategories;
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
        PostTron.postGraduationPlans.specialPlans.categories.entrepreneurship,
        PostTron.postGraduationPlans.specialPlans.categories.law_school,
        PostTron.postGraduationPlans.specialPlans.categories.teaching,
        PostTron.postGraduationPlans.specialPlans.categories.sleep,
      ],
    }],
  };

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Future Plans</h1>
          <p className="text-lg text-gray-600">
            Post-graduation plans and career aspirations of Mechatronics Engineering Class of 2025
          </p>
        </div>

        {/* Top Row - Main Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <ChartContainer 
              title="Entering Workforce"
              subtitle={PostTron.postGraduationPlans.workforcePlans.question}
            >
              <EnhancedPieChart 
                data={workforceData} 
                colorTheme="gold"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-yellow-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                Most graduates are <strong>committing to the workforce immediately</strong>, with a significant portion considering further education or taking time. 
                This reflects confidence in their engineering credentials and strong job market demand.
              </p>
            </div>
          </div>

          <div>
            <ChartContainer 
              title="Further Education Plans"
              subtitle={PostTron.postGraduationPlans.furtherEducation.question}
            >
              <EnhancedPieChart 
                data={educationData} 
                colorTheme="bronze"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-amber-50 p-4 rounded-lg border-amber-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                <strong>Graduate school is on many students' radar</strong>, whether immediately or eventually. 
                This aligns with Mechatronics' strong academic foundation and the competitive advantage of advanced degrees in tech and research fields.
              </p>
            </div>
          </div>

          <div>
            <ChartContainer 
              title="Current Employment Status"
              subtitle={PostTron.postGraduationPlans.currentEmployment.question}
            >
              <EnhancedPieChart 
                data={employmentData} 
                colorTheme="silver"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-gray-50 p-4 rounded-lg border-gray-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                <strong>Strong employment numbers</strong> demonstrate the value of a Mechatronics degree in the job market. 
                Employers actively recruit Waterloo engineers, and the co-op program provides direct pathways to full-time offers.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - Career Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
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
            {/* Analysis */}
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-yellow-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                <strong>Top tech and manufacturing companies</strong> are recruiting our graduates. 
                This demonstrates that Mechatronics engineers are highly sought-after across industries—from automotive and aerospace to robotics and AI companies.
              </p>
            </div>
          </div>

          <div>
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
            {/* Analysis */}
            <div className="mt-4 bg-amber-50 p-4 rounded-lg border-amber-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                <strong>Role diversity reflects Mechatronics' versatility</strong>—from software engineering to mechanical design to leadership positions. 
                Our graduates succeed not just as individual contributors but across the entire career spectrum.
              </p>
            </div>
          </div>
        </div>

        {/* Special Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
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
            {/* Analysis */}
            <div className="mt-4 bg-purple-50 p-4 rounded-lg border-purple-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                <strong>Entrepreneurship and non-traditional paths</strong> are part of the Tron narrative. 
                Some graduates are starting companies, pursuing law school, teaching, or taking time to rest—showing the program empowers diverse life paths.
              </p>
            </div>
          </div>

          {/* Notable Special Plans */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Notable Future Plans</h2>
            <div className="space-y-3">
              {PostTron.postGraduationPlans.specialPlans.responses.map((plan, index) => (
                <div key={index} className="bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg  border-amber-400">
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
      </div>
    </PageContainer>
  );
};export default FuturePlansPage;