import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - AgriConnect | Ahmedabad Agri Broker</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="display-l mb-12">Built on Relationships.<br />Driven by Markets.</h1>
        <div className="prose prose-lg">
          <p className="text-xl">We are the trusted bridge in India's agri commodity trade, based in Ahmedabad, Gujarat.</p>
          {/* Add full content from prompt */}
        </div>
      </div>
    </>
  );
};

export default About;
