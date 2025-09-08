import React from 'react';
import { motion } from 'framer-motion';

const RefundPolicyPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 pb-16 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Refund Policy</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Last updated: September 7, 2024</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            At Boldtribe Innovation Private Limited, we strive to ensure complete customer satisfaction with our services. This Refund Policy outlines the terms and conditions for requesting refunds for services purchased through our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Eligibility for Refund</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Refund requests will be considered under the following circumstances:</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Service not delivered as described</li>
            <li>Service not delivered within the specified timeframe</li>
            <li>Technical issues preventing service delivery</li>
            <li>Duplicate payment for the same service</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Non-Refundable Services</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">The following services are non-refundable:</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Custom development work that has already begun</li>
            <li>Domain name registrations and renewals</li>
            <li>Third-party services and licenses</li>
            <li>Services marked as non-refundable at the time of purchase</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Refund Process</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">To request a refund, please follow these steps:</p>
          <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Contact our support team at support@boldtribe.in within 14 days of purchase</li>
            <li>Provide your order number and reason for the refund request</li>
            <li>Our team will review your request within 5-7 business days</li>
            <li>If approved, the refund will be processed to your original payment method within 10-14 business days</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Partial Refunds</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            In some cases, partial refunds may be granted at our discretion, particularly for services that have been partially completed or utilized. The amount refunded will be proportional to the unused portion of the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about our Refund Policy, please contact us at:
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Email: billing@boldtribe.in<br />
            Phone: +91 76848 36139<br />
            Address: DCB 630, DLF Cybercity, Patia, Bhubaneswar, Odisha 751024
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default RefundPolicyPage;
