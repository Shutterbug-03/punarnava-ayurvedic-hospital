import re

with open('/Users/dharanshsingh/punarnava-ayurvedic-hospital/public/blog/piles-treatment-without-surgery-kanpur.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Title
html = re.sub(r'<title>.*?</title>', '<title>What is Panchakarma? A Complete Beginner\'s Guide | Punarnava Hospital</title>', html, flags=re.DOTALL)

# Replace Meta Description
html = re.sub(r'<meta name="description" content=".*?" />', '<meta name="description" content="A comprehensive introduction to Panchakarma — the five-fold Ayurvedic detoxification system. Learn what it treats and what to expect at Punarnava Hospital, Kanpur." />', html, flags=re.DOTALL)

# Replace OG Title
html = re.sub(r'<meta property="og:title" content=".*?" />', '<meta property="og:title" content="What is Panchakarma? A Complete Beginner\'s Guide | Punarnava Hospital" />', html, flags=re.DOTALL)

# Replace OG Description
html = re.sub(r'<meta property="og:description" content=".*?" />', '<meta property="og:description" content="A comprehensive introduction to Panchakarma — the five-fold Ayurvedic detoxification system. Learn what it treats and what to expect at Punarnava Hospital, Kanpur." />', html, flags=re.DOTALL)

# Replace Twitter Title
html = re.sub(r'<meta name="twitter:title" content=".*?" />', '<meta name="twitter:title" content="What is Panchakarma? A Complete Beginner\'s Guide | Punarnava Hospital" />', html, flags=re.DOTALL)

# Replace Twitter Description
html = re.sub(r'<meta name="twitter:description" content=".*?" />', '<meta name="twitter:description" content="A comprehensive introduction to Panchakarma — the five-fold Ayurvedic detoxification system. Learn what it treats and what to expect at Punarnava Hospital, Kanpur." />', html, flags=re.DOTALL)

# Replace Canonical and URLs
html = re.sub(r'<link rel="canonical" href=".*?" />', '<link rel="canonical" href="https://pahindia.com/blog/what-is-panchakarma-complete-guide" />', html)
html = re.sub(r'<meta property="og:url" content=".*?" />', '<meta property="og:url" content="https://pahindia.com/blog/what-is-panchakarma-complete-guide" />', html)


# JSON-LD
old_json = """  "headline": "Piles Treatment Without Surgery in Kanpur: Ksharsutra vs Conventional Methods",
  "description": "Complete guide to non-surgical piles treatment using Ksharsutra Ayurvedic therapy by Dr B.S. Katiyar at Punarnava Ayurvedic Hospital, Kanpur.",
  "author": {"@type": "Physician", "name": "Dr B.S. Katiyar", "url": "https://pahindia.com/dr-bs-katiyar"},
  "publisher": {"@id": "https://pahindia.com/#organization"},
  "datePublished": "2026-04-02",
  "dateModified": "2026-04-02",
  "url": "https://pahindia.com/blog/piles-treatment-without-surgery-kanpur",
  "mainEntityOfPage": "https://pahindia.com/blog/piles-treatment-without-surgery-kanpur"
}"""

new_json = """  "headline": "What is Panchakarma? A Complete Beginner's Guide",
  "description": "A comprehensive introduction to Panchakarma — the five-fold Ayurvedic detoxification system at Punarnava Ayurvedic Hospital, Kanpur.",
  "author": {"@type": "Physician", "name": "Dr B.S. Katiyar", "url": "https://pahindia.com/dr-bs-katiyar"},
  "publisher": {"@id": "https://pahindia.com/#organization"},
  "datePublished": "2026-04-02",
  "dateModified": "2026-04-02",
  "url": "https://pahindia.com/blog/what-is-panchakarma-complete-guide",
  "mainEntityOfPage": "https://pahindia.com/blog/what-is-panchakarma-complete-guide"
}"""
html = html.replace(old_json, new_json)

# Breadcrumb
html = html.replace('<li>Piles Treatment Without Surgery</li>', '<li>What is Panchakarma?</li>')
html = html.replace('<h1>Piles Treatment Without Surgery in Kanpur</h1>', '<h1>What is Panchakarma? A Complete Beginner\'s Guide</h1>')

# Content
start_marker = '<h2 style="color:#2a6496;margin-bottom:20px;">'
end_marker = '<div class="col-md-4 col-sm-12">'
start_idx = html.find(start_marker)
end_idx = html.find(end_marker, start_idx + len(start_marker))

new_content = """<h2 style="color:#2a6496;margin-bottom:20px;">What is Panchakarma? A Complete Beginner's Guide</h2>

        <p>In today's fast-paced world, our bodies accumulate toxins (Ama) through processed foods, pollution, and chronic stress. While our natural detoxification systems work tirelessly, they can become overwhelmed. This is where <strong>Panchakarma</strong> — Ayurveda's elite detoxification and rejuvenation system — comes in.</p>

        <h3 style="color:#2a6496;margin-top:30px;">The Core Concept of Panchakarma</h3>
        <p>In Sanskrit, <em>Pancha</em> means "five" and <em>Karma</em> means "action" or "treatment". Panchakarma refers to the five primary procedures used to clear impurities and balance the three doshas (Vata, Pitta, and Kapha).</p>
        <p>Unlike a trendy juice cleanse, Panchakarma is a deeply therapeutic, medically supervised process that operates at a cellular level, removing deep-rooted metabolic waste.</p>

        <h3 style="color:#2a6496;margin-top:30px;">The Three Stages of Panchakarma</h3>
        <p>Panchakarma is not a drop-in spa treatment; it is a systematic process that must be followed carefully to be effective.</p>

        <h4 style="color:#333;margin-top:20px;">1. Poorva Karma (Preparatory Stage)</h4>
        <p>Before toxins can be eliminated, they must be loosened and moved to the digestive tract. This involves:</p>
        <ul class="list-style-one">
          <li><strong>Snehan (Oleation):</strong> Application of medicated oils internally (drinking ghee/oil) and externally (massage). This softens the tissues and dissolves fat-soluble toxins.</li>
          <li><strong>Swedan (Fomentation):</strong> Sweating therapy using herbal steam. This opens the bodily channels (Srotas) and directs toxins toward the gastrointestinal tract.</li>
        </ul>

        <h4 style="color:#333;margin-top:20px;">2. Pradhan Karma (The Five Main Therapies)</h4>
        <p>Depending on your dosha imbalance, our doctors will prescribe one or more of the following:</p>
        <ul class="list-style-one">
          <li><strong>Vaman (Emesis):</strong> Therapeutic vomiting to remove excess Kapha (mucus). Used for asthma, chronic cough, and skin diseases.</li>
          <li><strong>Virechan (Purgation):</strong> Medicated laxative therapy to clear Pitta (acid/bile) from the liver and gallbladder. Effective for digestive disorders and jaundice.</li>
          <li><strong>Basti (Enema):</strong> Introduction of herbal decoctions or oils into the colon to balance Vata. Considered the mother of all Panchakarma treatments, it treats arthritis, chronic constipation, and neurological issues.</li>
          <li><strong>Nasya (Nasal Administration):</strong> Administration of herbal oils through the nasal passages. Clears the head and neck, treating migraines, sinusitis, and hair loss.</li>
          <li><strong>Raktamokshan (Bloodletting):</strong> Controlled removal of impure blood (often using leeches) for complex skin disorders and localized inflammation.</li>
        </ul>

        <h4 style="color:#333;margin-top:20px;">3. Paschatya Karma (Post-Treatment Care)</h4>
        <p>After deep cleansing, your digestive fire (Agni) is weak. This phase involves a strict, graduated diet (starting with thin rice gruel) and lifestyle modifications to slowly restore strength and rebuild healthy tissues (Rasayana).</p>

        <h3 style="color:#2a6496;margin-top:30px;">Who Needs Panchakarma?</h3>
        <p>Panchakarma is highly recommended for individuals suffering from:</p>
        <ul class="list-style-one">
          <li>Chronic joint pain, arthritis, or back pain</li>
          <li>Digestive issues like IBS or chronic acid reflux</li>
          <li>Skin disorders like eczema or psoriasis</li>
          <li>Metabolic conditions like obesity or diabetes</li>
          <li>High stress, anxiety, or insomnia</li>
        </ul>
        <p>It is also excellent for healthy individuals seeking seasonal rejuvenation, anti-aging benefits, and enhanced immunity.</p>

        <h3 style="color:#2a6496;margin-top:30px;">Experience Genuine Panchakarma in Kanpur</h3>
        <p>Authentic Panchakarma must be supervised by an experienced Ayurvedic physician. At Punarnava Ayurvedic Hospital in Kanpur, <a href="../dr-bs-katiyar.html">Dr. B.S. Katiyar</a> tailors every Panchakarma program to the individual's unique constitution (Prakriti) and specific ailments.</p>

        <div style="background:#e8f4fd;padding:20px;border-radius:6px;margin-top:30px;margin-bottom:30px;border-left:4px solid #2a6496;">
          <h4 style="color:#2a6496;">Start Your Healing Journey Today</h4>
          <p>Schedule a detailed dosha analysis to see which Panchakarma therapies are right for you.</p>
          <a href="../contact.html" class="theme-btn" style="padding:10px 25px;">Book a Consultation</a>
          <a href="tel:+918009708080" style="margin-left:15px;font-weight:bold;color:#2a6496;">+91-8009708080</a>
        </div>

      </div>
      """

html = html[:start_idx] + new_content + html[end_idx:]

with open('/Users/dharanshsingh/punarnava-ayurvedic-hospital/public/blog/what-is-panchakarma-complete-guide.html', 'w', encoding='utf-8') as f:
    f.write(html)
