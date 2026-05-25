(function () {
  var SERVICES = Array.isArray(window.__AIROPEWAY_SERVICES__) ? window.__AIROPEWAY_SERVICES__ : [];
  var CATEGORIES = Array.isArray(window.__AIROPEWAY_SERVICE_CATEGORIES__)
    ? window.__AIROPEWAY_SERVICE_CATEGORIES__
    : [];

  if (!SERVICES.length || !CATEGORIES.length) {
    return;
  }

  var ACTIVE_CATEGORY = "sales";
  var DISPLAY_CATEGORY = ACTIVE_CATEGORY;
  var GRID_HIDDEN = false;
  var SWITCH_TIMER = null;
  var BOOKING_URL = "https://calendly.com/bg-aiplacers/new-meeting";
  var BEST_FOR = {
    S1: "B2B founders who need qualified meetings without hiring and managing an SDR team.",
    S2: "SaaS teams, agencies and exporters entering India, the UK or international markets.",
    S3: "Teams that need clean buyer lists, enriched contacts and fresh pipeline every week.",
    S4: "Indian SMBs and founder-led teams selling through WhatsApp follow-ups.",
    S5: "Businesses that need sales leadership, pipeline discipline and AI execution together.",
    S6: "Indian FMCG, textile and pharma businesses selling to international buyers.",
    M1: "Founder-led brands that need consistent content without slowing down the team.",
    M2: "SMBs that need senior marketing direction plus execution without a full CMO hire.",
    M3: "Teams preparing to run campaigns but still unclear on positioning and voice.",
    M4: "Brands that need measurable social output across LinkedIn, Instagram and WhatsApp.",
    M5: "Businesses that want visibility across Google, AI Overviews and answer engines.",
    O1: "Teams losing hours every week to manual workflows, handoffs and reporting.",
    O2: "Businesses with a CRM that exists but does not drive daily sales behavior.",
    O3: "Founders who want weekly competitor signals without manually tracking the market.",
    O4: "Teams that need plain-language dashboards instead of scattered spreadsheets.",
    T1: "Leadership teams ready to adopt AI across sales, marketing and operations.",
    T2: "SMBs that want board-ready visibility across revenue, operations and finance."
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function sanitizeDescription(text) {
    return String(text).replace("₹15–50K/month agency spend", "typical agency spend");
  }

  function serviceTabId(categoryId) {
    return "services-tab-" + categoryId;
  }

  function servicePanelId(categoryId) {
    return "services-panel-" + categoryId;
  }

  function badgeClass(tier) {
    if (tier === "highest") {
      return "services-badge services-badge-highest";
    }
    if (tier === "growing") {
      return "services-badge services-badge-growing";
    }
    return "services-badge services-badge-premium";
  }

  function detectCtaHref() {
    return BOOKING_URL;
  }

  function renderTabBar() {
    return (
      '<div class="services-tabbar-scroll">' +
      '<div class="services-tabbar" role="tablist" aria-label="Service categories">' +
      CATEGORIES.map(function (category) {
        var isActive = category.id === ACTIVE_CATEGORY;
        return (
          '<button' +
          ' id="' + serviceTabId(category.id) + '"' +
          ' class="services-tab' + (isActive ? " is-active" : "") + '"' +
          ' type="button"' +
          ' role="tab"' +
          ' aria-selected="' + String(isActive) + '"' +
          ' aria-controls="' + servicePanelId(category.id) + '"' +
          ' tabindex="' + (isActive ? "0" : "-1") + '"' +
          ' data-services-category="' + escapeHtml(category.id) + '"' +
          ">" +
          '<span class="text-lg" aria-hidden="true">' + escapeHtml(category.icon) + "</span>" +
          "<span>" + escapeHtml(category.label) + "</span>" +
          "</button>"
        );
      }).join("") +
      "</div>" +
      "</div>"
    );
  }

  function renderCards() {
    var ctaHref = detectCtaHref();
    var filtered = SERVICES.filter(function (service) {
      return service.category === DISPLAY_CATEGORY;
    });

    return (
      '<div class="services-grid-shell' + (GRID_HIDDEN ? " is-hidden" : "") + '"' +
      ' role="tabpanel"' +
      ' id="' + servicePanelId(DISPLAY_CATEGORY) + '"' +
      ' aria-labelledby="' + serviceTabId(ACTIVE_CATEGORY) + '"' +
      ">" +
      '<div class="services-grid">' +
      filtered
        .map(function (service, index) {
          return (
            '<article class="services-card services-card-enter">' +
            '<div class="services-card-top">' +
            '<span class="services-card-emoji" aria-hidden="true">' + escapeHtml(service.emoji) + "</span>" +
            '<span class="' + badgeClass(service.demandTier) + '">' + escapeHtml(service.demandLabel) + "</span>" +
            "</div>" +
            '<h3 class="services-card-title">' + escapeHtml(service.name) + "</h3>" +
            '<p class="services-card-tagline">' + escapeHtml(service.tagline) + "</p>" +
            '<p class="services-card-bestfor"><span>Best for:</span> ' + escapeHtml(BEST_FOR[service.id] || "SMB founders who want AI systems implemented, not just planned.") + "</p>" +
            '<p class="services-card-description">' + escapeHtml(sanitizeDescription(service.description)) + "</p>" +
            '<ul class="services-outcomes">' +
            service.outcomes
              .slice(0, 4)
              .map(function (outcome) {
                return (
                  '<li class="services-outcome">' +
                  '<span class="services-outcome-icon" aria-hidden="true">✓</span>' +
                  "<span>" + escapeHtml(outcome) + "</span>" +
                  "</li>"
                );
              })
              .join("") +
            "</ul>" +
            '<div class="services-card-actions">' +
            '<a class="cta-btn services-card-cta px-6 py-3 rounded text-sm inline-flex items-center gap-2" href="' +
            escapeHtml(ctaHref) +
            '">Get Started →</a>' +
            "</div>" +
            "</article>"
          );
        })
        .join("") +
      "</div>" +
      "</div>"
    );
  }

  function sectionMarkup() {
    return (
      '<section id="services" class="services-section">' +
      '<div id="systems" class="services-anchor" aria-hidden="true"></div>' +
      '<div class="max-w-7xl mx-auto px-6">' +
      '<div class="services-section-copy">' +
      '<div class="section-label mb-4">WHAT WE DO</div>' +
      '<h2 class="serif" style="font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1;">AI Services for SMBs Selling<br><span style="color: #D4AF37;">Across India, the UK & Beyond</span></h2>' +
      '<p class="text-white/40 mt-4 max-w-2xl text-base" style="font-weight: 300;">Pick your growth priority. Every service is done-for-you, with AI GTM, AI SDR and AI employee systems leading the stack.</p>' +
      "</div>" +
      renderTabBar() +
      '<div class="services-divider"></div>' +
      renderCards() +
      "</div>" +
      "</section>"
    );
  }

  function mountSection() {
    var existingSection = document.querySelector("section#systems");
    if (!existingSection || existingSection.dataset.servicesEnhanced === "true") {
      return false;
    }

    var replacement = document.createElement("div");
    replacement.innerHTML = sectionMarkup();
    var nextSection = replacement.firstElementChild;

    if (!nextSection) {
      return false;
    }

    nextSection.dataset.servicesEnhanced = "true";
    existingSection.replaceWith(nextSection);
    bindSection(nextSection);
    return true;
  }

  function updateTabs(section) {
    var tabs = Array.prototype.slice.call(section.querySelectorAll("[data-services-category]"));
    tabs.forEach(function (tab) {
      var isActive = tab.getAttribute("data-services-category") === ACTIVE_CATEGORY;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.setAttribute("tabindex", isActive ? "0" : "-1");
    });
  }

  function updateGrid(section) {
    var existingPanel = section.querySelector(".services-grid-shell");
    if (!existingPanel) {
      return;
    }

    existingPanel.outerHTML = renderCards();

    var cards = section.querySelectorAll(".services-card-enter");
    cards.forEach(function (card, index) {
      card.style.animationDelay = String(index * 50) + "ms";
    });
  }

  function activateCategory(section, categoryId) {
    if (categoryId === ACTIVE_CATEGORY || !CATEGORIES.some(function (category) { return category.id === categoryId; })) {
      return;
    }

    ACTIVE_CATEGORY = categoryId;
    updateTabs(section);

    var panel = section.querySelector(".services-grid-shell");
    if (!panel) {
      DISPLAY_CATEGORY = categoryId;
      updateGrid(section);
      return;
    }

    GRID_HIDDEN = true;
    panel.classList.add("is-hidden");

    if (SWITCH_TIMER) {
      window.clearTimeout(SWITCH_TIMER);
    }

    SWITCH_TIMER = window.setTimeout(function () {
      DISPLAY_CATEGORY = categoryId;
      GRID_HIDDEN = false;
      updateGrid(section);
    }, 150);
  }

  function bindSection(section) {
    updateTabs(section);
    updateGrid(section);

    section.addEventListener("click", function (event) {
      var tab = event.target.closest("[data-services-category]");
      if (!tab) {
        return;
      }

      activateCategory(section, tab.getAttribute("data-services-category"));
    });

    section.addEventListener("keydown", function (event) {
      var currentTab = event.target.closest("[data-services-category]");
      if (!currentTab) {
        return;
      }

      var index = CATEGORIES.findIndex(function (category) {
        return category.id === currentTab.getAttribute("data-services-category");
      });

      if (index === -1) {
        return;
      }

      var nextIndex = index;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = index === CATEGORIES.length - 1 ? 0 : index + 1;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = index === 0 ? CATEGORIES.length - 1 : index - 1;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = CATEGORIES.length - 1;
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateCategory(section, currentTab.getAttribute("data-services-category"));
        return;
      } else {
        return;
      }

      event.preventDefault();
      var nextCategory = CATEGORIES[nextIndex];
      var nextTab = section.querySelector('[data-services-category="' + nextCategory.id + '"]');
      if (nextTab) {
        nextTab.focus();
        activateCategory(section, nextCategory.id);
      }
    });
  }

  function boot() {
    var remountQueued = false;

    function ensureMounted() {
      remountQueued = false;
      mountSection();
    }

    ensureMounted();

    var observer = new MutationObserver(function () {
      if (remountQueued) {
        return;
      }

      var enhanced = document.querySelector("#services .services-tabbar");
      var legacy = document.querySelector("section#systems");

      if (legacy || !enhanced) {
        remountQueued = true;
        window.requestAnimationFrame(ensureMounted);
      }
    });

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
