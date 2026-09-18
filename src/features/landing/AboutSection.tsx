import Card from '../../components/ui/Card';
import '../../styles/About.css';

interface MetricItem {
  value: string;
  label: string;
  description: string;
}

const METRICS: MetricItem[] = [
  {
    value: '99.9%',
    label: 'Uptime Guarantee',
    description: 'Ultra-reliable fiber connections with automated failover.',
  },
  {
    value: '24/7',
    label: 'Dedicated Support',
    description: 'Local technical support ready to assist you anytime.',
  },
  {
    value: '100+',
    label: 'Mbps Speeds',
    description: 'Symmetrical upload & download bandwidth capabilities.',
  },
  {
    value: '10k+',
    label: 'Active Users',
    description: 'Homes and local businesses connected across the region.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Two-Column Top Grid: Text Mission vs. Visual Placeholder */}
        <div className="about-grid">
          {/* Column 1: Text / Mission Statement */}
          <div className="about-text-content">
            <span className="section-badge">About NetConnect</span>
            <h2 className="about-title">
              Empowering Communities with High-Speed Fiber Connectivity
            </h2>
            <p className="about-mission">
              Our mission is to close the digital divide by delivering fast, uninterrupted, and affordable fiber optic internet to homes and enterprise businesses.
            </p>
            <p className="about-description">
              We engineer scalable network infrastructure built for high bandwidth demand—ensuring low latency for remote work, HD media streaming, online learning, and cloud application access.
            </p>
          </div>

          {/* Column 2: Visual Media Placeholder */}
          <div className="about-media-wrapper">
            <div className="media-placeholder">
              <div className="media-overlay-gradient" />
              <div className="media-badge-tag">Network Hub</div>
              <div className="media-placeholder-content">
                <span className="media-icon">📡</span>
                <p>Fiber Infrastructure Visual Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Callouts Section using Grid Cards */}
        <div className="metrics-grid">
          {METRICS.map((metric, index) => (
            <Card key={index} padding="md" hoverable className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <h3 className="metric-label">{metric.label}</h3>
              <p className="metric-description">{metric.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;