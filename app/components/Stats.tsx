export default function Stats() {
  const stats = [
    { number: '628', label: 'MRI Scans' },
    { number: '40K+', label: 'Annotated Slices' },
    { number: '72.8%', label: 'VGG-19 Accuracy' },
    { number: '11', label: 'DL Models Benchmarked' },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl font-bold">{stat.number}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 