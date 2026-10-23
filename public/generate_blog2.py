import re

with open('/Users/dharanshsingh/punarnava-ayurvedic-hospital/public/blog/piles-treatment-without-surgery-kanpur.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Title
html = re.sub(r'<title>.*?</title>', '<title>Ayurvedic Treatment for Fistula-in-Ano in Kanpur | Ksharsutra Therapy</title>', html, flags=re.DOTALL)

# Replace Meta Description
html = re.sub(r'<meta name="description" content=".*?" />', '<meta name="description" content="Fistula-in-ano is notoriously difficult to treat. Learn how Ksharsutra offers a safe, low-recurrence Ayurvedic solution at Punarnava Hospital, Kanpur." />', html, flags=re.DOTALL)

# Replace OG Title
html = re.sub(r'<meta property="og:title" content=".*?" />', '<meta property="og:title" content="Ayurvedic Treatment for Fistula-in-Ano in Kanpur | Ksharsutra Therapy" />', html, flags=re.DOTALL)

# Replace OG Description
html = re.sub(r'<meta property="og:description" content=".*?" />', '<meta property="og:description" content="Fistula-in-ano is notoriously difficult to treat. Learn how Ksharsutra offers a safe, low-recurrence Ayurvedic solution at Punarnava Hospital, Kanpur." />', html, flags=re.DOTALL)

# Replace Twitter Title
html = re.sub(r'<meta name="twitter:title" content=".*?" />', '<meta name="twitter:title" content="Ayurvedic Treatment for Fistula-in-Ano in Kanpur | Ksharsutra Therapy" />', html, flags=re.DOTALL)

# Replace Twitter Description
html = re.sub(r'<meta name="twitter:description" content=".*?" />', '<meta name="twitter:description" content="Fistula-in-ano is notoriously difficult to treat. Learn how Ksharsutra offers a safe, low-recurrence Ayurvedic solution at Punarnava Hospital, Kanpur." />', html, flags=re.DOTALL)

# Replace Canonical and URLs
html = re.sub(r'<link rel="canonical" href=".*?" />', '<link rel="canonical" href="https://pahindia.com/blog/ayurvedic-fistula-treatment-kanpur" />', html)
html = re.sub(r'<meta property="og:url" content=".*?" />', '<meta property="og:url" content="https://pahindia.com/blog/ayurvedic-fistula-treatment-kanpur" />', html)


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

new_json = """  "headline": "Ayurvedic Treatment for Fistula-in-Ano in Kanpur",
  "description": "Fistula-in-ano is notoriously difficult to treat. Learn how Ksharsutra offers a safe, low-recurrence Ayurvedic solution at Punarnava Hospital, Kanpur.",
  "author": {"@type": "Physician", "name": "Dr B.S. Katiyar", "url": "https://pahindia.com/dr-bs-katiyar"},
  "publisher": {"@id": "https://pahindia.com/#organization"},
  "datePublished": "2026-04-02",
  "dateModified": "2026-04-02",
  "url": "https://pahindia.com/blog/ayurvedic-fistula-treatment-kanpur",
  "mainEntityOfPage": "https://pahindia.com/blog/ayurvedic-fistula-treatment-kanpur"
}"""
html = html.replace(old_json, new_json)

# Breadcrumb
html = html.replace('<li>Piles Treatment Without Surgery</li>', '<li>Ayurvedic Fistula Treatment</li>')
html = html.replace('<h1>Piles Treatment Without Surgery in Kanpur</h1>', '<h1>Ayurvedic Treatment for Fistula-in-Ano in Kanpur</h1>')

# Content
start_marker = '<h2 style="color:#2a6496;margin-bottom:20px;">'
end_marker = '<div class="col-md-4 col-sm-12">'
start_idx = html.find(start_marker)
end_idx = html.find(end_marker, start_idx + len(start_marker))

new_content = """<h2 style="color:#2a6496;margin-bottom:20px;">Ayurvedic Treatment for Fistula-in-Ano in Kanpur: What to Expect from Ksharsutra</h2>

        <p>A fistula-in-ano is one of the most stubborn and painful anorectal conditions. It is an abnormal tunnel connecting the infected anal gland inside the rectum to the skin around the anus. Patients often suffer for years, enduring recurrent infections, pain, and pus discharge.</p>

        <p>The biggest challenge with treating an anal fistula is the high rate of recurrence with conventional surgeries (Fistulectomy). However, Ayurveda offers a highly effective, low-recurrence alternative: <strong>Ksharsutra Therapy</strong>.</p>

        <h3 style="color:#2a6496;margin-top:30px;">Why is an Anal Fistula Difficult to Treat?</h3>
        <p>Conventional surgery involves cutting open the fistula tract (fistulotomy) or removing it completely (fistulectomy). This approach has significant drawbacks:</p>
        <ul class="list-style-one">
          <li><strong>High Recurrence:</strong> If even a microscopic part of the tract or the internal opening is missed, the fistula will return.</li>
          <li><strong>Risk of Incontinence:</strong> Cutting the anal sphincter muscles during surgery can lead to a loss of bowel control.</li>
          <li><strong>Difficult Healing:</strong> The wound requires daily dressing and takes several weeks to heal, impacting the patient's daily life.</li>
        </ul>

        <h3 style="color:#2a6496;margin-top:30px;">How Ksharsutra Cures Fistula-in-Ano</h3>
        <p>Ksharsutra is a medicated thread coated with herbal alkaline extracts, including Snuhi latex, turmeric, and Apamarga ash. It uniquely combines physical cutting of the tract with chemical cauterization and healing.</p>

        <h4 style="color:#333;margin-top:20px;">The Procedure</h4>
        <p>Under local anesthesia, the Ksharsutra thread is carefully passed through the entire fistula tract — entering through the external opening and exiting through the internal opening inside the anal canal — and then tied securely.</p>

        <h4 style="color:#333;margin-top:20px;">The Dual Action of Ksharsutra</h4>
        <ul class="list-style-one">
          <li><strong>Simultaneous Cutting and Healing:</strong> The thread slowly cuts through the infected tract over 7 days. As it cuts the tissue above, it stimulates the healthy tissue below to heal simultaneously. This prevents the anal sphincter from separating, virtually eliminating the risk of fecal incontinence.</li>
          <li><strong>Chemical Action:</strong> The alkaline coating chemically removes the infected lining of the fistula and destroys the bacteria, clearing the pus-filled cavity. The turmeric provides strong anti-inflammatory properties.</li>
        </ul>

        <p>After approximately 7 days, the patient returns to the clinic, and the old thread is replaced with a new one. This process is repeated until the thread cuts through exactly the entire length of the tract to the surface. The number of thread changes depends on the length of the fistula (roughly 1 cm per week).</p>

        <h3 style="color:#2a6496;margin-top:30px;">Why Ksharsutra is Superior for Fistula</h3>
        <p>The Indian Council of Medical Research (ICMR) conducted multi-centric clinical trials comparing Ksharsutra to conventional surgery. The results overwhelmingly favored Ksharsutra:</p>
        <ul class="list-style-one">
          <li><strong>Recurrence Rate:</strong> Less than 3% with Ksharsutra, compared to 15-20% with conventional surgery.</li>
          <li><strong>Incontinence Risk:</strong> Practically zero with Ksharsutra, as the muscle heals as it is cut.</li>
          <li><strong>Hospitalization:</strong> It is an outpatient procedure. You go home the same day.</li>
          <li><strong>Daily Routine:</strong> You can return to normal, non-strenuous activities almost immediately.</li>
        </ul>

        <h3 style="color:#2a6496;margin-top:30px;">Fistula Treatment in Kanpur</h3>
        <p>Treating complex, high, or recurrent fistulas requires immense surgical precision and Ayurvedic expertise. At Punarnava Ayurvedic Hospital, <a href="../dr-bs-katiyar.html">Dr. B.S. Katiyar</a> is a certified PGCKS specialist with decades of experience successfully treating complex fistula cases that have previously failed surgical intervention.</p>

        <div style="background:#e8f4fd;padding:20px;border-radius:6px;margin-top:30px;margin-bottom:30px;border-left:4px solid #2a6496;">
          <h4 style="color:#2a6496;">Get Relief from Fistula Pain</h4>
          <p>Don't let a recurrent fistula disrupt your life. Consult Dr. B.S. Katiyar to discuss if Ksharsutra is right for you.</p>
          <a href="../contact.html" class="theme-btn" style="padding:10px 25px;">Book Consultation</a>
          <a href="tel:+918009708080" style="margin-left:15px;font-weight:bold;color:#2a6496;">+91-8009708080</a>
        </div>

      </div>
      """

html = html[:start_idx] + new_content + html[end_idx:]

with open('/Users/dharanshsingh/punarnava-ayurvedic-hospital/public/blog/ayurvedic-fistula-treatment-kanpur.html', 'w', encoding='utf-8') as f:
    f.write(html)
