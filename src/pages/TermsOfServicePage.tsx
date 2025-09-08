import React from 'react';
import { motion } from 'framer-motion';

const TermsOfServicePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 pb-16 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Last updated: September 7, 2024</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            By accessing and using the Boldtribe Innovation Private Limited website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Services</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Boldtribe Innovation Private Limited provides web development, mobile app development, UI/UX design, and other digital services as described on our website. All services are subject to these Terms of Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. User Responsibilities</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">As a user of our services, you agree to:</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Provide accurate and complete information when required</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Not use our services for any illegal or unauthorized purpose</li>
            <li>Not interfere with or disrupt the services or servers</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Intellectual Property</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            All content, features, and functionality on our website and services, including but not limited to text, graphics, logos, and software, are the exclusive property of Boldtribe Innovation Private Limited and are protected by copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            In no event shall Boldtribe Innovation Private Limited be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Contact Information</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Email: legal@boldtribe.in<br />
            Address: DCB 630, DLF Cybercity, Patia, Bhubaneswar, Odisha 751024
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsOfServicePage;
