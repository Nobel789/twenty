import { ContentContainer } from '../_components/ui/layout/ContentContainer';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <ContentContainer>
      <div
        style={{
          minHeight: '60vh',
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <p>
          Part of the website is built directly with Framer, including the
          homepage. We use Cloudflare to split the traffic between the two
          sites.
        </p>
        <p>
          Looking for a modern CRM blueprint? Visit{' '}
          <a href="/modern-crm" style={{ fontWeight: 600 }}>
            /modern-crm
          </a>{' '}
          to explore the new experience page.
        </p>
      </div>
    </ContentContainer>
  );
}
