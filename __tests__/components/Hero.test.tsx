import { render, screen } from '@testing-library/react';
import { Hero } from '../../app/components/Hero';
import { portfolioData } from '../../app/data/portfolio';

// Mock the useScrollAnimation hook since it uses IntersectionObserver which isn't in JSDOM
jest.mock('../../app/hooks/useScrollAnimation', () => ({
  useScrollAnimation: () => ({
    ref: { current: null },
    isVisible: true,
  }),
}));

describe('Hero Component', () => {
  it('renders the user name from portfolio data', () => {
    render(<Hero />);
    
    // Check if the name exists in the document
    // We use a regex to match partial text since the name might be split across spans
    const nameElement = screen.getByText(new RegExp(portfolioData.personalInfo.name, 'i'));
    expect(nameElement).toBeInTheDocument();
  });

  it('renders the role subtitle', () => {
    render(<Hero />);
    const roleElement = screen.getByText(new RegExp(portfolioData.personalInfo.roleSubtitle, 'i'));
    expect(roleElement).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<Hero />);
    expect(screen.getByText(/View Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
  });
});

