'use client';

import { EnhancedBarChart, EnhancedPieChart, ChartContainer } from '@/components/charts/ChartLibrary';
import PageContainer from '@/components/PageContainer';
import universityData from '@/public/survey-data/6_university_experience.json';

const SchoolPage = () => {
  // GPA Distribution
  const gpaData = {
    labels: ['91-95', '86-90', '81-85', '76-80', '71-75'],
    datasets: [{
      label: 'Number of Students',
      data: [
        universityData.cumulativeGPA.distribution.excellent_91_95.count,
        universityData.cumulativeGPA.distribution.very_good_86_90.count,
        universityData.cumulativeGPA.distribution.good_81_85.count,
        universityData.cumulativeGPA.distribution.average_76_80.count,
        universityData.cumulativeGPA.distribution.below_average_71_75.count,
      ],
    }],
  };

  // Curriculum Usefulness (1-10 scale)
  const curriculumUsefulnessData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: 'Number of Responses',
      data: [
        universityData.programEvaluation.curriculumUsefulness.responses['1'],
        universityData.programEvaluation.curriculumUsefulness.responses['2'],
        universityData.programEvaluation.curriculumUsefulness.responses['3'],
        universityData.programEvaluation.curriculumUsefulness.responses['4'],
        universityData.programEvaluation.curriculumUsefulness.responses['5'],
        universityData.programEvaluation.curriculumUsefulness.responses['6'],
        universityData.programEvaluation.curriculumUsefulness.responses['7'],
        universityData.programEvaluation.curriculumUsefulness.responses['8'],
        universityData.programEvaluation.curriculumUsefulness.responses['9'],
        universityData.programEvaluation.curriculumUsefulness.responses['10'],
      ],
    }],
  };

  // Program Interest (1-10 scale)
  const programInterestData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: 'Number of Responses',
      data: [
        universityData.programEvaluation.programInterest.responses['1'],
        universityData.programEvaluation.programInterest.responses['2'],
        universityData.programEvaluation.programInterest.responses['3'],
        universityData.programEvaluation.programInterest.responses['4'],
        universityData.programEvaluation.programInterest.responses['5'],
        universityData.programEvaluation.programInterest.responses['6'],
        universityData.programEvaluation.programInterest.responses['7'],
        universityData.programEvaluation.programInterest.responses['8'],
        universityData.programEvaluation.programInterest.responses['9'],
        universityData.programEvaluation.programInterest.responses['10'],
      ],
    }],
  };

  // Program Enjoyment
  const programEnjoymentData = {
    labels: ['Yes', 'Meh'],
    datasets: [{
      data: [
        universityData.programEvaluation.programEnjoyment.responses.yes,
        universityData.programEvaluation.programEnjoyment.responses.meh,
      ],
    }],
  };

  // Favourite Term
  const favouriteTermData = {
    labels: ['1A', '2A', '2B', '3A', '3B', '4A', '4B'],
    datasets: [{
      label: 'Number of Votes',
      data: [
        universityData.programEvaluation.favouriteTerm.responses['1A'],
        universityData.programEvaluation.favouriteTerm.responses['2A'],
        universityData.programEvaluation.favouriteTerm.responses['2B'],
        universityData.programEvaluation.favouriteTerm.responses['3A'],
        universityData.programEvaluation.favouriteTerm.responses['3B'],
        universityData.programEvaluation.favouriteTerm.responses['4A'],
        universityData.programEvaluation.favouriteTerm.responses['4B'],
      ],
    }],
  };

  // Hardest Term
  const hardestTermData = {
    labels: ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B'],
    datasets: [{
      label: 'Number of Votes',
      data: [
        universityData.programEvaluation.hardestTerm.responses['1A'],
        universityData.programEvaluation.hardestTerm.responses['1B'],
        universityData.programEvaluation.hardestTerm.responses['2A'],
        universityData.programEvaluation.hardestTerm.responses['2B'],
        universityData.programEvaluation.hardestTerm.responses['3A'],
        universityData.programEvaluation.hardestTerm.responses['3B'],
        universityData.programEvaluation.hardestTerm.responses['4A'],
        universityData.programEvaluation.hardestTerm.responses['4B'],
      ],
    }],
  };

  // Easiest Term
  const easiestTermData = {
    labels: ['1A', '2A', '2B', '3A', '3B', '4A', '4B'],
    datasets: [{
      label: 'Number of Votes',
      data: [
        universityData.programEvaluation.easiestTerm.responses['1A'],
        universityData.programEvaluation.easiestTerm.responses['2A'],
        universityData.programEvaluation.easiestTerm.responses['2B'],
        universityData.programEvaluation.easiestTerm.responses['3A'],
        universityData.programEvaluation.easiestTerm.responses['3B'],
        universityData.programEvaluation.easiestTerm.responses['4A'],
        universityData.programEvaluation.easiestTerm.responses['4B'],
      ],
    }],
  };

  // Academic Worthiness
  const academicWorthinessData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: 'Number of Responses',
      data: [
        universityData.programValueAssessment.academicWorthiness.responses['1'],
        universityData.programValueAssessment.academicWorthiness.responses['2'],
        universityData.programValueAssessment.academicWorthiness.responses['3'],
        universityData.programValueAssessment.academicWorthiness.responses['4'],
        universityData.programValueAssessment.academicWorthiness.responses['5'],
        universityData.programValueAssessment.academicWorthiness.responses['6'],
        universityData.programValueAssessment.academicWorthiness.responses['7'],
        universityData.programValueAssessment.academicWorthiness.responses['8'],
        universityData.programValueAssessment.academicWorthiness.responses['9'],
        universityData.programValueAssessment.academicWorthiness.responses['10'],
      ],
    }],
  };

  // Overall Worthiness
  const overallWorthinessData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: 'Number of Responses',
      data: [
        universityData.programValueAssessment.overallWorthiness.responses['1'],
        universityData.programValueAssessment.overallWorthiness.responses['2'],
        universityData.programValueAssessment.overallWorthiness.responses['3'],
        universityData.programValueAssessment.overallWorthiness.responses['4'],
        universityData.programValueAssessment.overallWorthiness.responses['5'],
        universityData.programValueAssessment.overallWorthiness.responses['6'],
        universityData.programValueAssessment.overallWorthiness.responses['7'],
        universityData.programValueAssessment.overallWorthiness.responses['8'],
        universityData.programValueAssessment.overallWorthiness.responses['9'],
        universityData.programValueAssessment.overallWorthiness.responses['10'],
      ],
    }],
  };

  // Recommendation Likelihood
  const recommendationData = {
    labels: ['1 (Not Likely)', '2', '3', '4', '5 (Very Likely)'],
    datasets: [{
      data: [
        universityData.programValueAssessment.recommendationLikelihood.responses['1'],
        universityData.programValueAssessment.recommendationLikelihood.responses['2'],
        universityData.programValueAssessment.recommendationLikelihood.responses['3'],
        universityData.programValueAssessment.recommendationLikelihood.responses['4'],
        universityData.programValueAssessment.recommendationLikelihood.responses['5'],
      ],
    }],
  };

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">University Experience</h1>
          <p className="text-lg text-gray-600">
            Academic performance, program evaluation, and satisfaction metrics
          </p>
        </div>

        {/* Academic Performance Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Performance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* GPA Distribution */}
            <div>
              <ChartContainer 
                title="Cumulative GPA Distribution"
                subtitle={universityData.cumulativeGPA.question}
              >
                <EnhancedBarChart 
                  data={gpaData} 
                  colorTheme="gold"
                  showTitle={false}
                />
              </ChartContainer>
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-yellow-400">
                <h4 className="font-semibold text-gray-800 mb-2">Key Insights</h4>
                <p className="text-sm text-gray-700">
                  <strong>{universityData.cumulativeGPA.keyInsights.percentageAbove80.toFixed(1)}%</strong> of students maintain GPAs above 80%, 
                  with <strong>{universityData.cumulativeGPA.keyInsights.percentageAbove85.toFixed(1)}%</strong> achieving above 85%. 
                  The median range is <strong>{universityData.cumulativeGPA.keyInsights.medianRange}</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program Evaluation Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Evaluation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Curriculum Usefulness */}
            <div>
              <ChartContainer 
                title="Curriculum Usefulness"
                subtitle={universityData.programEvaluation.curriculumUsefulness.question}
              >
                <EnhancedBarChart 
                  data={curriculumUsefulnessData} 
                  colorTheme="bronze"
                  showTitle={false}
                />
              </ChartContainer>
            </div>

            {/* Program Interest */}
            <div>
              <ChartContainer 
                title="Program Interest"
                subtitle={universityData.programEvaluation.programInterest.question}
              >
                <EnhancedBarChart 
                  data={programInterestData} 
                  colorTheme="silver"
                  showTitle={false}
                />
              </ChartContainer>
            </div>

            {/* Program Enjoyment */}
            <div>
              <ChartContainer 
                title="Program Enjoyment"
                subtitle={universityData.programEvaluation.programEnjoyment.question}
              >
                <EnhancedPieChart 
                  data={programEnjoymentData} 
                  colorTheme="gold"
                  showTitle={false}
                />
              </ChartContainer>
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-yellow-400">
                <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
                <p className="text-sm text-gray-700">
                  <strong>{Math.round((universityData.programEvaluation.programEnjoyment.responses.yes / 
                    (universityData.programEvaluation.programEnjoyment.responses.yes + universityData.programEvaluation.programEnjoyment.responses.meh)) * 100)}%</strong> of students 
                  reported having fun, indicating strong program satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Term Analysis Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Term Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Favourite Term */}
            <div>
              <ChartContainer 
                title="Favourite Term"
                subtitle={universityData.programEvaluation.favouriteTerm.question}
              >
                <EnhancedBarChart 
                  data={favouriteTermData} 
                  colorTheme="gold"
                  showTitle={false}
                />
              </ChartContainer>
            </div>

            {/* Hardest Term */}
            <div>
              <ChartContainer 
                title="Hardest Term"
                subtitle={universityData.programEvaluation.hardestTerm.question}
              >
                <EnhancedBarChart 
                  data={hardestTermData} 
                  colorTheme="bronze"
                  showTitle={false}
                />
              </ChartContainer>
            </div>

            {/* Easiest Term */}
            <div>
              <ChartContainer 
                title="Easiest Term"
                subtitle={universityData.programEvaluation.easiestTerm.question}
              >
                <EnhancedBarChart 
                  data={easiestTermData} 
                  colorTheme="silver"
                  showTitle={false}
                />
              </ChartContainer>
            </div>
          </div>
        </div>

        {/* Program Value Assessment Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Value Assessment</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academic Worthiness */}
            <div>
              <ChartContainer 
                title="Academic Worthiness"
                subtitle={universityData.programValueAssessment.academicWorthiness.question}
              >
                <EnhancedBarChart 
                  data={academicWorthinessData} 
                  colorTheme="bronze"
                  showTitle={false}
                />
              </ChartContainer>
            </div>

            {/* Overall Worthiness */}
            <div>
              <ChartContainer 
                title="Overall Worthiness"
                subtitle={universityData.programValueAssessment.overallWorthiness.question}
              >
                <EnhancedBarChart 
                  data={overallWorthinessData} 
                  colorTheme="gold"
                  showTitle={false}
                />
              </ChartContainer>
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-yellow-400">
                <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
                <p className="text-sm text-gray-700">
                  Students rate the overall program significantly higher when considering social factors, 
                  indicating the strong community bonds formed in the cohort system.
                </p>
              </div>
            </div>

            {/* Recommendation Likelihood */}
            <div>
              <ChartContainer 
                title="Recommendation Likelihood"
                subtitle={universityData.programValueAssessment.recommendationLikelihood.question}
              >
                <EnhancedPieChart 
                  data={recommendationData} 
                  colorTheme="mixed"
                  showTitle={false}
                />
              </ChartContainer>
              <div className="mt-4 bg-purple-50 p-4 rounded-lg border-purple-400">
                <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
                <p className="text-sm text-gray-700">
                  <strong>{Math.round(((universityData.programValueAssessment.recommendationLikelihood.responses['4'] + 
                    universityData.programValueAssessment.recommendationLikelihood.responses['5']) / 
                    Object.values(universityData.programValueAssessment.recommendationLikelihood.responses).reduce((a, b) => a + b, 0)) * 100)}%</strong> would 
                  recommend the program to a friend, showing strong alumni satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {universityData.cumulativeGPA.keyInsights.studentsAbove80}
            </div>
            <div className="text-sm opacity-90">Students Above 80%</div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((universityData.programEvaluation.programEnjoyment.responses.yes / 
                (universityData.programEvaluation.programEnjoyment.responses.yes + universityData.programEvaluation.programEnjoyment.responses.meh)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Had Fun</div>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round(((universityData.programValueAssessment.recommendationLikelihood.responses['4'] + 
                universityData.programValueAssessment.recommendationLikelihood.responses['5']) / 
                Object.values(universityData.programValueAssessment.recommendationLikelihood.responses).reduce((a, b) => a + b, 0)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Would Recommend</div>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round(((universityData.programValueAssessment.wouldChooseDifferent as any).no / 
                ((universityData.programValueAssessment.wouldChooseDifferent as any).yes + (universityData.programValueAssessment.wouldChooseDifferent as any).no + (universityData.programValueAssessment.wouldChooseDifferent as any).not_sure)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Would Choose Again</div>
          </div>
      </div>
      </div>
    </PageContainer>
  );
};export default SchoolPage;