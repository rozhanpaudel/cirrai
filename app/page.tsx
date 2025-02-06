import Image from "next/image";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Card from "./components/Card";
import ResearchSection from "./components/ResearchSection";
import DatasetSection from "./components/DatasetSection";
import ContactSection from './components/ContactSection';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative pt-32 pb-20 hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Advanced AI for
                <span className="gradient-text"> Medical Imaging</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Pioneering AI solutions for medical image analysis, with a focus on
                liver cirrhosis detection and classification using MRI scans.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="/EMBC25_liverCirrhosisClassification.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition inline-block"
                >
                  Explore Research
                </a>
                <button className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition">
                  View Dataset
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <Stats /> */}

        {/* Research Section */}
        <section id="research" className="py-20 bg-gray-50">
          <ResearchSection />
        </section>

        {/* Dataset Section */}
        <section id="dataset" className="py-20">
          <DatasetSection />
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Technology</h2>
              <p className="text-gray-600">Advanced Deep Learning Models for Medical Imaging</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Deep Learning Models",
                  description: "State-of-the-art architectures including VGG-19, ResNet-50, and MedMamba-S for accurate cirrhosis classification",
                },
                {
                  title: "Cross-Modality Analysis",
                  description: "Advanced processing of both T1-weighted and T2-weighted MRI scans for comprehensive diagnosis",
                },
                {
                  title: "Automated Staging",
                  description: "Intelligent classification of liver cirrhosis stages with high precision and reliability",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        {/* <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600">Pioneering AI Research in Medical Imaging</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-gray-600">
                  We are dedicated to advancing medical imaging analysis through innovative AI solutions. 
                  Our focus is on developing cutting-edge deep learning models for accurate liver cirrhosis 
                  classification and staging.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-4">Research Highlights</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Published CirrMRI600+ dataset with 628 MRI scans</li>
                    <li>• Developed multiple deep learning classification models</li>
                    <li>• Achieved significant accuracy in cirrhosis staging</li>
                    <li>• Active collaboration with medical institutions</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Future Goals</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Model Enhancement</h4>
                    <p className="text-gray-600">
                      Improving classification accuracy for moderate cirrhosis cases through 
                      advanced deep learning architectures.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Dataset Expansion</h4>
                    <p className="text-gray-600">
                      Expanding our dataset with multi-center MRI scans to improve model robustness.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Foundation Models</h4>
                    <p className="text-gray-600">
                      Developing specialized foundation models for medical imaging applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
       <ContactSection />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CirrAI</h3>
              <p className="text-gray-400">Pioneering the future of AI technology</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Automation</li>
                <li>Machine Learning</li>
                <li>Data Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
