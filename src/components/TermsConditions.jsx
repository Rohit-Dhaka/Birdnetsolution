export default function TermsConditions() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-8">
          Effective Date: {new Date().getFullYear()}
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using our website, you agree to comply with
              these Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Rescue Services
            </h2>
            <p>
              Rescue requests are handled based on availability, location, and
              emergency priority. We cannot guarantee immediate assistance in
              every situation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information.</li>
              <li>Use the website lawfully.</li>
              <li>Do not misuse rescue resources.</li>
              <li>Respect volunteers and rescue teams.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Intellectual Property
            </h2>
            <p>
              All content, logos, images, and materials on this website are
              protected and may not be copied without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Limitation of Liability
            </h2>
            <p>
              We are not liable for any direct or indirect damages arising from
              the use of our website or rescue services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to update these terms at any time. Changes
              will be posted on this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}