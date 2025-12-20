'use client';

import { EnhancedPieChart, EnhancedBarChart, ChartContainer } from '@/components/charts/ChartLibrary';
import PageContainer from '@/components/PageContainer';
import streamsData from '@/public/survey-data/1_streams.json';

const StreamsPage = () => {
  // Transfer Data Chart
  const transferData = {
    labels: ['No Transfer', 'Transferred'],
    datasets: [{
      data: [
        streamsData.transferData.responses.no,
        streamsData.transferData.responses.yes,
      ],
    }],
  };

  // Current Stream Distribution
  const currentStreamData = {
    labels: ['Stream 4', 'Stream 8'],
    datasets: [{
      data: [
        streamsData.currentStream.responses.stream_4,
        streamsData.currentStream.responses.stream_8,
      ],
    }],
  };

  // Initial Stream Choice Reasons
  const initialChoiceReasons = streamsData.initialStreamChoice.responses;
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
        streamsData.streamSwitch.responses.no,
        streamsData.streamSwitch.responses.yes,
      ],
    }],
  };

  // Transfer Term Data
  const transferTermData = {
    labels: ['1B', '2A', '2B', 'After 2B'],
    datasets: [{
      label: 'Number of Students',
      data: [
        streamsData.transferTerm.responses['1B'],
        streamsData.transferTerm.responses['2A'],
        streamsData.transferTerm.responses['2B'],
        streamsData.transferTerm.responses.after_2B,
      ],
    }],
  };

  return (
    <PageContainer>
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
          <div>
            <ChartContainer 
              title="Transfer into Mechatronics"
              subtitle={streamsData.transferData.question}
            >
              <EnhancedPieChart 
                data={transferData} 
                colorTheme="gold"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-yellow-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                <strong>Significant transfer activity</strong> shows that students actively explore different streams to find their best fit. 
                This flexibility is valuable for discovering passion areas and optimizing career outcomes.
              </p>
            </div>
          </div>

          {/* Current Stream Distribution */}
          <div>
            <ChartContainer 
              title="Current Stream Distribution"
              subtitle={streamsData.currentStream.question}
            >
              <EnhancedPieChart 
                data={currentStreamData} 
                colorTheme="bronze"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-amber-50 p-4 rounded-lg border-amber-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                Stream 8's <strong>co-op-first structure appeals to many students</strong> seeking practical work experience early. 
                The distribution reflects diverse preferences for balancing academics and industry exposure.
              </p>
            </div>
          </div>

          {/* Stream Switch */}
          <div>
            <ChartContainer 
              title="Stream Switching"
              subtitle={streamsData.streamSwitch.question}
            >
              <EnhancedPieChart 
                data={streamSwitchData} 
                colorTheme="silver"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-gray-50 p-4 rounded-lg border-gray-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                <strong>{Math.round((streamsData.streamSwitch.responses.yes / 
                  (streamsData.streamSwitch.responses.no + streamsData.streamSwitch.responses.yes)) * 100)}% of students switched streams</strong>, indicating 
                the program's flexibility allows students to pivot when their needs or interests change.
              </p>
            </div>
          </div>

          {/* Transfer Term */}
          <div>
            <ChartContainer 
              title="Transfer Term"
              subtitle={streamsData.transferTerm.question}
            >
              <EnhancedBarChart 
                data={transferTermData} 
                colorTheme="mixed"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-purple-50 p-4 rounded-lg border-purple-400">
              <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
              <p className="text-sm text-gray-700">
                <strong>Transfer timing shows two peaks</strong>—early transfers after adjusting to university, and later transfers as students clarify career goals. 
                Both patterns reflect healthy decision-making throughout the program.
              </p>
            </div>
          </div>
        </div>

        {/* Initial Stream Choice Reasons */}
        <div className="mb-8">
          <ChartContainer 
            title="Initial Stream Choice Reasons"
            subtitle={streamsData.initialStreamChoice.question}
          >
            <EnhancedBarChart 
              data={initialChoiceData} 
              colorTheme="gold"
              showTitle={false}
            />
          </ChartContainer>
          {/* Analysis */}
          <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-yellow-400">
            <h4 className="font-semibold text-gray-800 mb-2">Insight</h4>
            <p className="text-sm text-gray-700">
              <strong>Job opportunities and program timeline</strong> drive initial stream selection. 
              Students make strategic choices based on career prospects and how the co-op schedule aligns with their goals—demonstrating thoughtful planning.
            </p>
          </div>
        </div>

        {/* Stream Advice Section */}
        <div className="mb-8">
          <ChartContainer 
            title="Student Advice & Comments"
            subtitle={streamsData.streamAdvice.question}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {streamsData.streamAdvice.responses.map((advice: string, index: number) => (
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
              {streamsData.transferData.responses.no + streamsData.transferData.responses.yes}
            </div>
            <div className="text-sm opacity-90">Total Responses</div>
          </div>
          <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((streamsData.transferData.responses.yes / 
                (streamsData.transferData.responses.no + streamsData.transferData.responses.yes)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Transfer Rate</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {streamsData.currentStream.responses.stream_8}
            </div>
            <div className="text-sm opacity-90">Stream 8 Students</div>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-yellow-700 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((streamsData.streamSwitch.responses.yes / 
                (streamsData.streamSwitch.responses.no + streamsData.streamSwitch.responses.yes)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Switch Rate</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default StreamsPage;