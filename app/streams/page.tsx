'use client';

import { EnhancedPieChart, EnhancedBarChart, ChartContainer } from '@/components/charts/ChartLibrary';
import surveyData from '@/public/survey-data/1_streams.json';

const StreamsPage = () => {
  // Transfer Data Chart
  const transferData = {
    labels: ['No Transfer', 'Transferred'],
    datasets: [{
      data: [
        surveyData.transferData.responses.no,
        surveyData.transferData.responses.yes,
      ],
    }],
  };

  // Current Stream Distribution
  const currentStreamData = {
    labels: ['Stream 4', 'Stream 8'],
    datasets: [{
      data: [
        surveyData.currentStream.responses.stream_4,
        surveyData.currentStream.responses.stream_8,
      ],
    }],
  };

  // Initial Stream Choice Reasons
  const initialChoiceReasons = surveyData.initialStreamChoice.responses;
  const initialChoiceData = {
    labels: [
      'No Choice/Didn\'t Choose',
      'Better Job Opportunities',
      'More Time to Adjust',
      'Timeline Suited Goals',
      'Better Chance Getting Job',
      'Other Reasons'
    ],
    datasets: [{
      label: 'Number of Responses',
      data: [
        initialChoiceReasons.didnt_choose_no_choice,
        initialChoiceReasons.better_job_opportunities,
        initialChoiceReasons.more_time_adjust_university,
        initialChoiceReasons.timeline_suited_goals,
        initialChoiceReasons.better_chance_getting_job,
        (initialChoiceReasons.random || 0) + 
        (initialChoiceReasons.friends_in_stream || 0) + 
        (initialChoiceReasons.frc || 0) + 
        (initialChoiceReasons.experience_design_teams || 0)
      ],
    }],
  };

  // Stream Switch Data
  const streamSwitchData = {
    labels: ['Stayed', 'Switched'],
    datasets: [{
      data: [
        surveyData.streamSwitch.responses.no,
        surveyData.streamSwitch.responses.yes,
      ],
    }],
  };

  // Transfer Term Data
  const transferTermData = {
    labels: ['1B', '2A', '2B', 'After 2B'],
    datasets: [{
      label: 'Number of Students',
      data: [
        surveyData.transferTerm.responses['1B'],
        surveyData.transferTerm.responses['2A'],
        surveyData.transferTerm.responses['2B'],
        surveyData.transferTerm.responses.after_2B,
      ],
    }],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-gray-200 to-yellow-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Streams Survey Results
          </h1>
          <p className="text-lg text-gray-600">
            Analysis of stream preferences and experiences in Mechatronics Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Transfer Status */}
          <ChartContainer 
            title="Transfer into Mechatronics"
            subtitle={surveyData.transferData.question}
          >
            <EnhancedPieChart 
              data={transferData} 
              colorTheme="gold"
              showTitle={false}
            />
          </ChartContainer>

          {/* Current Stream Distribution */}
          <ChartContainer 
            title="Current Stream Distribution"
            subtitle={surveyData.currentStream.question}
          >
            <EnhancedPieChart 
              data={currentStreamData} 
              colorTheme="bronze"
              showTitle={false}
            />
          </ChartContainer>

          {/* Stream Switch */}
          <ChartContainer 
            title="Stream Switching"
            subtitle={surveyData.streamSwitch.question}
          >
            <EnhancedPieChart 
              data={streamSwitchData} 
              colorTheme="silver"
              showTitle={false}
            />
          </ChartContainer>

          {/* Transfer Term */}
          <ChartContainer 
            title="Transfer Term"
            subtitle={surveyData.transferTerm.question}
          >
            <EnhancedBarChart 
              data={transferTermData} 
              colorTheme="mixed"
              showTitle={false}
            />
          </ChartContainer>
        </div>

        {/* Initial Stream Choice Reasons */}
        <div className="mb-8">
          <ChartContainer 
            title="Initial Stream Choice Reasons"
            subtitle={surveyData.initialStreamChoice.question}
          >
            <EnhancedBarChart 
              data={initialChoiceData} 
              colorTheme="gold"
              showTitle={false}
            />
          </ChartContainer>
        </div>

        {/* Stream Advice Section */}
        <div className="mb-8">
          <ChartContainer 
            title="Student Advice & Comments"
            subtitle={surveyData.streamAdvice.question}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {surveyData.streamAdvice.responses.map((advice, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg  border-amber-400"
                >
                  <p className="text-gray-700 italic text-sm">&ldquo;{advice}&rdquo;</p>
                </div>
              ))}
            </div>
          </ChartContainer>
        </div>

        {/* Statistics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {surveyData.transferData.responses.no + surveyData.transferData.responses.yes}
            </div>
            <div className="text-sm opacity-90">Total Responses</div>
          </div>
          <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((surveyData.transferData.responses.yes / 
                (surveyData.transferData.responses.no + surveyData.transferData.responses.yes)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Transfer Rate</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {surveyData.currentStream.responses.stream_8}
            </div>
            <div className="text-sm opacity-90">Stream 8 Students</div>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-yellow-700 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((surveyData.streamSwitch.responses.yes / 
                (surveyData.streamSwitch.responses.no + surveyData.streamSwitch.responses.yes)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Switch Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamsPage;