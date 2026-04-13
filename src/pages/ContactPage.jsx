import { Helmet } from 'react-helmet-async'
import PageHero from '../components/shared/PageHero'
import ContactForm from '../components/shared/ContactForm'

const trustItems = [
  { icon: '🛡️', title: 'ללא התחייבות', desc: 'האבחון שלנו הוא שלכם, תעשו איתו מה שתרצו.' },
  { icon: '⭐', title: 'ייעוץ אמיתי', desc: 'שיחה עם ליאור ישירות — לא עם מוקד מכירות.' },
  { icon: '⚡', title: 'מחזירים מהר', desc: 'בדרך כלל בתוך כמה שעות, לכל היותר יום עסקים.' },
]

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>צור קשר | VELO Studio — אבחון דיגיטלי חינם</title>
        <meta name="description" content="השאירו פרטים וקבלו אבחון דיגיטלי חינם מליאור וליקין. שיחת ייעוץ ישירה, ללא התחייבות — מבינים את העסק שלכם ומציגים תוכנית ברורה." />
        <meta name="keywords" content="צור קשר VELO Studio, אבחון דיגיטלי חינם, ייעוץ שיווק דיגיטלי, ליאור וליקין" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/contact" />
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
              <p style={{ color: '#8ba3c7', fontSize: '0.95rem', marginBottom: 28, lineHeight: 1.65 }}>
                ממלאים טופס פשוט, ואנחנו מתאמים שיחה שנוחה לכם.
              </p>
              <ContactForm source="contact-page" />
            </div>

            {/* Trust + contact info */}
            <div style={{ flex: '1 1 280px', minWidth: 0, paddingTop: 8 }}>
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 20 }}>למה כדאי לדבר איתנו?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {trustItems.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: 3 }}>{item.title}</p>
                        <p style={{ color: '#6a88ad', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 24 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>פרטי יצירת קשר</h3>
                {[
                  { icon: '📞', text: '050-0000000', label: 'טלפון' },
                  { icon: '✉️', text: 'hello@velo-studio.com', label: 'אימייל' },
                  { icon: '💬', text: 'WhatsApp זמין', label: 'ווטסאפ' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                    <div>
                      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', display: 'block' }}>{item.label}</span>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 28, padding: '16px 20px', borderRadius: 12, background: 'rgba(26,111,255,0.07)', border: '1px solid rgba(26,111,255,0.18)' }}>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem', marginBottom: 4, fontWeight: 600 }}>מקבלים לקוחות חדשים?</p>
                <p style={{ color: '#4d9fff', fontWeight: 700, fontSize: '0.9rem' }}>מספר הפרויקטים בחודש מוגבל</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
