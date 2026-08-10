/**
 * Beta Samos ATV & Hiking Tour - Main JavaScript Application
 * Handles i18n bilingual toggle, dynamic booking modal & WhatsApp dispatcher,
 * FAQ accordion, photo lightbox, and mobile navigation.
 */

// --- Bilingual Translation Dictionary (EN / EL) ---
const i18n = {
  en: {
    hero_badge: "⭐ Rated #1 Guided Outdoor Adventure in Samos",
    hero_title: "Explore Samos by <span>ATV & on Foot</span>",
    hero_desc: "Scenic off-road thrills, hidden mountain trails, Potami waterfalls, and breathtaking Aegean viewpoints with expert local guides.",
    hero_btn_book: "Book Guided Tour (€110)",
    hero_btn_wa: "WhatsApp Quick Chat",
    feat_helmets: "Helmets & Gear Included",
    feat_groups: "Small Groups & Private",
    feat_automatic: "Easy Automatic ATVs",
    feat_hq: "Karlovasi HQ Meeting Point",
    
    nav_tours: "Tours & Pricing",
    nav_itinerary: "Itinerary",
    nav_safety: "Safety & Rules",
    nav_reviews: "Reviews",
    nav_location: "Location",
    nav_book_btn: "Book Now",
    
    tag_why_us: "Why Choose Us",
    title_why_us: "Unforgettable Samos Island Adventures",
    sub_why_us: "Experience the perfect balance of exhilarating off-road driving and peaceful guided nature discovery.",
    
    hl_1_title: "Off-Road Quad Thrills",
    hl_1_desc: "Ride curated mountain and coastal tracks through pine forests and ridge paths with safe, automatic ATVs.",
    hl_2_title: "Guided Nature Hiking",
    hl_2_desc: "Discover hidden waterfalls, historic stone bridges, and panoramic viewpoints only accessible on foot.",
    hl_3_title: "Certified Local Guides",
    hl_3_desc: "Passionate local leaders ensuring full safety briefings, helmet fittings, and authentic island stories.",
    hl_4_title: "Local Treats Included",
    hl_4_desc: "Enjoy traditional Samian snacks, fresh seasonal fruits, and cool bottled water at scenic rest stops.",
    
    tag_packages: "Tour Packages",
    title_packages: "Choose Your Outdoor Adventure",
    sub_packages: "All tours include safety briefings, DOT/ECE approved helmets, fuel, guide, and local snacks.",
    
    tour1_badge: "Most Popular Signature Tour",
    tour1_title: "Beta Samos ATV & Hiking Guided Tour",
    tour1_desc: "Our complete 5-hour flagship experience. Off-road quad driving through lush mountain forests, guided trail walk to hidden viewpoints, and authentic local snacks.",
    tour1_inc1: "5-Hour guided ATV & hiking excursion",
    tour1_inc2: "High-performance automatic ATV & fuel",
    tour1_inc3: "DOT/ECE approved helmets & safety gear",
    tour1_inc4: "Guided nature walk with local guide",
    tour1_inc5: "Traditional Greek snacks & bottled water",
    
    tour2_title: "Sunset Mountain & Coastal Quad Tour",
    tour2_desc: "Catch the magical golden hour over the Aegean Sea from panoramic mountain heights. Smooth 3.5-hour evening ride.",
    
    tour3_title: "Custom & Private VIP Group Tour",
    tour3_desc: "Tailor-made itineraries for families, couples, or private groups. Flexible pacing, custom stops, and private guide.",
    
    btn_select_tour: "Book This Tour",
    
    tag_safety: "Safety & FAQ",
    title_safety: "Everything You Need to Know",
    safety_box_title: "Safety & Driver Regulations",
    safety_rule1_title: "Valid Driver's License Required",
    safety_rule1_desc: "Drivers must hold a valid physical car driver's license (EU Category B or International Driving Permit).",
    safety_rule2_title: "Mandatory Helmets",
    safety_rule2_desc: "Safety is our #1 priority. DOT/ECE helmets are provided and mandatory during all ATV riding segments.",
    safety_rule3_title: "Age Limits",
    safety_rule3_desc: "Drivers must be 18+ years old. Passengers must be at least 8 years old.",
    safety_rule4_title: "Weather & Cancellation Guarantee",
    safety_rule4_desc: "Free cancellation up to 24h before tour. 100% full refund or reschedule in case of severe weather.",
    
    faq1_q: "Do I need prior experience driving an ATV?",
    faq1_a: "No experience required! Our ATVs are modern, easy-to-drive automatic quad bikes. We conduct a full safety briefing and practice test ride before departure.",
    faq2_q: "Can two people share one ATV?",
    faq2_a: "Yes! All our ATVs are approved 2-seaters. You can choose a single rider or double rider setup when booking.",
    faq3_q: "What should I wear and bring?",
    faq3_a: "Wear comfortable outdoor clothing that can get dusty, mandatory closed-toe shoes (sneakers or hiking shoes), sunglasses, sunscreen, and bring a small backpack with water.",
    
    tag_reviews: "Guest Experiences",
    title_reviews: "What Travelers Say About Us",
    
    tag_location: "Find Us",
    title_location: "Visit Us in Karlovasi, Samos",
    address_label: "Headquarters & Meeting Point",
    hours_label: "Operating Hours",
    phone_label: "Direct Phone & WhatsApp",
    email_label: "Official Email",
    btn_directions: "Get Google Maps Directions",
    
    modal_title: "Reserve Your Tour",
    form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone / WhatsApp Number",
    form_tour: "Select Tour Package",
    form_date: "Preferred Date",
    form_time: "Departure Time",
    form_riders: "Number of Participants",
    form_license_agree: "I confirm the driver is 18+ and holds a valid physical Car Driving License (Category B).",
    btn_send_wa: "Confirm via WhatsApp",
    btn_send_email: "Submit Reservation"
  },
  el: {
    hero_badge: "⭐ Κορυφαία Οργανωμένη Υπαίθρια Εμπειρία στη Σάμο",
    hero_title: "Εξερευνήστε τη Σάμο με <span>ATV & Πεζοπορία</span>",
    hero_desc: "Μοναδικές off-road διαδρομές με γουρούνες, κρυφά ορεινά μονοπάτια, οι καταρράκτες στο Ποτάμι και πανοραμική θέα στο Αιγαίο με έμπειρους τοπικούς οδηγούς.",
    hero_btn_book: "Κράτηση Εκδρομής (110€)",
    hero_btn_wa: "Άμεση Συνομιλία WhatsApp",
    feat_helmets: "Περιλαμβάνονται Κράνη & Εξοπλισμός",
    feat_groups: "Ολιγομελή & Πριβέ Γκρουπ",
    feat_automatic: "Εύκολες Αυτόματες Γουρούνες (ATV)",
    feat_hq: "Σημείο Συνάντησης: Καρλόβασι",
    
    nav_tours: "Εκδρομές & Τιμές",
    nav_itinerary: "Πρόγραμμα",
    nav_safety: "Ασφάλεια & Κανόνες",
    nav_reviews: "Κριτικές",
    nav_location: "Τοποθεσία",
    nav_book_btn: "Κάντε Κράτηση",
    
    tag_why_us: "Γιατί Εμάς",
    title_why_us: "Αξέχαστες Περιπέτειες στη Σάμο",
    sub_why_us: "Ζήστε τον τέλειο συνδυασμό οδήγησης ATV και χαλαρωτικής πεζοπορίας στη φύση.",
    
    hl_1_title: "Off-Road Περιπέτεια με ATV",
    hl_1_desc: "Οδηγήστε σε επιλεγμένες ορεινές και παραθαλάσσιες διαδρομές μέσα από πευκοδάση με ασφαλή αυτόματα ATV.",
    hl_2_title: "Οργανωμένη Πεζοπορία",
    hl_2_desc: "Ανακαλύψτε κρυφούς καταρράκτες, παραδοσιακά γεφύρια και πανοραμικά σημεία προσβάσιμα μόνο με τα πόδια.",
    hl_3_title: "Έμπειροι Τοπικοί Συνοδοί",
    hl_3_desc: "Παθιασμένοι ντόπιοι οδηγοί που εγγυώνται πλήρη ενημέρωση ασφαλείας, σωστό εξοπλισμό και τοπικές ιστορίες.",
    hl_4_title: "Τοπικά Κεράσματα",
    hl_4_desc: "Απολαύστε παραδοσιακά σαμιώτικα σνακ, φρέσκα φρούτα εποχής και δροσερό νερό σε γραφικές στάσεις.",
    
    tag_packages: "Πακέτα Εκδρομών",
    title_packages: "Επιλέξτε την Εμπειρία σας",
    sub_packages: "Όλες οι εκδρομές περιλαμβάνουν ενημέρωση ασφαλείας, κράνη, καύσιμα, συνοδό και σνακ.",
    
    tour1_badge: "Το Δημοφιλέστερο Πακέτο",
    tour1_title: "Beta Samos ATV & Hiking Guided Tour",
    tour1_desc: "Η πλήρης 5ωρη εμπειρία μας. Οδήγηση ATV στα βουνά, πεζοπορία σε μυστικά μονοπάτια και παραδοσιακά τοπικά σνακ.",
    tour1_inc1: "5ωρη οργανωμένη εκδρομή ATV & πεζοπορίας",
    tour1_inc2: "Σύγχρονο αυτόματο ATV & καύσιμα",
    tour1_inc3: "Εγκεκριμένα κράνη DOT/ECE & εξοπλισμός",
    tour1_inc4: "Πεζοπορία με έμπειρο τοπικό συνοδό",
    tour1_inc5: "Παραδοσιακά σνακ Σάμου & εμφιαλωμένο νερό",
    
    tour2_title: "Sunset ATV Tour στο Ηλιοβασίλεμα",
    tour2_desc: "Απολαύστε τη χρυσή ώρα του ηλιοβασιλέματος πάνω από το Αιγαίο Πέλαγος από ψηλά. 3.5 ώρες μαγευτικής διαδρομής.",
    
    tour3_title: "Πριβέ & Εξατομικευμένη Εκδρομή VIP",
    tour3_desc: "Προσαρμοσμένο πρόγραμμα για οικογένειες ή παρέες. Ευέλικτος ρυθμός, ιδιωτικός συνοδός και επιλεγμένες στάσεις.",
    
    btn_select_tour: "Κράτηση Εκδρομής",
    
    tag_safety: "Ασφάλεια & Συχνές Ερωτήσεις",
    title_safety: "Όλα όσα πρέπει να γνωρίζετε",
    safety_box_title: "Κανονισμοί Ασφαλείας & Οδηγών",
    safety_rule1_title: "Απαραίτητο Δίπλωμα Αυτοκινήτου",
    safety_rule1_desc: "Οι οδηγοί πρέπει να κατέχουν γνήσιο φυσικό δίπλωμα αυτοκινήτου (Κατηγορία Β).",
    safety_rule2_title: "Υποχρεωτική Χρήση Κράνους",
    safety_rule2_desc: "Η ασφάλεια είναι η προτεραιότητά μας. Παρέχουμε πιστοποιημένα κράνη που φοριούνται υποχρεωτικά.",
    safety_rule3_title: "Όρια Ηλικίας",
    safety_rule3_desc: "Ελάχιστη ηλικία οδηγού: 18 ετών. Ελάχιστη ηλικία συνεπιβάτη: 8 ετών.",
    safety_rule4_title: "Εγγύηση Καιρού & Ακύρωση",
    safety_rule4_desc: "Δωρεάν ακύρωση έως 24 ώρες πριν. 100% πλήρης επιστροφή χρημάτων ή αλλαγή ημερομηνίας λόγω καιρού.",
    
    faq1_q: "Χρειάζεται προηγούμενη εμπειρία σε ATV;",
    faq1_a: "Καθόλου! Οι γουρούνες μας είναι σύγχρονες, αυτόματες και πολύ εύκολες στην οδήγηση. Κάνουμε πλήρη εκπαίδευση και δοκιμαστική οδήγηση πριν ξεκινήσουμε.",
    faq2_q: "Μπορούν δύο άτομα να ανέβουν σε ένα ATV;",
    faq2_a: "Ναι! Όλα τα ATV μας είναι διθέσια. Μπορείτε να επιλέξετε 1 ή 2 άτομα ανά όχημα κατά την κράτηση.",
    faq3_q: "Τι πρέπει να φοράω και να έχω μαζί μου;",
    faq3_a: "Φορέστε άνετα ρούχα, υποχρεωτικά κλειστά παπούτσια (αθλητικά), γυαλιά ηλίου, αντηλιακό και πάρτε μαζί ένα μικρό σακίδιο με νερό.",
    
    tag_reviews: "Κριτικές Επισκεπτών",
    title_reviews: "Τι λένε οι ταξιδιώτες για εμάς",
    
    tag_location: "Τοποθεσία",
    title_location: "Επισκεφθείτε μας στο Καρλόβασι Σάμου",
    address_label: "Έδρα & Σημείο Συνάντησης",
    hours_label: "Ώρες Λειτουργίας",
    phone_label: "Τηλέφωνο & WhatsApp",
    email_label: "Επίσημο Email",
    btn_directions: "Οδηγίες στο Google Maps",
    
    modal_title: "Κράτηση Εκδρομής",
    form_name: "Ονοματεπώνυμο",
    form_email: "Email",
    form_phone: "Τηλέφωνο / WhatsApp",
    form_tour: "Επιλέξτε Εκδρομή",
    form_date: "Επιθυμητή Ημερομηνία",
    form_time: "Ώρα Αναχώρησης",
    form_riders: "Αριθμός Ατόμων",
    form_license_agree: "Επιβεβαιώνω ότι ο οδηγός είναι 18+ και κατέχει έγκυρο δίπλωμα αυτοκινήτου (Κατηγορία Β).",
    btn_send_wa: "Επιβεβαίωση μέσω WhatsApp",
    btn_send_email: "Υποβολή Κράτησης"
  }
};

let currentLang = 'en';

// --- Price Configuration ---
const tourPrices = {
  flagship: 110,
  sunset: 95,
  private: 150
};

// --- Language Switcher Handler ---
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = i18n[lang][key];
      } else {
        el.innerHTML = i18n[lang][key];
      }
    }
  });

  // Update active toggle button style
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('beta_samos_lang', lang);
}

// --- Dynamic Price Calculator for Modal ---
function updateModalPrice() {
  const tourSelect = document.getElementById('modalTourSelect');
  const ridersInput = document.getElementById('modalRiders');
  const priceDisplay = document.getElementById('modalPriceDisplay');
  
  if (!tourSelect || !ridersInput || !priceDisplay) return;
  
  const tourKey = tourSelect.value || 'flagship';
  const riders = parseInt(ridersInput.value, 10) || 1;
  const unitPrice = tourPrices[tourKey] || 110;
  const totalPrice = unitPrice * riders;
  
  priceDisplay.textContent = `€${totalPrice}`;
}

// --- WhatsApp & Reservation Dispatcher ---
function handleWhatsAppBooking(e) {
  if (e) e.preventDefault();
  
  const name = document.getElementById('modalName').value.trim();
  const phone = document.getElementById('modalPhone').value.trim();
  const email = document.getElementById('modalEmail').value.trim();
  const tourSelect = document.getElementById('modalTourSelect');
  const tourName = tourSelect.options[tourSelect.selectedIndex].text;
  const date = document.getElementById('modalDate').value;
  const time = document.getElementById('modalTime').value;
  const riders = document.getElementById('modalRiders').value;
  const licenseAgree = document.getElementById('modalLicenseCheck').checked;
  const price = document.getElementById('modalPriceDisplay').textContent;

  if (!name || !phone || !date) {
    alert(currentLang === 'el' ? 'Παρακαλούμε συμπληρώστε τα υποχρεωτικά πεδία (Όνομα, Τηλέφωνο, Ημερομηνία).' : 'Please fill in the required fields (Name, Phone, Date).');
    return;
  }

  if (!licenseAgree) {
    alert(currentLang === 'el' ? 'Παρακαλούμε επιβεβαιώστε ότι ο οδηγός κατέχει έγκυρο δίπλωμα αυτοκινήτου (Κατηγορία Β).' : 'Please confirm that the driver holds a valid Category B driver license.');
    return;
  }

  const message = `👋 Hello Beta Samos Tours! I would like to reserve a tour:
━━━━━━━━━━━━━━━━━
📍 Tour: ${tourName}
📅 Date: ${date} (${time})
👥 Participants: ${riders}
💰 Total: ${price}
👤 Name: ${name}
📞 Contact: ${phone}
✉️ Email: ${email || 'N/A'}
🪪 Driver License Confirmed: Yes (Category B)
━━━━━━━━━━━━━━━━━
Please confirm availability!`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/306942430930?text=${encoded}`;
  window.open(waUrl, '_blank');
}

// --- DOM Initializations ---
document.addEventListener('DOMContentLoaded', () => {
  // Load stored language or default to en
  const savedLang = localStorage.getItem('beta_samos_lang') || 'en';
  setLanguage(savedLang);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    // Close on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.faq-body');
      const isActive = item.classList.contains('active');

      // Close all items
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        const b = i.querySelector('.faq-body');
        if (b) b.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Open First FAQ by default
  const firstFaq = document.querySelector('.faq-item');
  if (firstFaq) {
    firstFaq.classList.add('active');
    const firstBody = firstFaq.querySelector('.faq-body');
    if (firstBody) firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
  }

  // Booking Modal Logic
  const modal = document.getElementById('bookingModal');
  const openButtons = document.querySelectorAll('.open-booking-modal');
  const closeBtn = document.querySelector('.modal-close-btn');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tourType = btn.dataset.tour;
      if (tourType && document.getElementById('modalTourSelect')) {
        document.getElementById('modalTourSelect').value = tourType;
      }
      updateModalPrice();
      if (modal) modal.classList.add('active');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // Modal Inputs Price Change
  const tourSelect = document.getElementById('modalTourSelect');
  const ridersInput = document.getElementById('modalRiders');
  if (tourSelect) tourSelect.addEventListener('change', updateModalPrice);
  if (ridersInput) ridersInput.addEventListener('input', updateModalPrice);

  // WhatsApp Submit in Modal
  const waSubmitBtn = document.getElementById('btnSubmitWhatsApp');
  if (waSubmitBtn) {
    waSubmitBtn.addEventListener('click', handleWhatsAppBooking);
  }

  // Gallery Filter Logic
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.filter;

      galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Modal
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.querySelector('.lightbox-close');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }

  // Set default reservation date to tomorrow
  const dateInput = document.getElementById('modalDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
  }
});
