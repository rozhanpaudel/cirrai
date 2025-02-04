import Image from 'next/image';

export default function ResearchSection() {
  const models = [
    "VGG-19",
    "ResNet-50",
    "MobileNetV3-S",
    "ConvNext-B",
    "PVTv2-B2",
    "Vim-S",
    "MedMamba-S",
    "MambaVision-T"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Liver Cirrhosis Classification Research</h2>
          <p className="text-gray-600">Deep Learning Framework for Cirrhosis Stage Estimation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-text">
              Methodology & Results
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Using our CirrMRI600+ dataset, we developed and evaluated multiple deep learning models
                for liver cirrhosis classification.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Key Findings:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>VGG-19 achieved 72.8% accuracy on T1-weighted dataset</li>
                  <li>Superior performance compared to traditional radiomics</li>
                  <li>High precision in mild and severe cases</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Replace with actual images from @liverCirrhosisClassification folder */}
            <Image
              src="/liverCirrhosisClassification/image_showing_t1w_t2w_MRI_scans.png"
              alt="T1W and T2W MRI Scans"
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/liverCirrhosisClassification/performance_comparision.png"
              alt="Performance Comparison"
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Evaluated Deep Learning Models</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {models.map((model, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-primary font-medium">{model}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 