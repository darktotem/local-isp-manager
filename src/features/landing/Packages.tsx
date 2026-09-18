
import packagesData from '../../data/packages.json';
import '../../styles/Packages.css';


export interface InternetPackage {
  id: string;
  name: string;
  speed: string;
  price: number;
  currency: string;
  period: string;
  popular?: boolean;
  features: string[];
}

export const Packages = () => {
  return (
    <section id="packages" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <span className="pricing-badge">PRICING PLANS</span>
          <h2 className="pricing-title">Choose Your Internet Package</h2>
          <p className="pricing-subtitle">Unlimited high-speed fiber internet with no hidden charges.</p>
        </div>

        <div className="pricing-grid">
          {packagesData?.map((pkg: any) => (
            <div 
              key={pkg.id || pkg.name} 
              className={`pricing-card ${pkg.popular ? 'pricing-card--popular' : ''}`}
            >
              {pkg.popular && <div className="popular-pill">MOST POPULAR</div>}
              
              <div className="plan-icon-badge">{pkg.name.charAt(0)}</div>
              <h3 className="plan-name">{pkg.name}</h3>
              <div className="plan-speed">{pkg.speed}</div>

              <div className="plan-price-box">
                <span className="plan-price">{pkg.price}</span>
                <span className="plan-period">/ month</span>
              </div>

              <ul className="plan-features">
                {pkg.features?.map((feat: string, idx: number) => (
                  <li key={idx} className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-send-message" style={{ marginTop: '1.5rem' }}>
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;