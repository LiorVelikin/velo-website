import { Helmet } from 'react-helmet-async'
import PageHero from '../components/shared/PageHero'
import ContactForm from '../components/shared/ContactForm'

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const ZapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.16a16 16 0 006.93 6.93l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)
const MessageIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)

const trustItems = [
  { icon: <ShieldIcon />, color: '#4d9fff', title: 'ללא התחייבות', desc: 'האבחון שלנו הוא שלכם, תעשו איתו מה שתרצו.' },
  { icon: <StarIcon />,   color: '#ffb347', title: 'ייעוץ אמיתי',   desc: 'שיחה עם ליאור ישירות — לא עם מוקד מכירות.' },
  { icon: <ZapIcon />,   color: '#a07dff', title: 'מחזירים מהר',   desc: 'בדרך כלל בתוך כמה שעות, לכל היותר יום עסקים.' },
]

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>צור קשר | VELO DIGITAL — אבחון שיווקי חינם לעסקים</title>
        <meta name="description" content="השאירו פרטים וקבלו אבחון שיווקי חינם מליאור וליקין. שיחת ייעוץ ישירה ללא התחייבות — מבינים את העסק שלכם ומציגים תוכנית ברורה." />
        <meta name="keywords" content="צור קשר VELO DIGITAL, אבחון שיווקי חינם, ייעוץ שיווק דיגיטלי, ליאור וליקין" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/contact" />
        <meta property="og:title" content="צור קשר | VELO DIGITAL — אבחון שיווקי חינם" />
        <meta property="og:description" content="קבלו אבחון שיווקי חינם — שיחת ייעוץ ישירה עם ליאור וליקין, ללא התחייבות." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/contact" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="צור קשר | VELO DIGITAL — אבחון שיווקי חינם" />
        <meta name="twitter:description" content="קבלו אבחון שיווקי חינם — שיחת ייעוץ ישירה עם ליאור וליקין, ללא התחייבות." />
        <meta name="twitter:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
      </Helmet>

      <PageHero
        tag="בואו נדבר"
        title="קבלו אבחון דיגיטלי חינם"
        accent="אבחון דיגיטלי חינם"
        subtitle="שיחת היכרות של 30 דקות. ליאור ישמע על העסק שלכם, ויגיד לכם בדיוק מה צריך לשנות כדי לקבל יותר לקוחות — ללא מצגת מכירה."
      />

      <section style={{ padding: 'clamp(32px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,64px)', alignItems: 'flex-start' }}>

            {/* Form */}
            <div style={{ flex: '1 1 360px', minWidth: 0 }}>
              <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', marginBottom: 10 }}>
                השאירו פרטים — נחזור אליכם <span className="gradient-text">היום</span>
              </h2>
              <p style={{ color: '#4a5d7a', fontSize: '0.95rem', marginBottom: 28, lineHeight: 1.65 }}>
                ממלאים טופס פשוט, ואנחנו מתאמים שיחה שנוחה לכם.
              </p>
              <ContactForm source="contact-page" />
            </div>

            {/* Trust + contact info */}
            <div style={{ flex: '1 1 280px', minWidth: 0, paddingTop: 8 }}>
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ color: '#0a0f1e', fontWeight: 700, fontSize: '1rem', marginBottom: 20 }}>למה כדאי לדבר איתנו?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {trustItems.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: `${item.color}18`, border: `1px solid ${item.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: item.color, flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ color: '#0a0f1e', fontWeight: 700, fontSize: '0.9rem', marginBottom: 3 }}>{item.title}</p>
                        <p style={{ color: '#6a88ad', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ height: 1, background: 'rgba(10,15,30,0.08)', marginBottom: 24 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <h3 style={{ color: '#0a0f1e', fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>פרטי יצירת קשר</h3>
                {[
                  { icon: <PhoneIcon />,   text: '054-4286018',            label: 'טלפון'   },
                  { icon: <MailIcon />,    text: 'hello@velo-studio.com',  label: 'אימייל'  },
                  { icon: <MessageIcon />, text: 'WhatsApp זמין',          label: 'ווטסאפ' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ color: '#4d9fff', opacity: 0.8, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <span style={{ color: 'rgba(10,15,30,0.45)', fontSize: '0.7rem', display: 'block' }}>{item.label}</span>
                      <span style={{ color: '#0a0f1e', fontSize: '0.88rem' }}>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 28, padding: '16px 20px', borderRadius: 12, background: 'rgba(26,111,255,0.07)', border: '1px solid rgba(26,111,255,0.18)' }}>
                <p style={{ color: '#4a5d7a', fontSize: '0.78rem', marginBottom: 4, fontWeight: 600 }}>מקבלים לקוחות חדשים?</p>
                <p style={{ color: '#4d9fff', fontWeight: 700, fontSize: '0.9rem' }}>מספר הפרויקטים בחודש מוגבל</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
