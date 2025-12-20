'use client';

import { EnhancedPieChart, EnhancedBarChart, ChartContainer } from '@/components/charts/ChartLibrary';
import PageContainer from '@/components/PageContainer';
import preTronData from '@/public/survey-data/5_pre_tron.json';
import healthData from '@/public/survey-data/7_health_sports.json';

const LifestylePage = () => {
  // Romantic Relationship Status
  const relationshipData = {
    labels: ['Yes', 'No', 'It\'s Complicated'],
    datasets: [{
      data: [
        preTronData.romanticRelationship.responses.yes,
        preTronData.romanticRelationship.responses.no,
        preTronData.romanticRelationship.responses.its_complicated,
      ],
    }],
  };

  // Sex Response
  const sexData = {
    labels: ['Yes', 'No', 'Every once in a while', 'Waiting for marriage', 'With the dog'],
    datasets: [{
      data: [
        preTronData.sex.responses.yes,
        preTronData.sex.responses.no,
        preTronData.sex.responses.every_once_in_a_while,
        preTronData.sex.responses.waiting_for_marriage,
        preTronData.sex.responses.with_the_dog,
      ],
    }],
  };

  // Drinking
  const drinkingData = {
    labels: ['Yes', 'No', 'Maybe'],
    datasets: [{
      data: [
        preTronData.drinking.responses.yes,
        preTronData.drinking.responses.no,
        preTronData.drinking.responses.maybe,
      ],
    }],
  };

  // Weed Usage
  const weedData = {
    labels: ['No', 'Yes', 'Maybe'],
    datasets: [{
      data: [
        preTronData.weed.responses.no,
        preTronData.weed.responses.yes,
        preTronData.weed.responses.maybe,
      ],
    }],
  };

  // Drugs (not alcohol or marijuana)
  const drugsData = {
    labels: ['No', 'Yes', 'Meth Only'],
    datasets: [{
      data: [
        preTronData.drugs.responses.no,
        preTronData.drugs.responses.yes,
        preTronData.drugs.responses.meth_only,
      ],
    }],
  };

  // Party Frequency
  const partyData = {
    labels: ['Never (1)', 'Rarely (2)', 'Sometimes (3)', 'Often (4)', 'Always (5)'],
    datasets: [{
      label: 'Number of Students',
      data: [
        preTronData.partyingFrequency.responses['1'],
        preTronData.partyingFrequency.responses['2'],
        preTronData.partyingFrequency.responses['3'],
        preTronData.partyingFrequency.responses['4'],
        preTronData.partyingFrequency.responses['5'],
      ],
    }],
  };

  // Sleep Patterns
  const sleepData = {
    labels: ['Under 6 hours', '6-7 hours', '7-8 hours', '8-9 hours', '9-10 hours', '10+ hours'],
    datasets: [{
      label: 'Number of Students',
      data: [
        healthData.sleepPatterns.responses.under_6_hours,
        healthData.sleepPatterns.responses['6_7_hours'],
        healthData.sleepPatterns.responses['7_8_hours'],
        healthData.sleepPatterns.responses['8_9_hours'],
        healthData.sleepPatterns.responses['9_10_hours'],
        healthData.sleepPatterns.responses['10_plus_hours'],
      ],
    }],
  };

  // Body Count Distribution
  const bodyCountData = {
    labels: Object.keys(preTronData.bodyCount.responses),
    datasets: [{
      label: 'Number of Students',
      data: Object.values(preTronData.bodyCount.responses),
    }],
  };

  // Rice Purity Score Statistics
  const scores = preTronData.ricePurityScores.scores;
  const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const maxScore = Math.max(...scores);
  const minScore = Math.min(...scores);

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lifestyle</h1>
          <p className="text-lg text-gray-600">
            Personal lifestyle choices and habits of Mechatronics Engineering Class of 2025
          </p>
        </div>

        {/* Top Row - Relationships and Substance Use */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <ChartContainer 
              title="Romantic Relationships"
              subtitle={preTronData.romanticRelationship.question}
            >
              <EnhancedPieChart 
                data={relationshipData} 
                colorTheme="gold"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-amber-50 p-4 rounded-lg  border-amber-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                <strong>73%</strong> of Tron students have been in romantic relationships, indicating a socially active student body. 
                Only <strong>19%</strong> have never been in a relationship, with <strong>8%</strong> describing their status as "complicated."
              </p>
            </div>
          </div>

          <div>
            <ChartContainer 
              title="Drinking"
              subtitle={preTronData.drinking.question}
            >
              <EnhancedPieChart 
                data={drinkingData} 
                colorTheme="bronze"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-orange-50 p-4 rounded-lg  border-orange-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                <strong>63%</strong> of students drink alcohol, reflecting typical university social culture. 
                <strong>26%</strong> abstain completely, while <strong>10%</strong> are undecided, showing diverse attitudes toward alcohol consumption.
              </p>
            </div>
          </div>

          <div>
            <ChartContainer 
              title="Cannabis Usage"
              subtitle={preTronData.weed.question}
            >
              <EnhancedPieChart 
                data={weedData} 
                colorTheme="silver"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-gray-50 p-4 rounded-lg  border-gray-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                Cannabis use is split with <strong>55%</strong> not using, <strong>38%</strong> using, and <strong>7%</strong> uncertain. 
                This reflects the normalized attitude toward cannabis following legalization in Canada.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - More Lifestyle Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <ChartContainer 
              title="Sexual Activity"
              subtitle={preTronData.sex.question}
            >
              <EnhancedPieChart 
                data={sexData} 
                colorTheme="mixed"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-purple-50 p-4 rounded-lg  border-purple-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                <strong>43%</strong> are sexually active, while <strong>24%</strong> are not. <strong>16%</strong> are occasional, 
                and <strong>13%</strong> are waiting for marriage. The small percentage of joke responses reflects the survey's informal nature.
              </p>
            </div>
          </div>

          <div>
            <ChartContainer 
              title="Other Drug Usage"
              subtitle={preTronData.drugs.question}
            >
              <EnhancedPieChart 
                data={drugsData} 
                colorTheme="gold"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-yellow-50 p-4 rounded-lg  border-yellow-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                <strong>87%</strong> avoid hard drugs, showing responsible choices among engineering students. 
                Only <strong>11%</strong> have experimented with other substances, with joke responses highlighting survey humor.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Rice Purity Scores</h2>
            <p className="text-gray-600 text-sm mb-4">{preTronData.ricePurityScores.question}</p>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg text-white text-center">
                <div className="text-3xl font-bold">{avgScore}</div>
                <div className="text-sm opacity-90">Average Score</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-3 rounded-lg text-white text-center">
                  <div className="text-2xl font-bold">{maxScore}</div>
                  <div className="text-xs opacity-90">Highest</div>
                </div>
                <div className="bg-gradient-to-r from-amber-600 to-yellow-700 p-3 rounded-lg text-white text-center">
                  <div className="text-2xl font-bold">{minScore}</div>
                  <div className="text-xs opacity-90">Lowest</div>
                </div>
              </div>
            </div>
            {/* Analysis for Rice Purity */}
            <div className="mt-4 bg-orange-50 p-4 rounded-lg  border-orange-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                Average score of <strong>{avgScore}</strong> indicates moderate life experiences. 
                The wide range ({minScore}-{maxScore}) shows diverse backgrounds and experiences within the Tron class.
              </p>
            </div>
          </div>
        </div>

        {/* Rice Purity Test Explanation Section */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-2xl p-8 md:p-12 border-2 border-purple-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📋</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Rice Purity Test?</h2>
              <p className="text-gray-800 mb-4">
                The Rice Purity Test is a lighthearted self-assessment quiz that originated at Rice University. It consists of 100 questions 
                covering various life experiences, from innocent activities to more adult experiences. Your final score reflects your "purity" on a scale of 0-100:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">High Score (80-100)</p>
                  <p className="text-sm text-gray-700">Indicates less life experience or more conservative choices</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Medium Score (40-79)</p>
                  <p className="text-sm text-gray-700">Reflects typical university-age experiences and diverse choices</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Low Score (0-39)</p>
                  <p className="text-sm text-gray-700">Suggests more diverse and adventurous life experiences</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Why It Matters</p>
                  <p className="text-sm text-gray-700">It's a fun cultural artifact that many university students engage with</p>
                </div>
              </div>

              <p className="text-gray-800 mb-4">
                <strong>Important note:</strong> This test is meant to be fun and humorous. Scores don't define a person's character, morality, 
                or worth. They're simply a reflection of the life choices and experiences each person has made.
              </p>

              <a 
                href="https://ricepuritytest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all"
              >
                Take the Rice Purity Test
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChartContainer 
            title="Party/Clubbing Frequency"
            subtitle={preTronData.partyingFrequency.question}
          >
            <EnhancedBarChart 
              data={partyData} 
              colorTheme="gold"
              showTitle={false}
            />
          </ChartContainer>

          <div>
            <ChartContainer 
              title="Sleep Patterns in Tron"
              subtitle={healthData.sleepPatterns.question}
            >
              <EnhancedBarChart 
                data={sleepData} 
                colorTheme="bronze"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-blue-50 p-4 rounded-lg  border-blue-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                Engineering workload impact is evident: <strong>{healthData.sleepPatterns.responses['7_8_hours']} students</strong> get 7-8 hours of sleep, 
                with fewer getting the full recommended amount. This reflects the demanding nature of the Mechatronics program and typical university sleep patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Body Count Distribution */}
        <div className="grid grid-cols-1 gap-8">
          <div>
            <ChartContainer 
              title="Body Count Distribution"
              subtitle={preTronData.bodyCount.question}
            >
              <EnhancedBarChart 
                data={bodyCountData} 
                colorTheme="silver"
                showTitle={false}
              />
            </ChartContainer>
            {/* Analysis */}
            <div className="mt-4 bg-purple-50 p-4 rounded-lg  border-purple-400">
              <h4 className="font-semibold text-gray-800 mb-2">Analysis</h4>
              <p className="text-sm text-gray-700">
                The distribution shows typical university-age patterns with most responses at lower values, 
                gradually tapering off at higher numbers. This data reflects the diverse personal experiences within the Tron class.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((preTronData.romanticRelationship.responses.yes / 
                (preTronData.romanticRelationship.responses.yes + preTronData.romanticRelationship.responses.no + preTronData.romanticRelationship.responses.its_complicated)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Had Relationships</div>
          </div>
          <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((preTronData.drinking.responses.yes / 
                (preTronData.drinking.responses.yes + preTronData.drinking.responses.no + preTronData.drinking.responses.maybe)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Drink Alcohol</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {healthData.sleepPatterns.responses['7_8_hours']}
            </div>
            <div className="text-sm opacity-90">Get 7-8 Hours Sleep</div>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-yellow-700 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((preTronData.weed.responses.yes / 
                (preTronData.weed.responses.yes + preTronData.weed.responses.no + preTronData.weed.responses.maybe)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Use Cannabis</div>
          </div>
      </div>
      </div>
    </PageContainer>
  );
};export default LifestylePage;