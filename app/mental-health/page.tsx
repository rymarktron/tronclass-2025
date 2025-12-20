'use client';

import { EnhancedBarChart, EnhancedPieChart, ChartContainer } from '@/components/charts/ChartLibrary';
import healthData from '@/public/survey-data/7_health_sports.json';

const MentalHealthPage = () => {
  // Sleep Patterns Distribution
  const sleepPatternsData = {
    labels: ['Under 6h', '6-7h', '7-8h', '8-9h', '9-10h', '10+h'],
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

  // Intramural Sports Participation (Top 10)
  const topSports = [
    { name: 'Volleyball', count: 33 },
    { name: 'Basketball', count: 26 },
    { name: 'Frisbee', count: 21 },
    { name: 'Soccer', count: 13 },
    { name: 'Badminton', count: 9 },
    { name: 'Dodgeball', count: 8 },
    { name: 'Flag Football', count: 5 },
    { name: 'Spikeball', count: 4 },
    { name: 'Hockey', count: 3 },
  ];

  const intramuralsData = {
    labels: topSports.map(s => s.name),
    datasets: [{
      label: 'Number of Participants',
      data: topSports.map(s => s.count),
    }],
  };

  // Sleep Quality Distribution
  const sleepQualityData = {
    labels: ['Healthy Sleep\n(7-9h)', 'Borderline\n(6-7h)', 'Sleep Deprived\n(<6h)', 'Oversleeping\n(9+h)'],
    datasets: [{
      data: [
        healthData.sleepPatterns.sleepQuality.healthy_sleep.total,
        healthData.sleepPatterns.sleepQuality.borderline_sleep['6_7_hours'],
        healthData.sleepPatterns.sleepQuality.sleep_deprived.under_6_hours,
        healthData.sleepPatterns.sleepQuality.oversleepers.total,
      ],
    }],
  };

  // Bench Press Distribution
  const benchPressData = {
    labels: ['<135 lbs', '135-185 lbs', '186-225 lbs', '226-275 lbs', '276+ lbs'],
    datasets: [{
      label: 'Number of Lifters',
      data: [
        healthData.liftingPRs.benchPress.ranges.under_135,
        healthData.liftingPRs.benchPress.ranges['135_185'],
        healthData.liftingPRs.benchPress.ranges['186_225'],
        healthData.liftingPRs.benchPress.ranges['226_275'],
        healthData.liftingPRs.benchPress.ranges['276_plus'],
      ],
    }],
  };

  // Deadlift Distribution
  const deadliftData = {
    labels: ['<315 lbs', '315-405 lbs', '406-450 lbs', '451-495 lbs', '496+ lbs'],
    datasets: [{
      label: 'Number of Lifters',
      data: [
        healthData.liftingPRs.deadlift.ranges.under_315,
        healthData.liftingPRs.deadlift.ranges['315_405'],
        healthData.liftingPRs.deadlift.ranges['406_450'],
        healthData.liftingPRs.deadlift.ranges['451_495'],
        healthData.liftingPRs.deadlift.ranges['496_plus'],
      ],
    }],
  };

  // Squat Distribution
  const squatData = {
    labels: ['<185 lbs', '185-225 lbs', '226-275 lbs', '276-315 lbs', '316+ lbs'],
    datasets: [{
      label: 'Number of Lifters',
      data: [
        healthData.liftingPRs.squat.ranges.under_185,
        healthData.liftingPRs.squat.ranges['185_225'],
        healthData.liftingPRs.squat.ranges['226_275'],
        healthData.liftingPRs.squat.ranges['276_315'],
        healthData.liftingPRs.squat.ranges['316_plus'],
      ],
    }],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-gray-200 to-yellow-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health & Wellness</h1>
          <p className="text-lg text-gray-600">
            Sleep patterns, fitness achievements, and sports participation in Mechatronics
          </p>
        </div>

        {/* Sleep Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sleep Patterns</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sleep Duration Distribution */}
            <div>
              <ChartContainer 
                title="Average Sleep Duration"
                subtitle={healthData.sleepPatterns.question}
              >
                <EnhancedBarChart 
                  data={sleepPatternsData} 
                  colorTheme="gold"
                  showTitle={false}
                />
              </ChartContainer>
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-yellow-400">
                <h4 className="font-semibold text-gray-800 mb-2">Key Insights</h4>
                <p className="text-sm text-gray-700">
                  <strong>{Math.round((healthData.sleepPatterns.sleepQuality.healthy_sleep.total / 
                    Object.values(healthData.sleepPatterns.responses).reduce((a, b) => a + b, 0)) * 100)}%</strong> of students get 
                  healthy sleep (7-9 hours), while <strong>{healthData.sleepPatterns.sleepQuality.sleep_deprived.under_6_hours}</strong> students 
                  are sleep deprived (less than 6 hours).
                </p>
              </div>
            </div>

            {/* Sleep Quality Categories */}
            <div>
              <ChartContainer 
                title="Sleep Quality Categories"
                subtitle="Student sleep health assessment"
              >
                <EnhancedPieChart 
                  data={sleepQualityData} 
                  colorTheme="mixed"
                  showTitle={false}
                />
              </ChartContainer>
            </div>
          </div>
        </div>

        {/* Fitness Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fitness & Lifting</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bench Press */}
            <div>
              <ChartContainer 
                title="Bench Press PRs"
                subtitle="Personal records distribution"
              >
                <EnhancedBarChart 
                  data={benchPressData} 
                  colorTheme="bronze"
                  showTitle={false}
                />
              </ChartContainer>
            </div>

            {/* Deadlift */}
            <div>
              <ChartContainer 
                title="Deadlift PRs"
                subtitle="Personal records distribution"
              >
                <EnhancedBarChart 
                  data={deadliftData} 
                  colorTheme="silver"
                  showTitle={false}
                />
              </ChartContainer>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border-gray-400">
                <h4 className="font-semibold text-gray-800 mb-2">Notable Achievement</h4>
                <p className="text-sm text-gray-700">
                  <strong>700 lbs!</strong> One student achieved an incredible 700 lb deadlift PR - 
                  an exceptional lift that showcases the strength in our cohort.
                </p>
              </div>
            </div>

            {/* Squat */}
            <div>
              <ChartContainer 
                title="Squat PRs"
                subtitle="Personal records distribution"
              >
                <EnhancedBarChart 
                  data={squatData} 
                  colorTheme="gold"
                  showTitle={false}
                />
              </ChartContainer>
            </div>
          </div>
        </div>

        {/* Intramurals Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Intramural Sports</h2>
          <div>
            <ChartContainer 
              title="Most Popular Intramural Sports"
              subtitle={healthData.intramuralSports.question}
            >
              <EnhancedBarChart 
                data={intramuralsData} 
                colorTheme="bronze"
                showTitle={false}
              />
            </ChartContainer>
            <div className="mt-4 bg-orange-50 p-4 rounded-lg border-orange-400">
              <h4 className="font-semibold text-gray-800 mb-2">Participation Highlights</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Volleyball dominates</strong> with 33 participants, followed by basketball (26) and frisbee (21). 
              </p>
              <p className="text-sm text-gray-700">
                Notable achievements include: 4x intramural softball champion (34-1-1 record), 
                3x frisbee champion, and a full Tron volleyball team that won best-dressed at a Halloween tournament! 🏆
              </p>
            </div>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {Math.round((healthData.sleepPatterns.sleepQuality.healthy_sleep.total / 
                Object.values(healthData.sleepPatterns.responses).reduce((a, b) => a + b, 0)) * 100)}%
            </div>
            <div className="text-sm opacity-90">Healthy Sleep</div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">33</div>
            <div className="text-sm opacity-90">Volleyball Players</div>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">700</div>
            <div className="text-sm opacity-90">lbs Deadlift PR</div>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6 rounded-lg text-center text-white">
            <div className="text-3xl font-bold">
              {healthData.liftingPRs.nonLifters.count}
            </div>
            <div className="text-sm opacity-90">Non-Lifters</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthPage;