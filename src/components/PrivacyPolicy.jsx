export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Last Updated: {new Date().getFullYear()}
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, phone number, and any information you provide when
              contacting us or requesting rescue services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide bird rescue assistance.</li>
              <li>Respond to inquiries and requests.</li>
              <li>Improve our services and website.</li>
              <li>Send important updates regarding rescue activities.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Data Protection
            </h2>
            <p>
              We implement reasonable security measures to protect your
              information from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Third-Party Services
            </h2>
            <p>
              Our website may use trusted third-party services such as Google
              Maps, Email Services, or Analytics tools.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us through our Contact page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}