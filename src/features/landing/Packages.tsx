import Button from '../../components/ui/Button';
import packagesData from '../../data/packages.json';
import '../../styles/Packages.css';

export interface PackagePlan {
  id: number;
  name: string;
  speed: string;
  price: string;
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
        </div>

        <div className="pricing-grid">
          {packagesData?.map((pkg: any)  => (
            <div
              key={pkg.id}
              className={`pricing-card ${pkg.popular ? 'pricing-card--popular' : ''}`}
            >
              {pkg.popular && <div className="popular-pill">MOST POPULAR</div>}

              <h3 className="plan-name">{pkg.name}</h3>
              <div className="plan-speed">{pkg.speed}</div>

              <div className="plan-price-box">
                <span className="plan-price">{pkg.price}</span>
                <span className="plan-period">/mo</span>
              </div>

               <ul className="plan-features">
                {pkg.features?.map((feat: string, idx: number) => (
                  <li key={idx} className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Reusable Button component */}
              <div className="plan-action">
                <Button
                  variant={pkg.popular ? 'primary' : 'outlined'}
                  fullWidth
                  pill
                >
                  Get Connected
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;