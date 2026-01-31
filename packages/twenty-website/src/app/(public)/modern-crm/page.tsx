import Link from 'next/link';

import { ContentContainer } from '@/app/_components/ui/layout/ContentContainer';

export const metadata = {
  title: 'Twenty - Modern CRM',
  description:
    'Launch a modern CRM with AI-ready workflows, collaborative pipelines, and real-time insights.',
};

const highlights = [
  {
    title: 'Unified customer timeline',
    description:
      'Keep every interaction, note, and document in a single narrative so teams never lose context.',
  },
  {
    title: 'Deal pipeline clarity',
    description:
      'Visual stages, health signals, and forecast confidence help you spot risk before it lands.',
  },
  {
    title: 'Automation that feels human',
    description:
      'Trigger playbooks, personalize follow-ups, and route tasks to the right owner automatically.',
  },
];

const metrics = [
  { label: 'Avg. onboarding time', value: '2 days' },
  { label: 'Pipeline visibility', value: '4x' },
  { label: 'Manual work removed', value: '35%' },
  { label: 'Team adoption', value: '92%' },
];

const workflows = [
  {
    title: 'Lead capture → enrichment',
    description:
      'Collect inbound leads, enrich them with firmographic data, and qualify instantly.',
  },
  {
    title: 'Pipeline → close plan',
    description:
      'Auto-generate close plans with mutual action items and next-step reminders.',
  },
  {
    title: 'Customer success → expansion',
    description:
      'Monitor health, surface renewal risks, and collaborate on expansion plays.',
  },
];

export default function ModernCrmPage() {
  return (
    <ContentContainer>
      <section
        style={{
          marginTop: '64px',
          padding: '48px',
          borderRadius: '32px',
          background:
            'linear-gradient(135deg, rgba(15,23,42,0.06), rgba(59,130,246,0.12))',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontSize: '12px',
                fontWeight: 600,
                color: '#2563eb',
                marginBottom: '16px',
              }}
            >
              Modern CRM Blueprint
            </p>
            <h1 style={{ fontSize: '40px', marginBottom: '16px' }}>
              Build a CRM your team actually loves to open every day
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.6 }}>
              Combine structured pipelines, real-time collaboration, and an
              intuitive UI with the flexibility of Twenty. This blueprint shows
              how to deliver a modern CRM experience using the existing
              codebase.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <Link
                href="https://docs.twenty.com"
                style={{
                  background: '#0f172a',
                  color: '#fff',
                  padding: '12px 20px',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                Explore the docs
              </Link>
              <Link
                href="https://github.com/twentyhq/twenty"
                style={{
                  border: '1px solid #0f172a',
                  color: '#0f172a',
                  padding: '12px 20px',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                View the code
              </Link>
            </div>
          </div>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
            }}
          >
            <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>
              CRM command center
            </h2>
            <p style={{ color: '#475569', lineHeight: 1.6 }}>
              A clean workspace with activities, health indicators, and
              cross-functional visibility.
            </p>
            <div
              style={{
                marginTop: '20px',
                display: 'grid',
                gap: '12px',
              }}
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    background: '#f8fafc',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: '#475569' }}>{metric.label}</span>
                  <span>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '64px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>
          Experience the modern CRM essentials
        </h2>
        <p style={{ color: '#475569', marginBottom: '32px' }}>
          Use existing Twenty building blocks to deliver fast, collaborative,
          and transparent revenue workflows.
        </p>
        <div
          style={{
            display: 'grid',
            gap: '24px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          }}
        >
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '20px',
                background: '#fff',
              }}
            >
              <h3 style={{ marginBottom: '8px' }}>{highlight.title}</h3>
              <p style={{ color: '#475569', lineHeight: 1.6 }}>
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: '64px',
          padding: '40px',
          borderRadius: '28px',
          background: '#0f172a',
          color: '#f8fafc',
        }}
      >
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>
          Workflow blueprints powered by Twenty
        </h2>
        <div
          style={{
            display: 'grid',
            gap: '24px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        >
          {workflows.map((workflow) => (
            <div
              key={workflow.title}
              style={{
                background: 'rgba(148, 163, 184, 0.15)',
                padding: '20px',
                borderRadius: '20px',
              }}
            >
              <h3 style={{ marginBottom: '8px' }}>{workflow.title}</h3>
              <p style={{ color: '#cbd5f5', lineHeight: 1.6 }}>
                {workflow.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '64px', marginBottom: '80px' }}>
        <div
          style={{
            display: 'grid',
            gap: '24px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            alignItems: 'center',
          }}
        >
          <div>
            <h2 style={{ fontSize: '30px', marginBottom: '12px' }}>
              Designed for modern sales teams
            </h2>
            <p style={{ color: '#475569', lineHeight: 1.6 }}>
              Ship a CRM that adapts to your process, integrates with your
              stack, and keeps every stakeholder aligned. Twenty gives you the
              APIs, workflows, and UI patterns you need to launch fast.
            </p>
          </div>
          <div
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '24px',
            }}
          >
            <p style={{ fontStyle: 'italic', color: '#1e293b' }}>
              “We finally have a CRM that feels like a command center instead of
              a spreadsheet.”
            </p>
            <p style={{ marginTop: '12px', fontWeight: 600 }}>
              — Sales Operations Lead
            </p>
          </div>
        </div>
      </section>
    </ContentContainer>
  );
}
