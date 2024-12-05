import React, { useState } from 'react';
import { Check, Server, Globe, Cloud, Mail, Shield, Menu, X, ArrowRight } from 'lucide-react';

type Plan = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
};

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('/');

  const navigate = (path: string): void => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return (
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold cursor-pointer" onClick={() => navigate('/')}>
                Inceptors Digitalx
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <button onClick={() => navigate('/')} className="hover:bg-white/10 px-3 py-2 rounded-md">
                  Home
                </button>
                <button onClick={() => navigate('/about')} className="hover:bg-white/10 px-3 py-2 rounded-md">
                  About Us
                </button>
                <button onClick={() => navigate('/services')} className="hover:bg-white/10 px-3 py-2 rounded-md">
                  Services
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {isOpen && (
            <div className="md:hidden pb-3">
              <div className="flex flex-col space-y-2">
                <button onClick={() => { navigate('/'); setIsOpen(false); }} className="hover:bg-white/10 px-3 py-2 rounded-md">
                  Home
                </button>
                <button onClick={() => { navigate('/about'); setIsOpen(false); }} className="hover:bg-white/10 px-3 py-2 rounded-md">
                  About Us
                </button>
                <button onClick={() => { navigate('/services'); setIsOpen(false); }} className="hover:bg-white/10 px-3 py-2 rounded-md">
                  Services
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };

  const PricingCard: React.FC<{ plan: Plan }> = ({ plan }) => {
    const handleSelect = (): void => {
      window.location.href = 'https://wa.link/cqplzm';
    };

    return (
      <div className={`p-6 rounded-lg ${plan.popular ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' : 'bg-white'} 
        shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col h-full`}>
        {plan.popular && (
          <div className="px-3 py-1 text-sm bg-yellow-400 text-gray-900 rounded-full w-fit mb-4">
            Most Popular
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">${plan.price}</span>
          <span className="ml-1">/mo</span>
        </div>
        <ul className="space-y-3 mb-6 flex-grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={handleSelect}
          className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2
            ${plan.popular ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          <span>Select Plan</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  };

  const HomePage: React.FC = () => {
    const plans: Plan[] = [
      {
        name: 'Express Windows Server VPS',
        price: '7.99',
        features: [
          '4GB RAM',
          '2 CPU Cores',
          '60GB SSD Disk Space',
          '100Mbps Unmetered Bandwidth',
        ],
      },
      {
        name: 'Basic Windows Server VPS',
        price: '18.99',
        popular: true,
        features: [
          '8GB RAM',
          '4 CPU Cores',
          '140GB SSD Disk Space',
          '200Mbps Unmetered Bandwidth',
        ],
      },
      {
        name: 'Professional Windows Server VPS',
        price: '35.99',
        features: [
          '18GB RAM',
          '8 CPU Cores',
          '240GB SSD Disk Space',
          '300Mbps Unmetered Bandwidth',
        ],
      },
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Power Your Digital Dreams with Premium VPS Solutions
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              High-performance Windows Server VPS hosting with guaranteed resources and unmetered bandwidth
            </p>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Plans
            </button>
          </div>
        </div>

        <div id="pricing" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Windows Server VPS Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AboutPage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              About Inceptors Digitalx
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in digital infrastructure and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">VPS Hosting</h3>
              <p className="text-gray-600">
                High-performance Windows Server VPS solutions with guaranteed resources and expert support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Domain Services</h3>
              <p className="text-gray-600">
                Register and manage your perfect domain names with our comprehensive domain services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-gray-600">
                Scalable cloud infrastructure designed to grow with your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ServicesPage: React.FC = () => {
    const services: Service[] = [
      {
        icon: <Server className="h-8 w-8" />,
        title: 'VPS Hosting',
        description: 'High-performance Windows Server VPS solutions with full root access and guaranteed resources.',
        features: [
          'Windows Server 2022',
          'Full Administrator Access',
          'DDoS Protection',
          'Automated Backups'
        ]
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: 'Domain Services',
        description: 'Complete domain registration and management services for your online presence.',
        features: [
          'Domain Registration',
          'DNS Management',
          'Domain Transfer',
          'Privacy Protection'
        ]
      },
      {
        icon: <Cloud className="h-8 w-8" />,
        title: 'Cloud Solutions',
        description: 'Scalable and flexible cloud infrastructure to meet your growing business needs.',
        features: [
          'Private Cloud',
          'Hybrid Cloud',
          'Cloud Storage',
          'Cloud Backup'
        ]
      },
      {
        icon: <Mail className="h-8 w-8" />,
        title: 'Email Hosting',
        description: 'Professional email hosting solutions for businesses of all sizes.',
        features: [
          'Custom Domain Emails',
          'Large Mailbox Storage',
          'Spam Protection',
          'Mobile Access'
        ]
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: 'Security Services',
        description: 'Comprehensive security solutions to protect your digital assets.',
        features: [
          'SSL Certificates',
          'Firewall Protection',
          'Malware Scanning',
          'Intrusion Detection'
        ]
      }
    ];

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to power your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {currentPath === '/' && <HomePage />}
        {currentPath === '/about' && <AboutPage />}
        {currentPath === '/services' && <ServicesPage />}
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">Inceptors Digitalx</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
              <a href="#" className="hover:text-gray-300">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Inceptors Digitalx. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;