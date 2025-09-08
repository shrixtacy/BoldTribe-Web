import React from 'react';
import { motion } from 'framer-motion';

const ServicesPolicyPage = () => {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 pt-24 pb-16 sm:px-6 lg:px-8 mt-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Services Policy</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Last updated: September 7, 2024</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Service Description</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Boldtribe Innovation Private Limited offers a range of digital services including but not limited to web development, mobile app development, UI/UX design, digital marketing, and IT consulting. Each service is tailored to meet the specific needs of our clients.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Service Delivery</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Our service delivery process includes:</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Initial consultation and requirement gathering</li>
            <li>Project planning and proposal submission</li>
            <li>Development and design phase</li>
            <li>Testing and quality assurance</li>
            <li>Deployment and handover</li>
            <li>Post-launch support and maintenance</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Client Responsibilities</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">To ensure smooth service delivery, clients are expected to:</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Provide complete and accurate project requirements</li>
            <li>Respond to queries and provide feedback in a timely manner</li>
            <li>Provide necessary access to systems, APIs, or other resources</li>
            <li>Adhere to agreed-upon payment schedules</li>
            <li>Respect intellectual property rights</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Revisions and Changes</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We include a reasonable number of revisions in our service packages. Additional revisions or significant changes to the original scope may incur additional charges. All change requests should be submitted in writing and will be assessed for impact on timeline and budget.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Service Level Agreement (SLA)</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Our standard SLA includes:</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Response time: 24 hours for standard support requests</li>
            <li>Resolution time: 48-72 hours for standard issues</li>
            <li>Emergency support: Available for critical issues affecting business operations</li>
            <li>Scheduled maintenance: With prior notice to minimize disruption</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Service Limitations</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            While we strive to provide the highest quality services, we cannot guarantee specific results such as search engine rankings, traffic levels, or business performance. Our services are provided "as is" and "as available" without any warranties, express or implied.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            For any questions or concerns about our Services Policy, please contact us at:
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Email: services@boldtribe.in<br />
            Phone: +91 76848 36139<br />
            Address: DCB 630, DLF Cybercity, Patia, Bhubaneswar, Odisha 751024
          </p>
        </section>
      </div>
    </motion.main>
  );
};

export default ServicesPolicyPage;
