import Image from 'next/image';
import ImageSlider from './ImageSlider';

export default function DatasetSection() {
  const datasetImages = [
    {
      src: "/cirrmri/CirrMRI_image1.png",
      alt: "CirrMRI Dataset - Showing T1W and T2W MRI Scans",
      caption: "CirrMRI Dataset - Showing T1W and T2W MRI Scans"
    },
    {
      src: "/cirrmri/cirrmri_comparision_image.png",
      alt: "CirrMRI Dataset Comparison",
      caption: "CirrMRI Dataset Comparison"
    },
    {
      src: "/cirrmri/comparative_benchmark_sota_2d.png",
      alt: "Comparative Benchmark SOTA 2D",
      caption: "Comparative Benchmark SOTA 2D"
    },
    {
      src: "/cirrmri/comparative_benchmark_sota_3d_segmentation.png",
      alt: "Comparative Benchmark SOTA 3D Segmentation",
      caption: "Comparative Benchmark SOTA 3D Segmentation"
    },
    {
      src: "/cirrmri/qualitative_results_of_different_models.png",
      alt: "Qualitative Results of Different Models",
      caption: "Qualitative Results of Different Models"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">CirrMRI600+ Dataset</h2>
          <p className="text-gray-600">A Large-scale MRI Dataset for Liver Cirrhosis Research</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Dataset Overview</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  628 high-resolution abdominal MRI scans
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  310 T1-weighted & 318 T2-weighted images
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Nearly 40,000 annotated slices
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Benchmarked using 11 deep learning models
                </li>
              </ul>
            </div>
            
            <a 
              href="https://osf.io/cuk24/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition"
            >
              Access Dataset
            </a>
          </div>

          <div className="space-y-8">
            {/* Replace Image Grid with Slider */}
            <ImageSlider images={datasetImages} />

            {/* <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Cirrhosis Stages Included:</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2 bg-white rounded">Mild</div>
                <div className="text-center p-2 bg-white rounded">Moderate</div>
                <div className="text-center p-2 bg-white rounded">Severe</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Additional Dataset Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-bold mb-2">Image Quality</h4>
            <p className="text-gray-600">
              High-resolution MRI scans with standardized acquisition protocols
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-bold mb-2">Annotations</h4>
            <p className="text-gray-600">
              Expert-validated segmentation labels and staging information
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-bold mb-2">Cross-Modality</h4>
            <p className="text-gray-600">
              Paired T1 and T2-weighted sequences for comprehensive analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 