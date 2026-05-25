(function () {
  var BOOKING_URL = "https://calendly.com/bg-aiplacers/new-meeting";
  var scheduled = false;

  function setText(element, text) {
    if (element && element.textContent !== text) {
      element.textContent = text;
    }
  }

  function setHtml(element, html) {
    if (element && element.getAttribute("data-cro-html") !== "true") {
      element.innerHTML = html;
      element.setAttribute("data-cro-html", "true");
    }
  }

  function replaceTextNodes(root, replacements) {
    if (!root) {
      return;
    }

    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;

    while ((node = walker.nextNode())) {
      var current = node.nodeValue;
      Object.keys(replacements).forEach(function (from) {
        if (current.indexOf(from) !== -1) {
          current = current.split(from).join(replacements[from]);
        }
      });

      if (node.nodeValue !== current) {
        node.nodeValue = current;
      }
    }
  }

  function updateCtas() {
    Array.prototype.slice.call(document.querySelectorAll('a[href="#contact"]')).forEach(function (link) {
      link.setAttribute("href", BOOKING_URL);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });

    Array.prototype.slice.call(document.querySelectorAll(".services-card-cta")).forEach(function (link) {
      link.setAttribute("href", BOOKING_URL);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }

  function updateNavigation() {
    Array.prototype.slice.call(document.querySelectorAll("nav a")).forEach(function (link) {
      var label = (link.textContent || "").trim();
      if (label === "18 Systems") {
        setText(link, "Services");
        link.setAttribute("href", "#services");
      }
    });
  }

  function updateHero() {
    var heroTitle = document.querySelector(".hero-h1");
    if (!heroTitle) {
      return;
    }

    var hero = heroTitle.closest("section");
    var badge = hero.querySelector(".inline-flex span:last-child");
    var copy = heroTitle.nextElementSibling;
    var buttons = hero.querySelectorAll("a");
    var statCards = hero.querySelectorAll(".stat-card");

    setText(badge, "AI GTM, SDR & AI Employees");
    setHtml(
      heroTitle,
      'AI GTM Systems<br>for SMBs Selling<br><span style="color:#D4AF37">Globally.</span>'
    );
    setHtml(
      copy,
      'AI Ropeway builds and runs done-for-you AI GTM engines, AI SDRs and AI employees for SMB founders, SaaS teams, agencies and businesses expanding across India, the UK and international markets.'
    );

    if (buttons[0]) {
      setText(buttons[0], "Book a Free AI Audit →");
      buttons[0].setAttribute("href", BOOKING_URL);
      buttons[0].setAttribute("target", "_blank");
      buttons[0].setAttribute("rel", "noopener noreferrer");
    }

    if (buttons[1]) {
      setText(buttons[1], "Explore Services ↓");
      buttons[1].setAttribute("href", "#services");
      buttons[1].removeAttribute("target");
      buttons[1].removeAttribute("rel");
    }

    var stats = [
      ["3", "Flagship offers: GTM, SDR, AI Employees"],
      ["17+", "AI services across sales, marketing and ops"],
      ["4.8×", "Average ROI across measured deployments"],
      ["60", "Days to measurable business impact"]
    ];

    Array.prototype.slice.call(statCards).forEach(function (card, index) {
      if (!stats[index]) {
        return;
      }

      var value = card.querySelector(".number-display");
      var label = value ? value.nextElementSibling : null;
      setText(value, stats[index][0]);
      setText(label, stats[index][1]);
    });
  }

  function flagshipMarkup() {
    return (
      '<section id="flagship-offers" class="cro-flagship-section">' +
      '<div class="max-w-7xl mx-auto px-6">' +
      '<div class="cro-section-copy">' +
      '<div class="section-label mb-4">FLAGSHIP OFFERS</div>' +
      '<h2 class="serif" style="font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1;">Start with the AI systems<br><span style="color:#D4AF37">that create revenue first.</span></h2>' +
      '<p class="text-white/40 mt-4 text-base" style="font-weight:300;">Built for SMB founders, SaaS teams, agencies and international sellers who need pipeline, execution and leverage without adding headcount.</p>' +
      "</div>" +
      '<div class="cro-card-grid">' +
      offerCard("AI GTM Engine", "A done-for-you go-to-market engine built to launch outreach, validate markets and create pipeline fast.", ["ICP and market entry plan", "Outbound system live in days", "Weekly performance review"]) +
      offerCard("AI SDR-as-a-Service", "An always-on sales rep that handles prospecting, sequencing, reply handling and meeting-booked reporting.", ["Targeted list building", "Multi-channel follow-up", "Booked-meeting dashboard"]) +
      offerCard("AI Employees", "AI agents for sales, marketing and operations that take repetitive work off your team and report measurable output.", ["Lead follow-up agents", "Content and reporting agents", "Ops automation agents"]) +
      "</div>" +
      '<div class="cro-cta-row">' +
      '<a class="cta-btn px-8 py-4 rounded text-sm inline-flex items-center gap-2" href="' + BOOKING_URL + '" target="_blank" rel="noopener noreferrer">Book a Free AI Audit →</a>' +
      '<a class="outline-btn px-8 py-4 rounded text-sm inline-flex items-center gap-2" href="#services">See Services ↓</a>' +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function offerCard(title, body, points) {
    return (
      '<article class="cro-offer-card">' +
      "<h3>" + title + "</h3>" +
      "<p>" + body + "</p>" +
      "<ul>" +
      points
        .map(function (point) {
          return '<li><span class="cro-check">✓</span><span>' + point + "</span></li>";
        })
        .join("") +
      "</ul>" +
      "</article>"
    );
  }

  function insertFlagshipOffers() {
    if (document.getElementById("flagship-offers")) {
      return;
    }

    var heroTitle = document.querySelector(".hero-h1");
    var hero = heroTitle ? heroTitle.closest("section") : null;
    var marker = hero ? hero.nextElementSibling : null;

    if (!marker) {
      return;
    }

    marker.insertAdjacentHTML("afterend", flagshipMarkup());
  }

  function proofMarkup() {
    return (
      '<section id="proof-in-market" class="cro-proof-section">' +
      '<div class="max-w-7xl mx-auto px-6">' +
      '<div class="cro-section-copy">' +
      '<div class="section-label mb-4">PROOF IN MARKET</div>' +
      '<h2 class="serif" style="font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1;">Built with teams already<br><span style="color:#D4AF37">selling, scaling and expanding.</span></h2>' +
      '<p class="text-white/40 mt-4 text-base" style="font-weight:300;">These are not formal case studies yet, but they show the kind of businesses AI Ropeway supports: content-led brands, founder-led teams and companies selling across borders.</p>' +
      "</div>" +
      '<div class="cro-card-grid">' +
      '<article class="cro-proof-card">' +
      '<span class="cro-proof-label">AI Content Engine</span>' +
      '<h3>Black & Darker</h3>' +
      '<p>A multidisciplinary creative and events studio using AI-assisted content workflows to stay consistent across brand, portfolio and campaign output.</p>' +
      '<a href="https://blackndarker.com/" target="_blank" rel="noopener noreferrer">View website →</a>' +
      "</article>" +
      '<article class="cro-proof-card">' +
      '<span class="cro-proof-label">AI SDR + AI GTM Engine</span>' +
      '<h3>ExpanGlobal</h3>' +
      '<p>A market entry and expansion company supported with AI SDR and GTM systems for international pipeline and expansion conversations.</p>' +
      '<a href="https://expanglobal.com/" target="_blank" rel="noopener noreferrer">View website →</a>' +
      "</article>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function insertProof() {
    if (document.getElementById("proof-in-market")) {
      return;
    }

    var services = document.getElementById("services");
    if (services) {
      services.insertAdjacentHTML("afterend", proofMarkup());
    }
  }

  function updateContactCopy() {
    var contact = document.getElementById("contact");
    if (!contact) {
      return;
    }

    replaceTextNodes(contact, {
      "Free AI Audit": "Free AI Growth Audit",
      "Book Your Free AI Audit": "Send Audit Details",
      "Book My Free AI Audit →": "Send Audit Details →",
      "60-minute deep-dive into your operations": "45-minute review of your GTM, sales and operations",
      "Top 3–5 AI opportunities, ranked by ROI": "Top 3 AI revenue or automation opportunities",
      "Custom deployment roadmap, built for your stack": "Clear next-step plan for GTM, SDR or AI employees"
    });
  }

  function updateGeneralCopy() {
    replaceTextNodes(document.body, {
      "18 Systems": "Services",
      "See the 18 Systems ↓": "Explore Services ↓",
      "18 battle-tested AI systems": "AI GTM, AI SDR and AI employee systems",
      "The Deployment Stack": "Services",
      "18 proprietary AI systems ready to deploy": "AI GTM, SDR and AI employee systems ready to deploy",
      "Premier AI deployment partner for modern businesses": "Done-for-you AI GTM partner for global SMBs",
      "Operating across India, Australia, UK, and North America": "Focused on India and the UK, with global execution support"
    });
  }

  function enhance() {
    scheduled = false;
    updateNavigation();
    updateHero();
    updateGeneralCopy();
    updateContactCopy();
    insertFlagshipOffers();
    insertProof();
    updateCtas();
  }

  function scheduleEnhance() {
    if (scheduled) {
      return;
    }

    scheduled = true;
    window.requestAnimationFrame(enhance);
  }

  function boot() {
    enhance();

    var observer = new MutationObserver(scheduleEnhance);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
