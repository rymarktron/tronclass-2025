import PageContainer from '@/components/PageContainer';

export default function PersonalDevelopmentPage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Personal Development</h1>
          <p className="text-gray-600">Personal development survey data will be displayed here.</p>
        </div>
      </div>
    </PageContainer>
  );
}