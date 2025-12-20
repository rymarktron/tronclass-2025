'use client';

import { EnhancedPieChart, EnhancedBarChart, ChartContainer } from '@/components/charts/ChartLibrary';
import PageContainer from '@/components/PageContainer';
import demographicsData from '@/public/survey-data/2_personal_demographics.json';
import familyData from '@/public/survey-data/3_family_and_household.json';

const DemographicsPage = () => {
  // International Student Pie Chart
  const internationalData = {
    labels: ['Domestic Students', 'International Students'],
    datasets: [{
      data: [
        demographicsData.internationalStudent.responses.no,
        demographicsData.internationalStudent.responses.yes,
      ],
    }],
  };

  // Gender Distribution
  const genderData = {
    labels: ['Male (Cis)', 'Female (Cis)', 'Male (Trans)', 'Female (Trans)', 'Non-binary'],
    datasets: [{
      data: [
        demographicsData.gender.responses.male_cis,
        demographicsData.gender.responses.female_cis,
        demographicsData.gender.responses.male_trans,
        demographicsData.gender.responses.female_trans,
        demographicsData.gender.responses.non_binary,
      ],
    }],
  };

  // Ethnicity Bar Chart
  const ethnicityData = {
    labels: ['White/Caucasian', 'East Asian', 'South Asian', 'Middle East/N. Africa', 'African', 'Caribbean', 'Western European/Mediterranean', 'Jewish', 'Hispanic/Latino'],
    datasets: [{
      label: 'Number of Students',
      data: [
        demographicsData.ethnicity.responses.white_caucasian,
        demographicsData.ethnicity.responses.east_asian,
        demographicsData.ethnicity.responses.south_asian,
        demographicsData.ethnicity.responses.middle_east_north_africa,
        demographicsData.ethnicity.responses.african,
        demographicsData.ethnicity.responses.caribbean,
        demographicsData.ethnicity.responses.western_european_mediterranean,
        demographicsData.ethnicity.responses.jewish,
        demographicsData.ethnicity.responses.hispanic_latino,
      ],
    }],
  };

  // Household Income Distribution
  const incomeData = {
    labels: ['Under $50k', '$50k-$100k', '$100k-$150k', '$150k-$200k', '$200k+'],
    datasets: [{
      data: [
        familyData.householdIncome.responses.under_50k,
        familyData.householdIncome.responses['50k_100k'],
        familyData.householdIncome.responses['100k_150k'],
        familyData.householdIncome.responses['150k_200k'],
        familyData.householdIncome.responses['200k_plus'],
      ],
    }],
  };

  // Sibling Count
  const siblingsData = {
    labels: ['0 siblings', '1 sibling', '2 siblings', '3 siblings', '5+ siblings'],
    datasets: [{
      label: 'Number of Students',
      data: [
        familyData.siblings.responses['0'],
        familyData.siblings.responses['1'],
        familyData.siblings.responses['2'],
        familyData.siblings.responses['3'],
        familyData.siblings.responses['5_plus'],
      ],
    }],
  };

  // Parent Education Level
  const parentEducationData = {
    labels: ['Below Secondary', 'Secondary', 'Post-Secondary', 'Masters', 'PhD'],
    datasets: [{
      data: [
        familyData.parentEducation.responses.below_secondary,
        familyData.parentEducation.responses.secondary,
        familyData.parentEducation.responses.post_secondary,
        familyData.parentEducation.responses.masters,
        familyData.parentEducation.responses.phd,
      ],
    }],
  };

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Demographics</h1>
          <p className="text-lg text-gray-600">
            Personal and family demographics of Mechatronics Engineering Class of 2025
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* International Students */}
          <div>
            <ChartContainer 
              title="International vs Domestic Students"
              subtitle={demographicsData.internationalStudent.question}
            >
              <EnhancedPieChart 
                data={internationalData} 
                colorTheme="gold"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg  border-yellow-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                <strong>{Math.round((demographicsData.internationalStudent.responses.yes / 
                  (demographicsData.internationalStudent.responses.yes + demographicsData.internationalStudent.responses.no)) * 100)}%</strong> of Tron students are international, 
                reflecting Waterloo Engineering's global appeal and attracting top talent from around the world.
              </p>
            </div>
          </div>

          {/* Gender Distribution */}
          <div>
            <ChartContainer 
              title="Gender Distribution"
              subtitle={demographicsData.gender.question}
            >
              <EnhancedPieChart 
                data={genderData} 
                colorTheme="silver"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-gray-50 p-4 rounded-lg  border-gray-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                <strong>{Math.round(((demographicsData.gender.responses.male_cis + demographicsData.gender.responses.male_trans) / 
                  (demographicsData.gender.responses.male_cis + demographicsData.gender.responses.female_cis + demographicsData.gender.responses.male_trans + demographicsData.gender.responses.female_trans + demographicsData.gender.responses.non_binary)) * 100)}% identify as male</strong>, 
                while <strong>{Math.round(((demographicsData.gender.responses.female_cis + demographicsData.gender.responses.female_trans) / 
                  (demographicsData.gender.responses.male_cis + demographicsData.gender.responses.female_cis + demographicsData.gender.responses.male_trans + demographicsData.gender.responses.female_trans + demographicsData.gender.responses.non_binary)) * 100)}% identify as female</strong>. This composition is typical for engineering programs, though diversity initiatives continue to encourage broader participation.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Household Income */}
          <div>
            <ChartContainer 
              title="Household Income Distribution"
              subtitle={familyData.householdIncome.question}
            >
              <EnhancedPieChart 
                data={incomeData} 
                colorTheme="bronze"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-orange-50 p-4 rounded-lg  border-orange-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                Income distribution shows significant economic diversity within the class, with representation across multiple brackets. 
                This reflects the varied socioeconomic backgrounds of engineering students at Waterloo.
              </p>
            </div>
          </div>

          {/* Parent Education */}
          <div>
            <ChartContainer 
              title="Parent Education Level"
              subtitle={familyData.parentEducation.question}
            >
              <EnhancedPieChart 
                data={parentEducationData} 
                colorTheme="mixed"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-purple-50 p-4 rounded-lg  border-purple-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                Strong educational background in families, with <strong>{Math.round((familyData.parentEducation.responses.post_secondary + 
                  familyData.parentEducation.responses.masters + familyData.parentEducation.responses.phd) / 
                  Object.values(familyData.parentEducation.responses).reduce((a, b) => a + b, 0) * 100)}%</strong> of parents having post-secondary education. 
                This indicates high academic achievement runs in families.
              </p>
            </div>
          </div>
        </div>

        {/* Bar Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ethnicity */}
          <div>
            <ChartContainer 
              title="Ethnic Background"
              subtitle={demographicsData.ethnicity.question}
            >
              <EnhancedBarChart 
                data={ethnicityData} 
                colorTheme="bronze"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-amber-50 p-4 rounded-lg  border-amber-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                Significant ethnic diversity with representation across multiple backgrounds, including 
                <strong> {demographicsData.ethnicity.responses.east_asian} East Asian</strong> (including Chinese) and <strong> {demographicsData.ethnicity.responses.south_asian} South Asian</strong> (including Indian) students, 
                reflecting Canada's multicultural engineering community.
              </p>
            </div>
          </div>

          {/* Siblings */}
          <div>
            <ChartContainer 
              title="Number of Siblings"
              subtitle={familyData.siblings.question}
            >
              <EnhancedBarChart 
                data={siblingsData} 
                colorTheme="gold"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg  border-yellow-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                Family structure varies widely, with <strong>{Math.max(...siblingsData.datasets[0].data)} students</strong> in the most common category. 
                This diversity in family sizes reflects different cultural and personal family planning approaches.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((demographicsData.internationalStudent.responses.yes / 
                (demographicsData.internationalStudent.responses.yes + demographicsData.internationalStudent.responses.no)) * 100)}%
            </div>
            <div className="text-sm opacity-90">International</div>
          </div>
          <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {familyData.householdIncome.responses['200k_plus']}
            </div>
            <div className="text-sm opacity-90">$200k+ Income</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {familyData.parentEducation.responses.phd + familyData.parentEducation.responses.masters}
            </div>
            <div className="text-sm opacity-90">Graduate Degrees</div>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-yellow-700 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {familyData.stemHousehold.responses.yes}
            </div>
            <div className="text-sm opacity-90">STEM Households</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DemographicsPage;