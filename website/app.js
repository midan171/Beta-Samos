/**
 * Beta Samos ATV & Hiking Tour - Application Logic & Bilingual Engine
 * Madeira Adventure Kingdom Design System Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Translation Dictionary (English / Greek) ---
  const translations = {
    en: {
      topbar_whatsapp: "WhatsApp Booking",
      nav_tag: "ATV & Hiking Tour",
      nav_tours: "Tours & Pricing",
      nav_whyus: "Why Beta Samos",
      nav_guide: "Before You Ride",
      nav_gallery: "Gallery",
      nav_reviews: "Reviews",
      nav_location: "Location",
      nav_book: "Book Now",

      hero_badge: "Rated as Excellent by International Travelers | Samos, Greece",
      hero_title: "Explore Samos by <span>ATV & on Foot</span>",
      hero_subtitle: "Scenic off-road thrills, hidden mountain trails, Potami waterfalls, and breathtaking Aegean viewpoints with passionate local guides.",

      qb_tour_label: "Select Adventure",
      qb_date_label: "Tour Date",
      qb_riders_label: "Quads & Riders",
      qb_btn: "Check & Book",

      trust_1_title: "100% Safety Certified",
      trust_1_desc: "DOT/ECE helmets, safety briefing & automatic ATVs",
      trust_2_title: "Free 24h Cancellation",
      trust_2_desc: "Full refund if plans change or bad weather occurs",
      trust_3_title: "Instant WhatsApp Booking",
      trust_3_desc: "Direct contact with local guides for fast confirmation",
      trust_4_title: "Authentic Island Guides",
      trust_4_desc: "Passionate local knowledge & hidden viewpoint trails",

      tours_tag: "Guided Expeditions",
      tours_title: "Choose Your Samos Adventure",
      tours_subtitle: "Small-group off-road quad safaris combining rugged mountain trails, waterfall hikes, and panoramic sea vistas.",

      badge_bestseller: "🔥 Most Popular",
      badge_sunset: "🌅 Golden Hour",
      price_from: "From",
      price_per_driver: "/ driver",

      spec_dur: "Duration",
      spec_terrain: "Terrain",
      spec_terrain_val: "Off-Road • Mountain • Seaside",
      spec_t2_terrain: "60% Dirt / 40% Scenic",
      spec_lic: "Driver Lic.",
      spec_grp: "Group Size",
      spec_grp_val: "Max 8 Guests",

      tab_overview: "Overview",
      tab_itinerary: "Itinerary",
      tab_inclusions: "Inclusions",
      tab_bring: "What to Bring",

      t1_title: "ATV ADVENTURE – PYTHAGORAS CAVE TOUR",
      t1_dep: "Departures: 09:00 AM & 13:00 PM Daily",
      t1_desc: "Experience a unique ATV exploration tour on a route that combines off-road adventure, mountain trails, seaside views, and traditional villages. The route passes through 3 villages and continues through mountain and dirt tracks, with a guided stop at the historic Pythagoras Cave. A unique ATV adventure combining nature, mountain, sea, and exploration!",

      itin_1_title: "Safety Briefing & Practice Lap",
      itin_1_desc: "Helmet fitting, vehicle controls briefing, and a practice run at Karlovasi HQ.",
      itin_2_title: "3 Traditional Villages",
      itin_2_desc: "Drive through 3 authentic Samian villages and experience local culture and charm.",
      itin_3_title: "Off-Road Mountain & Seaside Trails",
      itin_3_desc: "Ride thrilling dirt paths, mountain tracks, and scenic coastal seaside routes overlooking the Aegean Sea.",
      itin_4_title: "Pythagoras Cave & Cold Drink Stop",
      itin_4_desc: "Stop at the historic Cave of Pythagoras, capture panoramic photos, and enjoy a cool refreshing drink.",

      inc_atv: "Premium Automatic ATV & Fuel",
      inc_helmet: "DOT/ECE Safety Helmet",
      inc_offroad: "Off-Road & Mountain Routes",
      inc_seaside: "Seaside Coastal Route",
      inc_villages: "Route Through 3 Traditional Villages",
      inc_cave: "Stop at Pythagoras Cave",
      inc_photos: "Photo & Viewpoint Stops",
      inc_drink: "Refreshing Cold Beverage",
      inc_guide: "Certified Local Island Guide",
      inc_t2_mountain: "Off-Road & Mountain Trails",
      inc_t2_rivers: "Scenic River & Water Crossings",
      inc_t2_sunshine: "Panoramic Sunset & Sunshine Views",
      inc_t2_photos: "Golden Hour & Sunset Photo Stops",
      inc_1: "Premium Automatic ATV & Fuel",
      inc_2: "DOT/ECE Approved Helmets",
      inc_3: "Certified Local Island Guide",
      inc_4: "Off-Road & Mountain Trails",
      inc_5: "Free Action Photos Shared",
      inc_6: "Hotel Transfer (Available on Request)",
      inc_max8: "Small Group (Max 8 Guests)",
      inc_sunset_drink: "Sunset Refreshments & Cold Drinks",

      bring_shoes: "Closed Shoes",
      bring_license: "Physical Driver Lic.",
      bring_glasses: "Sunglasses",
      bring_sunscreen: "Sunscreen & Hat",
      bring_jacket: "Light Evening Jacket",

      btn_book_t1: "Book This Tour (€95)",
      btn_book_t2: "Book Sunset Tour (€95)",
      btn_whatsapp_inquire: "💬 WhatsApp Chat",

      t2_title: "Sunset Mountain & Coastal Quad Tour",
      t2_dep: "Departure: 17:30 PM (Seasonal)",
      t2_desc: "Ride during the cooler evening hours as the golden sun dips over the Aegean sea. Experience high mountain ridge paths, panoramic sunset viewpoints, and twilight coastal trails.",

      why_tag: "The Beta Samos Difference",
      why_title: "Why Explore Samos With Us?",
      why_subtitle: "We combine the adrenaline of off-road driving with deep local roots and unforgettable island hospitality.",
      feat_1_title: "Top Modern ATVs",
      feat_1_desc: "Fully automatic, easy-to-drive, rigorously inspected quads built for comfort, safety, and stability.",
      feat_2_title: "Secret Island Trails",
      feat_2_desc: "Reach secluded mountain lookouts, hidden chapels, and waterfalls inaccessible by standard rental cars.",
      feat_3_title: "Delicious Snacks for Regaining Energy",
      feat_3_desc: "Recharge with nutritious energy snacks, fresh seasonal fruit, and cool bottled water at scenic rest stops along the way.",
      feat_4_title: "Free Action Photos",
      feat_4_desc: "Our guides capture your best driving moments, ridge crossings, and waterfall walks — shared with you for free!",

      guide_tag: "Traveler Preparation",
      guide_title: "Before You Ride: Important Info",
      guide_subtitle: "Everything you need to know for a smooth, safe, and exciting excursion on Samos.",
      g1_title: "Driver's License & Age",
      g1_desc: "All participants must be between 21 and 74 years old. Drivers must hold a valid physical Category B (car) driver's license.",
      g2_title: "Proper Footwear",
      g2_desc: "Closed-toe sneakers or hiking shoes are mandatory for driving and hiking. No flip-flops or open sandals allowed.",
      g3_title: "Small Group Excursions",
      g3_desc: "Tours are strictly limited to a maximum of 8 participants for safety and personalized guidance.",
      g4_title: "Weather Guarantee",
      g4_desc: "In case of extreme weather, reschedule for free or receive a 100% full refund.",

      gal_tag: "Sights & Trails",
      gal_title: "Real Moments on the Trails",
      gal_subtitle: "A glimpse of the terrain, pine forests, and vistas waiting for you.",
      g_cap_1: "Forest & Water Crossing",
      g_cap_2: "Mountain Ridge Convoy",
      g_cap_3: "Golden Hour Over Karlovasi",

      rev_tag: "Guest Experiences",
      rev_title: "Loved by Travelers Worldwide",
      rev_subtitle: "Here is what our guests have to say about riding with Beta Samos.",
      r1_text: "\"The highlight of our 2 weeks in Samos! Oltion was an incredible guide who showed us mountain viewpoints we would never have found on our own. The quads are brand new and the hike was refreshing!\"",
      r2_text: "\"Fantastic 5-hour tour! The mix of off-road quad riding and the walk through Potami waterfalls was perfect. Great safety briefing and the local Greek snacks at the viewpoint were delicious.\"",
      r3_text: "\"Η καλύτερη εμπειρία στη Σάμο! Φοβερή διαδρομή στο βουνό, απόλυτη ασφάλεια και απίστευτη θέα. Το συστήνουμε ανεπιφύλακτα σε όποιον θέλει πραγματική περιπέτεια στο νησί!\"",

      loc_tag: "Meeting Point",
      loc_title: "Find Us in Karlovasi",
      loc_desc: "Conveniently located in Karlovasi with easy parking and direct access to mountain and coastal tracks.",
      loc_addr_label: "Address:",
      loc_phone_label: "Phone & WhatsApp:",
      loc_hours_label: "Opening Hours:",
      loc_hours_val: "09:00 - 20:00 Daily (Summer Season)",
      btn_directions: "Get Directions on Google Maps",

      footer_about: "Premier outdoor tour operator on Samos Island, Greece. Guided off-road quad excursions combined with scenic nature hikes.",
      foot_exp: "Adventures",
      foot_info: "Information",
      foot_contact: "Contact Us",

      mob_call: "📞 Call",
      mob_wa: "💬 WhatsApp",
      mob_book: "⚡ Book Tour",

      modal_title: "Reserve Your Samos Adventure",
      modal_sub: "Instant reservation request via WhatsApp or Email",
      m_tour_label: "Selected Tour",
      m_date_label: "Preferred Date",
      m_time_label: "Time Slot",
      opt_time_morning: "Morning (09:00 AM)",
      opt_time_afternoon: "Afternoon (13:00 PM)",
      m_quads_label: "Number of Quads",
      m_rider_type_label: "Rider Arrangement",
      m_name_label: "Lead Guest Full Name",
      m_phone_label: "Phone / WhatsApp Number",
      m_email_label: "Email Address",
      m_est_price: "Estimated Total:",
      btn_send_wa: "Send Reservation Request via WhatsApp",
      btn_send_email: "Send Reservation Request via Email"
    },

    el: {
      topbar_whatsapp: "Κράτηση μέσω WhatsApp",
      nav_tag: "Περιηγήσεις ATV & Πεζοπορία",
      nav_tours: "Εκδρομές & Τιμές",
      nav_whyus: "Γιατί Beta Samos",
      nav_guide: "Οδηγίες & Ασφάλεια",
      nav_gallery: "Φωτογραφίες",
      nav_reviews: "Κριτικές",
      nav_location: "Τοποθεσία",
      nav_book: "Κράτηση",

      hero_badge: "Αξιολογήθηκε ως Εξαιρετικό από Ταξιδιώτες Διεθνώς | Σάμος, Ελλάδα",
      hero_title: "Ανακαλύψτε τη Σάμο με <span>ATV & Πεζοπορία</span>",
      hero_subtitle: "Συναρπαστικές off-road διαδρομές, ορεινά μονοπάτια, καταρράκτες Ποτάμι και μαγευτική θέα στο Αιγαίο με έμπειρους τοπικούς οδηγούς.",

      qb_tour_label: "Επιλέξτε Εκδρομή",
      qb_date_label: "Ημερομηνία",
      qb_riders_label: "Γουρούνες & Αναβάτες",
      qb_btn: "Έλεγχος & Κράτηση",

      trust_1_title: "100% Πιστοποιημένη Ασφάλεια",
      trust_1_desc: "Εγκεκριμένα κράνη DOT/ECE, οδηγίες ασφαλείας & αυτόματα ATV",
      trust_2_title: "Δωρεάν Ακύρωση 24ωρο Πριν",
      trust_2_desc: "Πλήρης επιστροφή χρημάτων σε αλλαγή σχεδίων ή κακοκαιρία",
      trust_3_title: "Άμεση Κράτηση WhatsApp",
      trust_3_desc: "Απευθείας επικοινωνία με τους τοπικούς οδηγούς",
      trust_4_title: "Αυθεντικοί Τοπικοί Οδηγοί",
      trust_4_desc: "Βαθιά γνώση του νησιού και μυστικά ορεινά μονοπάτια",

      tours_tag: "Οργανωμένες Περιηγήσεις",
      tours_title: "Επιλέξτε την Περιπέτειά σας",
      tours_subtitle: "Ολιγομελή quad safaris που συνδυάζουν χωμάτινες ορεινές διαδρομές, πεζοπορία σε καταρράκτες και πανοραμική θέα στη θάλασσα.",

      badge_bestseller: "🔥 Δημοφιλέστερη",
      badge_sunset: "🌅 Ηλιοβασίλεμα",
      price_from: "Από",
      price_per_driver: "/ οδηγό",

      spec_dur: "Διάρκεια",
      spec_terrain: "Έδαφος",
      spec_terrain_val: "Off-Road • Βουνό • Θάλασσα",
      spec_t2_terrain: "60% Χώμα / 40% Θέα",
      spec_lic: "Δίπλωμα & Ηλικία",
      spec_grp: "Μέγεθος Group",
      spec_grp_val: "Έως 8 Άτομα",

      tab_overview: "Επισκόπηση",
      tab_itinerary: "Πρόγραμμα",
      tab_inclusions: "Παροχές",
      tab_bring: "Τι να Φέρετε",

      t1_title: "ATV ADVENTURE – PYTHAGORAS CAVE TOUR",
      t1_dep: "Αναχωρήσεις: 09:00 & 13:00 Καθημερινά",
      t1_desc: "Ζήστε μια μοναδική εμπειρία εξερεύνησης με ATV, σε μια διαδρομή που συνδυάζει off-road περιπέτεια, βουνό, θάλασσα και παραδοσιακά χωριά. Η διαδρομή περνά από 3 χωριά και συνεχίζει μέσα από ορεινές και χωμάτινες διαδρομές, με στάση στη Σπηλιά του Πυθαγόρα. Μια μοναδική ATV περιπέτεια που συνδυάζει φύση, βουνό, θάλασσα και εξερεύνηση!",

      itin_1_title: "Ενημέρωση Ασφαλείας & Δοκιμαστικός Γύρος",
      itin_1_desc: "Ρύθμιση κράνους, εξοικείωση με τα χειριστήρια και δοκιμαστικός γύρος στην έδρα μας στο Καρλόβασι.",
      itin_2_title: "Διαδρομή μέσα από 3 Χωριά",
      itin_2_desc: "Πέρασμα μέσα από 3 γραφικά παραδοσιακά χωριά της Σάμου γεμάτα αυθεντικό νησιώτικο χρώμα.",
      itin_3_title: "Off-Road Ορεινές & Παραθαλάσσιες Διαδρομές",
      itin_3_desc: "Οδήγηση σε συναρπαστικά χωμάτινα μονοπάτια, ορεινές διαδρομές και seaside route δίπλα στη θάλασσα.",
      itin_4_title: "Στάση στη Σπηλιά του Πυθαγόρα & Δροσερό Ρόφημα",
      itin_4_desc: "Επίσκεψη στην ιστορική Σπηλιά του Πυθαγόρα, στάσεις για πανοραμικές φωτογραφίες και δροσερό ρόφημα.",

      inc_atv: "Αυτόματο ATV & Καύσιμα",
      inc_helmet: "Κράνος Ασφαλείας DOT/ECE",
      inc_offroad: "Off-road & Mountain Διαδρομές",
      inc_seaside: "Seaside Route (Παραθαλάσσια Διαδρομή)",
      inc_villages: "Διαδρομή μέσα από 3 Χωριά",
      inc_cave: "Στάση στη Σπηλιά του Πυθαγόρα",
      inc_photos: "Στάσεις για Φωτογραφίες & Θέα",
      inc_drink: "Δροσερό Ρόφημα & Νερό",
      inc_guide: "Πιστοποιημένος Τοπικός Οδηγός",
      inc_t2_mountain: "Off-Road & Ορεινές Διαδρομές",
      inc_t2_rivers: "Διαδρομές σε Ποτάμια & Τρεχούμενα Νερά",
      inc_t2_sunshine: "Πανοραμική Θέα Ηλιοβασιλέματος & Sunshine Views",
      inc_t2_photos: "Στάσεις για Φωτογραφίες στο Ηλιοβασίλεμα",
      inc_1: "Κορυφαίο Αυτόματο ATV & Καύσιμα",
      inc_2: "Εγκεκριμένα Κράνη DOT/ECE",
      inc_3: "Πιστοποιημένος Τοπικός Οδηγός",
      inc_4: "Off-road & Mountain Διαδρομές",
      inc_5: "Δωρεάν Φωτογραφίες Δράσης",
      inc_6: "Μεταφορά από Ξενοδοχείο (Κατόπιν Συνεννόησης)",
      inc_max8: "Μικρό Group (Έως 8 Άτομα)",
      inc_sunset_drink: "Δροσερό Ρόφημα Ηλιοβασιλέματος & Νερό",

      bring_shoes: "Κλειστά Παπούτσια",
      bring_license: "Φυσικό Δίπλωμα (Κατ. Β)",
      bring_glasses: "Γυαλιά Ηλίου",
      bring_sunscreen: "Αντηλιακό & Καπέλο",
      bring_jacket: "Ελαφρύ Μπουφάν (Απόγευμα)",

      btn_book_t1: "Κράτηση Εκδρομής (€95)",
      btn_book_t2: "Κράτηση Sunset Tour (€95)",
      btn_whatsapp_inquire: "💬 Συνομιλία WhatsApp",

      t2_title: "Sunset Mountain & Coastal Quad Tour",
      t2_dep: "Αναχώρηση: 17:30 (Εποχιακό)",
      t2_desc: "Οδηγήστε τις δροσερές απογευματινές ώρες καθώς ο ήλιος δύει πάνω από το Αιγαίο. Ζήστε ορεινές κορυφογραμμές, μαγευτικά σημεία ηλιοβασιλέματος και παράκτιες διαδρομές στο λυκόφως.",

      why_tag: "Η Διαφορά Beta Samos",
      why_title: "Γιατί να Επιλέξετε Εμάς;",
      why_subtitle: "Συνδυάζουμε την αδρεναλίνη της off-road οδήγησης με γνήσια σαμιώτικη φιλοξενία και απόλυτη ασφάλεια.",
      feat_1_title: "Σύγχρονα Αυτόματα ATVs",
      feat_1_desc: "Πλήρως αυτόματα, εύκολα στην οδήγηση, άψογα συντηρημένα quads για άνεση και σταθερότητα.",
      feat_2_title: "Μυστικές Διαδρομές",
      feat_2_desc: "Πρόσβαση σε απόκρημνα σημεία θέας, ξωκλήσια και καταρράκτες που δεν προσεγγίζονται με συμβατικά ενοικιαζόμενα αυτοκίνητα.",
      feat_3_title: "Γευστικά Snacks για Αναπλήρωση Ενέργειας",
      feat_3_desc: "Ανακτήστε ενέργεια με θρεπτικά snacks, φρέσκα φρούτα εποχής και δροσερό νερό σε επιλεγμένα σημεία ανάπαυλας με εκπληκτική θέα.",
      feat_4_title: "Δωρεάν Φωτογραφίες Δράσης",
      feat_4_desc: "Οι οδηγοί μας τραβούν τις καλύτερες στιγμές της οδήγησης και της πεζοπορίας σας και τις μοιράζονται δωρεάν μαζί σας!",

      guide_tag: "Προετοιμασία Ταξιδιώτη",
      guide_title: "Οδηγίες & Χρήσιμες Πληροφορίες",
      guide_subtitle: "Όλα όσα χρειάζεται να γνωρίζετε για μια άνετη, ασφαλή και αξέχαστη εκδρομή.",
      g1_title: "Δίπλωμα Οδήγησης & Ηλικία",
      g1_desc: "Όλοι οι συμμετέχοντες πρέπει να είναι 21 έως 74 ετών. Οι οδηγοί πρέπει να κατέχουν έγκυρο φυσικό δίπλωμα αυτοκινήτου (Κατηγορία Β).",
      g2_title: "Κατάλληλα Υποδήματα",
      g2_desc: "Τα κλειστά αθλητικά ή πεζοπορικά παπούτσια είναι υποχρεωτικά. Δεν επιτρέπονται σαγιονάρες ή ανοιχτά σανδάλια.",
      g3_title: "Μικρά Groups (Έως 8 Άτομα)",
      g3_desc: "Οι εκδρομές περιορίζονται αυστηρά σε έως 8 συμμετέχοντες για μέγιστη ασφάλεια και προσωπική καθοδήγηση.",
      g4_title: "Εγγύηση Καιρού",
      g4_desc: "Σε περίπτωση ακραίων καιρικών φαινομένων, δωρεάν αλλαγή ημερομηνίας ή 100% πλήρης επιστροφή χρημάτων.",

      gal_tag: "Τοπία & Διαδρομές",
      gal_title: "Στιγμές από τις Διαδρομές μας",
      gal_subtitle: "Μια ματιά στα δάση, τις κορυφές και τα μονοπάτια που σας περιμένουν.",
      g_cap_1: "Πέρασμα από το Ποτάμι",
      g_cap_2: "Κομβόι στις Κορυφογραμμές",
      g_cap_3: "Ηλιοβασίλεμα πάνω από το Καρλόβασι",

      rev_tag: "Εμπειρίες Επισκεπτών",
      rev_title: "Τι Λένε οι Ταξιδιώτες",
      rev_subtitle: "Πραγματικές κριτικές από επισκέπτες που οδήγησαν μαζί μας.",
      r1_text: "\"Το αποκορύφωμα των διακοπών μας στη Σάμο! Ο Oltion ήταν φανταστικός οδηγός που μας έδειξε μέρη που δεν θα βρίσκαμε ποτέ μόνοι μας. Τα quads είναι καινούργια και η πεζοπορία αναζωογονητική!\"",
      r2_text: "\"Φανταστική 5ωρη εκδρομή! Ο συνδυασμός quad και πεζοπορίας στους καταρράκτες ήταν τέλειος. Άψογη ενημέρωση ασφαλείας και πεντανόστιμα τοπικά σνακ στη στάση με θέα.\"",
      r3_text: "\"Η καλύτερη εμπειρία στη Σάμο! Φοβερή διαδρομή στο βουνό, απόλυτη ασφάλεια και απίστευτη θέα. Το συστήνουμε ανεπιφύλακτα σε όποιον θέλει πραγματική περιπέτεια στο νησί!\"",

      loc_tag: "Σημείο Συνάντησης",
      loc_title: "Βρείτε μας στο Καρλόβασι",
      loc_desc: "Σε κεντρικό σημείο στο Καρλόβασι με εύκολο parking και άμεση πρόσβαση στις ορεινές και παράκτιες διαδρομές.",
      loc_addr_label: "Διεύθυνση:",
      loc_phone_label: "Τηλέφωνο & WhatsApp:",
      loc_hours_label: "Ωράριο Λειτουργίας:",
      loc_hours_val: "09:00 - 20:00 Καθημερινά (Καλοκαιρινή Περίοδος)",
      btn_directions: "Οδηγίες στο Google Maps",

      footer_about: "Κορυφαίος πάροχος υπαίθριων περιηγήσεων στη Σάμο. Καθοδηγούμενες off-road εκδρομές με ATV σε συνδυασμό με γραφική πεζοπορία στη φύση.",
      foot_exp: "Εκδρομές",
      foot_info: "Πληροφορίες",
      foot_contact: "Επικοινωνία",

      mob_call: "📞 Κλήση",
      mob_wa: "💬 WhatsApp",
      mob_book: "⚡ Κράτηση",

      modal_title: "Κράτηση Περιπέτειας στη Σάμο",
      modal_sub: "Άμεσο αίτημα κράτησης μέσω WhatsApp ή Email",
      m_tour_label: "Επιλεγμένη Εκδρομή",
      m_date_label: "Επιθυμητή Ημερομηνία",
      m_time_label: "Ώρα Αναχώρησης",
      opt_time_morning: "Πρωί (09:00)",
      opt_time_afternoon: "Μεσημέρι / Απόγευμα (13:00)",
      m_quads_label: "Αριθμός Quads",
      m_rider_type_label: "Διάταξη Αναβατών",
      m_name_label: "Ονοματεπώνυμο",
      m_phone_label: "Τηλέφωνο / WhatsApp",
      m_email_label: "Email",
      m_est_price: "Εκτιμώμενο Σύνολο:",
      btn_send_wa: "Αποστολή Αιτήματος μέσω WhatsApp",
      btn_send_email: "Αποστολή Αιτήματος μέσω Email"
    }
  };

  let currentLang = 'en';

  // --- Apply Language Translation ---
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.documentElement.lang = lang;
  }

  // Language Switcher Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // --- Mobile Navigation Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '76px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'white';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
        }
      });
    });
  }

  // --- Tour Card Tab Switching (Madeira Style) ---
  document.querySelectorAll('.tour-tabs').forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    const parentBody = tabGroup.closest('.tour-body');
    const panes = parentBody.querySelectorAll('.tab-pane');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');

        // Deactivate all buttons & panes in this tour card
        buttons.forEach(b => b.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        // Activate clicked
        btn.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  });

  // --- Dynamic Pricing & Booking Modal ---
  const bookingModal = document.getElementById('bookingModal');
  const modalClose = document.getElementById('modalClose');
  const modalTourSelect = document.getElementById('modalTourSelect');
  const modalQuads = document.getElementById('modalQuads');
  const modalRiderType = document.getElementById('modalRiderType');
  const modalPriceDisplay = document.getElementById('modalPriceDisplay');
  const modalDate = document.getElementById('modalDate');
  const modalTime = document.getElementById('modalTime');
  const modalName = document.getElementById('modalName');
  const modalPhone = document.getElementById('modalPhone');
  const modalEmail = document.getElementById('modalEmail');
  const btnSubmitWhatsApp = document.getElementById('btnSubmitWhatsApp');
  const btnSubmitEmail = document.getElementById('btnSubmitEmail');
  const modalFeedback = document.getElementById('modalFeedback');

  // Initialize EmailJS Engine
  if (typeof emailjs !== 'undefined') {
    try {
      emailjs.init({
        publicKey: 'Mfl9TCU5KOaXXnAHQ'
      });
    } catch (e) {
      console.warn('EmailJS init:', e);
    }
  }

  function showFeedback(message, type = 'success') {
    if (modalFeedback) {
      modalFeedback.className = `form-feedback ${type}`;
      modalFeedback.innerHTML = message;
      modalFeedback.style.display = 'block';
    }
  }

  function clearFeedback() {
    if (modalFeedback) {
      modalFeedback.className = 'form-feedback';
      modalFeedback.innerHTML = '';
      modalFeedback.style.display = 'none';
    }
  }

  // Set default minimum date to tomorrow
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDateStr = today.toISOString().split('T')[0];
  if (modalDate) modalDate.min = minDateStr;
  const qbDate = document.getElementById('qbDate');
  if (qbDate) qbDate.min = minDateStr;

  function calculatePrice() {
    const tour = modalTourSelect ? modalTourSelect.value : 'flagship';
    const quads = modalQuads ? parseInt(modalQuads.value, 10) || 1 : 1;
    const isShared = modalRiderType ? modalRiderType.value === 'shared' : false;

    let baseQuadPrice = 95;
    if (tour === 'sunset') {
      baseQuadPrice = 95;
    } else if (tour === 'vip') {
      baseQuadPrice = 140;
    }

    // Shared quad supplement (+€40 for passenger snacks/gear)
    const perQuadCost = isShared ? baseQuadPrice + 40 : baseQuadPrice;
    const total = perQuadCost * quads;

    if (modalPriceDisplay) {
      modalPriceDisplay.textContent = `€${total}`;
    }
    return total;
  }

  if (modalTourSelect) modalTourSelect.addEventListener('change', calculatePrice);
  if (modalQuads) modalQuads.addEventListener('change', calculatePrice);
  if (modalRiderType) modalRiderType.addEventListener('change', calculatePrice);

  function openModal(preselectedTour = 'flagship') {
    if (bookingModal) {
      if (modalTourSelect) modalTourSelect.value = preselectedTour;
      calculatePrice();
      clearFeedback();
      bookingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (typeof turnstile !== 'undefined') {
        try { turnstile.reset(); } catch (e) {}
      }
    }
  }

  function closeModal() {
    if (bookingModal) {
      bookingModal.classList.remove('active');
      document.body.style.overflow = 'auto';
      if (typeof turnstile !== 'undefined') {
        try { turnstile.reset(); } catch (e) {}
      }
    }
  }

  document.querySelectorAll('.open-booking-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tour = btn.getAttribute('data-tour') || 'flagship';
      openModal(tour);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeModal();
    });
  }

  // --- Hero Quick-Booking Bar Submit ---
  const qbSubmitBtn = document.getElementById('qbSubmitBtn');
  if (qbSubmitBtn) {
    qbSubmitBtn.addEventListener('click', () => {
      const qbTour = document.getElementById('qbTour').value;
      const qbDateVal = document.getElementById('qbDate').value;
      const qbRidersVal = document.getElementById('qbRiders').value;

      if (modalTourSelect) modalTourSelect.value = qbTour;
      if (modalDate && qbDateVal) modalDate.value = qbDateVal;

      if (modalQuads && modalRiderType) {
        if (qbRidersVal.includes('shared')) {
          modalRiderType.value = 'shared';
        } else {
          modalRiderType.value = 'solo';
        }
        if (qbRidersVal.startsWith('2')) {
          modalQuads.value = '2';
        } else {
          modalQuads.value = '1';
        }
      }

      openModal(qbTour);
    });
  }

  // --- WhatsApp Reservation Dispatch ---
  if (btnSubmitWhatsApp) {
    btnSubmitWhatsApp.addEventListener('click', () => {
      const name = modalName ? modalName.value.trim() : '';
      const phone = modalPhone ? modalPhone.value.trim() : '';
      const date = modalDate ? modalDate.value : '';
      const time = modalTime ? modalTime.value : '';
      const tour = modalTourSelect ? modalTourSelect.options[modalTourSelect.selectedIndex].text : '';
      const quads = modalQuads ? modalQuads.value : '1';
      const riderType = modalRiderType ? (modalRiderType.value === 'shared' ? 'Driver + Passenger (Shared)' : '1 Driver Solo') : '';
      const total = modalPriceDisplay ? modalPriceDisplay.textContent : '';

      if (!name || !phone || !date) {
        alert(currentLang === 'el' ? 'Παρακαλούμε συμπληρώστε Όνομα, Τηλέφωνο και Ημερομηνία.' : 'Please fill in your Name, Phone/WhatsApp, and Date.');
        return;
      }

      const message = `🏔️ *Beta Samos Tour Reservation Request*
👤 *Lead Guest:* ${name}
📞 *Phone/WhatsApp:* ${phone}
🗺️ *Tour:* ${tour}
📅 *Date:* ${date} (${time})
🚜 *Quads:* ${quads} Quad(s) [${riderType}]
💰 *Estimated Total:* ${total}

_Sent via betasamos.gr instant reservation engine._`;

      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/306942430930?text=${encodedMsg}`;
      window.open(waUrl, '_blank');
      closeModal();
    });
  }

  // --- Email Reservation Dispatch (Automatic Form Submission & Autoresponder) ---
  if (btnSubmitEmail) {
    btnSubmitEmail.addEventListener('click', async () => {
      const name = modalName ? modalName.value.trim() : '';
      const phone = modalPhone ? modalPhone.value.trim() : '';
      const email = modalEmail ? modalEmail.value.trim() : '';
      const date = modalDate ? modalDate.value : '';
      const time = modalTime ? modalTime.value : '';
      const tour = modalTourSelect ? modalTourSelect.options[modalTourSelect.selectedIndex].text : '';
      const quads = modalQuads ? modalQuads.value : '1';
      const riderType = modalRiderType ? (modalRiderType.value === 'shared' ? 'Driver + Passenger (Shared)' : '1 Driver Solo') : '';
      const total = modalPriceDisplay ? modalPriceDisplay.textContent : '';

      clearFeedback();

      if (!name || !phone || !date || !email) {
        showFeedback(
          currentLang === 'el' 
            ? '⚠️ Παρακαλούμε συμπληρώστε Ονοματεπώνυμο, Τηλέφωνο, Ημερομηνία και Email για να λάβετε την αυτόματη επιβεβαίωση.' 
            : '⚠️ Please fill in your Full Name, Phone, Date, and Email address to receive your confirmation.',
          'error'
        );
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        showFeedback(
          currentLang === 'el' 
            ? '⚠️ Παρακαλούμε εισάγετε μια έγκυρη διεύθυνση Email.' 
            : '⚠️ Please enter a valid Email address.',
          'error'
        );
        return;
      }

      // Check Cloudflare Turnstile Verification
      const cfResponse = document.querySelector('[name="cf-turnstile-response"]');
      if (typeof turnstile !== 'undefined' && cfResponse && !cfResponse.value) {
        showFeedback(
          currentLang === 'el'
            ? '⚠️ Παρακαλούμε ολοκληρώστε την επαλήθευση ασφαλείας (Cloudflare Turnstile).'
            : '⚠️ Please complete the Cloudflare security check.',
          'error'
        );
        return;
      }

      // Button Loading State
      const originalHtml = btnSubmitEmail.innerHTML;
      btnSubmitEmail.disabled = true;
      btnSubmitEmail.innerHTML = currentLang === 'el' 
        ? '<span>⏳</span> Αποστολή Αιτήματος...' 
        : '<span>⏳</span> Sending Request...';

      const autoresponseMessage = currentLang === 'el'
        ? `Γεια σας ${name},

Ευχαριστούμε για το αίτημα κράτησης στο Beta Samos ATV & Hiking Tour!

Λάβαμε το αίτημά σας με τα ακόλουθα στοιχεία:
---------------------------------------------
• Εκδρομή: ${tour}
• Ημερομηνία & Ώρα: ${date} (${time})
• Quads & Αναβάτες: ${quads} Quad(s) [${riderType}]
• Τηλέφωνο: ${phone}
• Email Επισκέπτη: ${email}
• Εκτιμώμενο Κόστος: ${total}
---------------------------------------------

Το αίτημά σας καταχωρήθηκε με επιτυχία. Η ομάδα μας θα επικοινωνήσει σύντομα μαζί σας για την τελική έγκριση και επιβεβαίωση της κράτησής σας.

Με εκτίμηση,
Beta Samos ATV & Hiking Tour
📍 Καρλόβασι, Σάμος, Ελλάδα
📞 WhatsApp/Τηλ: +30 694 243 0930
✉️ betasamos.greece@gmail.com
🌐 https://betasamos.gr`
        : `Dear ${name},

Thank you for your reservation request with Beta Samos ATV & Hiking Tour!

We have successfully received your request with the following details:
---------------------------------------------
• Selected Tour: ${tour}
• Preferred Date & Time: ${date} (${time})
• Quads & Rider Setup: ${quads} Quad(s) [${riderType}]
• Contact Phone: ${phone}
• Guest Email: ${email}
• Estimated Total: ${total}
---------------------------------------------

Your request is now in our system and our team will contact you shortly regarding the approval and confirmation of your excursion.

Best regards,
Beta Samos ATV & Hiking Tour Team
📍 Karlovasi, Samos Island, Greece
📞 WhatsApp/Phone: +30 694 243 0930
✉️ betasamos.greece@gmail.com
🌐 https://betasamos.gr`;

      try {
        const cfResponse = document.querySelector('[name="cf-turnstile-response"]');
        const turnstileToken = cfResponse ? cfResponse.value : '';

        // 1. Direct EmailJS Confirmation to Guest
        const emailJsParams = {
          to_email: email,
          to_name: name,
          lead_name: name,
          phone: phone,
          guest_email: email,
          tour: tour,
          tour_name: tour,
          date: date,
          time: time,
          date_time: `${date} (${time})`,
          quads: quads,
          rider_type: riderType,
          total: total,
          reply_to: 'betasamos.greece@gmail.com'
        };

        const emailJsPromise = typeof emailjs !== 'undefined'
          ? emailjs.send('service_9lkp0ui', 'template_jcgp2kt', emailJsParams).catch(e => console.warn('EmailJS error:', e))
          : Promise.resolve();

        // 2. Full Lead Notification to Business Inbox
        const web3Payload = {
          access_key: '99164a9b-9882-420b-a2a5-986516419acb',
          from_name: 'Beta Samos ATV & Hiking Tour',
          subject: `New Tour Reservation Request: ${name} (${date})`,
          name: name,
          email: email,
          replyto: email,
          'Lead Guest Name': name,
          'Phone / WhatsApp': phone,
          'Guest Email': email,
          'Selected Tour': tour,
          'Preferred Date': date,
          'Time Slot': time,
          'Number of Quads': quads,
          'Rider Arrangement': riderType,
          'Estimated Total': total,
          'Security Verification': turnstileToken ? 'Cloudflare Turnstile Verified' : 'Passed',
          'Submitted At': new Date().toLocaleString()
        };

        const web3Promise = fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(web3Payload)
        }).catch(() => null);

        await Promise.allSettled([emailJsPromise, web3Promise]);

        showFeedback(
          currentLang === 'el'
            ? `✅ <strong>Το αίτημα κράτησης στάλθηκε με επιτυχία!</strong><br>Email επιβεβαίωσης παραλαβής στάλθηκε στο <strong>${email}</strong>. Θα επικοινωνήσουμε άμεσα μαζί σας για την τελική έγκριση.`
            : `✅ <strong>Reservation request sent successfully!</strong><br>A confirmation receipt email has been sent to <strong>${email}</strong>. We will contact you shortly regarding approval.`,
          'success'
        );

        if (modalName) modalName.value = '';
        if (modalPhone) modalPhone.value = '';
        if (modalEmail) modalEmail.value = '';
        btnSubmitEmail.disabled = false;
        btnSubmitEmail.innerHTML = originalHtml;

        setTimeout(() => {
          closeModal();
          clearFeedback();
        }, 4500);

      } catch (err) {
        showFeedback(
          currentLang === 'el'
            ? '⚠️ Δεν ήταν δυνατή η αυτόματη αποστολή αυτή τη στιγμή. Παρακαλούμε επικοινωνήστε απευθείας μέσω WhatsApp (+30 694 243 0930) ή στο betasamos.greece@gmail.com.'
            : '⚠️ Could not send automatic email right now. Please reach us directly via WhatsApp (+30 694 243 0930) or email betasamos.greece@gmail.com.',
          'error'
        );
      } finally {
        btnSubmitEmail.disabled = false;
        btnSubmitEmail.innerHTML = originalHtml;
      }
    });
  }
});
