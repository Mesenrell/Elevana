/**
 * ELEVARA - JavaScript Interaktivitas
 * File ini menangani navigasi responsif, modal detail mobil,
 * accordion FAQ, scroll spy, filtering mobil katalog, dan notifikasi kontak.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Tutup menu saat salah satu link diklik (mobile)
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Tutup menu jika klik di luar navbar
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // 2. Navbar Scroll Effect (Shadow & Sticky Background)
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 3. Active Nav Link on Scroll (ScrollSpy) untuk halaman utama
    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const correspondingLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

                if (correspondingLink && !correspondingLink.classList.contains('nav-cta')) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        correspondingLink.classList.add('active');
                    } else {
                        correspondingLink.classList.remove('active');
                    }
                }
            });
        });
    }

    // 4. Data Lengkap 10 Model Mobil Listrik Elevara
    const carData = {
        'EV City (2026)': {
            title: 'EV City (2026)',
            subtitle: 'Mobil Listrik Kompak untuk Mobilitas Perkotaan',
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 300.000.000',
            category: 'City Car',
            specs: [
                { label: 'Jarak Tempuh', val: '300 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '40 kWh Lithium-ion' },
                { label: 'Waktu Pengisian', val: 'Fast Charge 30 Menit (10-80%)' },
                { label: 'Tenaga Motor', val: '130 HP / 180 Nm' },
                { label: 'Akselerasi (0-100 km/j)', val: '8.5 Detik' },
                { label: 'Kapasitas Tempat Duduk', val: '5 Penumpang' },
                { label: 'Garansi Baterai', val: '8 Tahun / 160.000 km' }
            ],
            desc: 'EV City dirancang khusus untuk kenyamanan berkendara di lalu lintas perkotaan. Desain lincah, kabin kedap suara, dan biaya operasional yang sangat hemat menjadikannya pilihan ideal sehari-hari.'
        },
        'EV Sport (2026)': {
            title: 'EV Sport (2026)',
            subtitle: 'Performa Agresif dengan Desain Aerodinamis Modern',
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 450.000.000',
            category: 'Sport Coupe',
            specs: [
                { label: 'Jarak Tempuh', val: '450 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '60 kWh Lithium-ion' },
                { label: 'Waktu Pengisian', val: 'Fast Charge 25 Menit (10-80%)' },
                { label: 'Tenaga Motor', val: '250 HP / 350 Nm' },
                { label: 'Akselerasi (0-100 km/j)', val: '5.2 Detik' },
                { label: 'Fitur Utama', val: 'Sport Mode & Launch Control' },
                { label: 'Garansi Baterai', val: '8 Tahun / 160.000 km' }
            ],
            desc: 'Rasakan sensasi sesungguhnya dengan EV Sport. Dilengkapi suspensi adaptif dan sistem kemudi presisi untuk pengalaman berkendara yang luar biasa di segala kondisi jalan.'
        },
        'EV Premium (2026)': {
            title: 'EV Premium (2026)',
            subtitle: 'Kemewahan Tingkat Tinggi & Jarak Tempuh Maksimal',
            image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 650.000.000',
            category: 'Sedan Mewah',
            specs: [
                { label: 'Jarak Tempuh', val: '550 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '80 kWh Ultrafast Battery' },
                { label: 'Waktu Pengisian', val: 'Fast Charge 20 Menit (10-80%)' },
                { label: 'Tenaga Motor', val: '380 HP / Dual Motor AWD' },
                { label: 'Akselerasi (0-100 km/j)', val: '3.9 Detik' },
                { label: 'Fitur Khusus', val: 'Autopilot ADAS Level 2+ & Panoramic Sunroof' },
                { label: 'Garansi Baterai', val: '10 Tahun / 200.000 km' }
            ],
            desc: 'Elevara Premium menyatukan kenyamanan kelas eksekutif dengan teknologi otonom pintar. Interior berbahan kulit nappa ramah lingkungan dan sound system 16-speaker imersif.'
        },
        'Elevara City Spark (2026)': {
            title: 'Elevara City Spark (2026)',
            subtitle: 'Kompak, Lincah, dan Super Efisien untuk Perkotaan',
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 295.000.000',
            category: 'City Car',
            specs: [
                { label: 'Jarak Tempuh', val: '310 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '42 kWh LFP Battery' },
                { label: 'Waktu Pengisian', val: '30 Menit (DC Fast 10-80%)' },
                { label: 'Akselerasi (0-100 km/j)', val: '8.2 Detik' },
                { label: 'Kecepatan Puncak', val: '150 km/jam' },
                { label: 'Garansi Baterai', val: '8 Tahun / 160.000 km' }
            ],
            desc: 'Mobil listrik kompak dengan radius putar kecil, kamera 360 derajat, dan konsumsi daya super hemat untuk kemudahan mobilitas harian Anda di jalan raya.'
        },
        'Elevara Sport GT (2026)': {
            title: 'Elevara Sport GT (2026)',
            subtitle: 'Aerodinamika Tajam & Performa Balap yang Bertenaga',
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 520.000.000',
            category: 'Sport Coupe',
            specs: [
                { label: 'Jarak Tempuh', val: '480 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '65 kWh Ultrafast' },
                { label: 'Waktu Pengisian', val: '22 Menit (DC Fast 10-80%)' },
                { label: 'Akselerasi (0-100 km/j)', val: '4.5 Detik' },
                { label: 'Tenaga Motor', val: '320 HP / 420 Nm' },
                { label: 'Garansi Baterai', val: '8 Tahun / 160.000 km' }
            ],
            desc: 'Coupe sport listrik 2-pintu bertenaga tinggi dengan suspensi sport adaptif dan interior cockpit futuristik layaknya jet tempur.'
        },
        'Elevara Apex Prime (2026)': {
            title: 'Elevara Apex Prime (2026)',
            subtitle: 'Sedan Eksekutif Flagship dengan Kenyamanan Kelas Satu',
            image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 680.000.000',
            category: 'Sedan Mewah',
            specs: [
                { label: 'Jarak Tempuh', val: '580 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '82 kWh High-Density' },
                { label: 'Waktu Pengisian', val: '20 Menit (DC Fast 10-80%)' },
                { label: 'Akselerasi (0-100 km/j)', val: '3.8 Detik' },
                { label: 'Fitur Otonom', val: 'Level 2+ Self-Driving ADAS' },
                { label: 'Garansi Baterai', val: '10 Tahun / 200.000 km' }
            ],
            desc: 'Sedan mewah ramah lingkungan dengan suspensi udara otomatis, head-up display augmented reality, dan kabin kedap suara berstandar ultra-premium.'
        },
        'Elevara Terra SUV (2026)': {
            title: 'Elevara Terra SUV (2026)',
            subtitle: 'SUV Listrik 7-Seater Tangguh untuk Segala Medan',
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 590.000.000',
            category: 'SUV',
            specs: [
                { label: 'Jarak Tempuh', val: '520 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '75 kWh Dual-Motor AWD' },
                { label: 'Waktu Pengisian', val: '25 Menit (DC Fast 10-80%)' },
                { label: 'Akselerasi (0-100 km/j)', val: '5.4 Detik' },
                { label: 'Kapasitas Bagasi', val: '780 Liter (Folded 1.800L)' },
                { label: 'Garansi Baterai', val: '8 Tahun / 160.000 km' }
            ],
            desc: 'SUV listrik keluarga dengan penggerak 4 roda All-Wheel Drive pintar, ground clearance tinggi 210mm, dan interior modular yang sangat fleksibel.'
        },
        'Elevara Nova Cross (2026)': {
            title: 'Elevara Nova Cross (2026)',
            subtitle: 'Crossover Modern dengan Desain Gagah dan Efisien',
            image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 395.000.000',
            category: 'SUV / Crossover',
            specs: [
                { label: 'Jarak Tempuh', val: '420 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '55 kWh LFP' },
                { label: 'Waktu Pengisian', val: '28 Menit (DC Fast 10-80%)' },
                { label: 'Akselerasi (0-100 km/j)', val: '6.8 Detik' },
                { label: 'Fitur', val: 'Panoramic Glass Roof & Wireless Apple CarPlay' },
                { label: 'Garansi Baterai', val: '8 Tahun / 160.000 km' }
            ],
            desc: 'Crossover elektrik yang menggabungkan kenyamanan sedan dengan ketangguhan SUV, sangat pas untuk perjalanan harian maupun liburan luar kota.'
        },
        'Elevara Neo Hatch (2026)': {
            title: 'Elevara Neo Hatch (2026)',
            subtitle: 'Hatchback Cerdas & Ekonomis Pilihan Generasi Masa Depan',
            image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 245.000.000',
            category: 'City Car',
            specs: [
                { label: 'Jarak Tempuh', val: '280 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '35 kWh Compact Battery' },
                { label: 'Waktu Pengisian', val: '30 Menit (DC Fast 10-80%)' },
                { label: 'Akselerasi (0-100 km/j)', val: '8.9 Detik' },
                { label: 'Biaya Pengisian Penuh', val: 'Hanya ~Rp 45.000 di rumah' },
                { label: 'Garansi Baterai', val: '8 Tahun / 160.000 km' }
            ],
            desc: 'Mobil listrik paling terjangkau di kelasnya tanpa mengorbankan kualitas. Sangat praktis untuk anak muda, mahasiswa, dan keluarga baru.'
        },
        'Elevara Falcon Wing GT (2026)': {
            title: 'Elevara Falcon Wing GT (2026)',
            subtitle: 'Supercar Elektrik Eksotis dengan Pintu Gullwing Ikonik',
            image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 980.000.000',
            category: 'Supercar EV',
            specs: [
                { label: 'Jarak Tempuh', val: '620 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '95 kWh Solid-Cell' },
                { label: 'Waktu Pengisian', val: '18 Menit (Ultra-Fast 350kW)' },
                { label: 'Akselerasi (0-100 km/j)', val: '2.9 Detik' },
                { label: 'Tenaga Maksimal', val: '650 HP / Quad Motor' },
                { label: 'Garansi Baterai', val: '10 Tahun / 200.000 km' }
            ],
            desc: 'Supercar listrik revolusioner berbalut bodi carbon-fiber dengan pintu sayap elang (Falcon Wing) dan tenaga monster 650 tenaga kuda.'
        },
        'Elevara Horizon MPV (2026)': {
            title: 'Elevara Horizon MPV (2026)',
            subtitle: 'MPV Mewah Berkapasitas Luas dengan Captain Seat VIP',
            image: 'horizon_mpv.jpg',
            price: 'Rp 620.000.000',
            category: 'MPV Keluarga VIP',
            specs: [
                { label: 'Jarak Tempuh', val: '470 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '72 kWh Long Range' },
                { label: 'Waktu Pengisian', val: '25 Menit (DC Fast 10-80%)' },
                { label: 'Akselerasi (0-100 km/j)', val: '7.2 Detik' },
                { label: 'Kenyamanan', val: 'Electric Ottoman Captain Seat with Massage' },
                { label: 'Garansi Baterai', val: '8 Tahun / 160.000 km' }
            ],
            desc: 'Solusi transportasi keluarga besar dan eksekutif kelas atas dengan kabin lega, pintu geser elektrik ganda, dan layar bioskop lipat 15 inci di baris kedua.'
        },
        'Elevara Cyber Truck (2026)': {
            title: 'Elevara Cyber Truck (2026)',
            subtitle: 'Truk Listrik Masa Depan dengan Daya Tarik & Ketahanan Ekstrem',
            image: 'cyber_truck.jpg',
            price: 'Rp 780.000.000',
            category: 'Pickup / Truck EV',
            specs: [
                { label: 'Jarak Tempuh', val: '600 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '100 kWh Heavy-Duty' },
                { label: 'Daya Tarik Beban', val: 'Hingga 4.500 kg' },
                { label: 'Akselerasi (0-100 km/j)', val: '4.2 Detik' },
                { label: 'Daya Angkut Bak', val: '1.500 kg + Power Outlet 220V V2L' },
                { label: 'Garansi Baterai', val: '10 Tahun / 250.000 km' }
            ],
            desc: 'Truk listrik tangguh berdesain baja eksoskeleton dengan kemampuan off-road superior dan fitur Vehicle-to-Load (V2L) untuk menyalakan perangkat elektronik luar ruangan.'
        },
        'Elevara Hyperion One (2026)': {
            title: 'Elevara Hyperion One (2026)',
            subtitle: 'Hypercar Konsep Masa Depan dengan Solid-State Battery',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
            price: 'Rp 1.450.000.000',
            category: 'Hypercar Edisi Terbatas',
            specs: [
                { label: 'Jarak Tempuh', val: '700 km (WLTP)' },
                { label: 'Kapasitas Baterai', val: '110 kWh Solid-State' },
                { label: 'Waktu Pengisian', val: '15 Menit (Extreme Fast 400kW)' },
                { label: 'Akselerasi (0-100 km/j)', val: '2.1 Detik' },
                { label: 'Kecepatan Puncak', val: '320 km/jam' },
                { label: 'Garansi Baterai', val: '10 Tahun Garansi Penuh' }
            ],
            desc: 'Puncak rekayasa otomotif listrik dunia. Hypercar bertenaga 900+ HP dengan aerodinamika aktif, sistem pendingin cryogenic, dan hanya diproduksi 100 unit di dunia.'
        }
    };

    // 5. Modal Detail Mobil
    const modal = document.getElementById('carModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');

    // Gunakan event delegation agar tombol di halaman katalog dan beranda langsung berfungsi
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.car-detail-btn');
        if (btn && modal && modalBody) {
            const card = btn.closest('.car-card');
            const carTitle = card ? card.querySelector('h3').innerText.trim() : '';
            const data = carData[carTitle] || carData['EV City (2026)'];

            let specsHtml = data.specs.map(item => `
                <li><strong>${item.label}:</strong> <span>${item.val}</span></li>
            `).join('');

            modalBody.innerHTML = `
                <div class="modal-car-grid">
                    <div class="modal-img-container">
                        <img src="${data.image}" alt="${data.title}">
                        <div class="modal-price-tag">${data.price}</div>
                    </div>
                    <div class="modal-car-info">
                        <div class="modal-badge">${data.category || 'Electric Vehicle'}</div>
                        <h3>${data.title}</h3>
                        <p class="modal-car-subtitle">${data.subtitle}</p>
                        <p class="modal-desc">${data.desc}</p>
                        <h4 class="specs-title">Spesifikasi Utama:</h4>
                        <ul class="modal-specs-list">
                            ${specsHtml}
                        </ul>
                        <div class="modal-actions">
                            <a href="index.html#kontak" class="btn btn-full modal-cta-btn" onclick="document.getElementById('carModal').classList.remove('show')">⚡ Ajukan Test Drive / Booking</a>
                        </div>
                    </div>
                </div>
            `;

            modal.classList.add('show');
        }
    });

    if (modal && modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // Tutup modal jika klik di luar modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });

        // Tutup modal dengan Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                modal.classList.remove('show');
            }
        });
    }

    // 6. Filter Kategori Mobil (Pada Halaman mobil.html)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const catalogCards = document.querySelectorAll('.catalog-card');
    const searchInput = document.getElementById('carSearchInput');
    const emptyNotice = document.getElementById('emptySearchNotice');

    function applyFilterAndSearch() {
        if (catalogCards.length === 0) return;

        const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        let visibleCount = 0;

        catalogCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category') || '';
            const cardText = card.innerText.toLowerCase();

            const matchesCategory = (activeFilter === 'all' || cardCategory === activeFilter);
            const matchesSearch = searchTerm === '' || cardText.includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (emptyNotice) {
            emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFilterAndSearch();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFilterAndSearch);
    }

    // 7. Interactive FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // 8. Form Kontak
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerText : 'Kirim Pesan';
            
            if (submitBtn) {
                submitBtn.innerText = 'Mengirim Permintaan...';
                submitBtn.disabled = true;
            }

            setTimeout(() => {
                contactForm.reset();
                if (submitBtn) {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }
                
                showToast('✅ Permintaan berhasil dikirim! Tim Elevara akan segera menghubungi Anda melalui WhatsApp/Email.');
            }, 800);
        });
    }

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4500);
    }

    // 9. Tab Switcher Keuntungan vs Kekurangan (Hal Baik & Buruk EV)
    const evTabButtons = document.querySelectorAll('.ev-tab-btn');
    const evTabPanes = document.querySelectorAll('.ev-tab-pane');

    if (evTabButtons.length > 0) {
        evTabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');

                // Update active state pada tombol tab
                evTabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update tab pane yang aktif
                evTabPanes.forEach(pane => {
                    if (pane.id === `pane-${targetTab}`) {
                        pane.classList.add('active');
                    } else {
                        pane.classList.remove('active');
                    }
                });
            });
        });
    }

    // 10. Tombol Floating Scroll To Top
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 11. Data Berita Mobil & Modal Detail
    const newsArticles = {
        1: {
            title: 'Hongqi E-HS9 Resmi Hadir di Indonesia, SUV Listrik Ultra-Mewah',
            image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
            author: 'Anindiyo Pradhana',
            date: '27 Agu, 2026',
            content: `
                <p>Pasar mobil listrik premium di Indonesia terus kedatangan pemain-pemain kelas atas. Hongqi secara resmi memperkenalkan E-HS9, sebuah SUV listrik ultra-mewah berukuran bongsor dengan desain megah nan elegan yang siap memanjakan para eksekutif dan keluarga papan atas.</p>
                <p>SUV ini dibekali baterai berkapasitas besar hingga 120 kWh yang sanggup menempuh jarak lebih dari 510 km dalam sekali pengisian penuh. Di dalam interior, penumpang disuguhkan jok pijat berpemanas lapis kulit premium Nappa, sistem infotainment 4 layar resolusi tinggi, serta suspensi udara adaptif yang menghadirkan sensasi melayang bak di atas karpet terbang.</p>
                <p>Kehadirannya semakin memperkaya pilihan kendaraan ramah lingkungan dengan standar kenyamanan presidensial di tanah air.</p>
            `
        },
        2: {
            title: 'Suzuki e-Sky Mendebut Siap Tantang Honda N-One e: dan Wuling EV',
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
            author: 'Anindiyo Pradhana',
            date: '26 Agu, 2026',
            content: `
                <p>Pabrikan asal Hamamatsu, Suzuki, ikut meramaikan persaingan kendaraan listrik mini perkotaan dengan meluncurkan Suzuki e-Sky. Mobil kompak berdesain mengotak yang ceria ini dirancang spesifik untuk mobilitas harian yang padat dan efisien.</p>
                <p>Membawa teknologi baterai efisiensi tinggi berjarak tempuh 230 km, Suzuki e-Sky menawarkan radius putar hanya 4,4 meter yang menjadikannya sangat lincah bermanuver di jalan sempit maupun parkiran gedung perkantoran. Harganya yang kompetitif diprediksi akan menjadi daya tarik kuat bagi kalangan muda profesional.</p>
            `
        },
        3: {
            title: 'Menanti Kejutan BYD Racco di Indonesia: Akankah Jadi Game Changer?',
            image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80',
            author: 'Anindiyo Pradhana',
            date: '24 Agu, 2026',
            content: `
                <p>BYD sudah cukup agresif dalam menggelontorkan jajaran mobil listrik globalnya, dan kini sinyal kehadiran BYD Racco di pasar Asia Tenggara kian santer terdengar. Model ini memadukan fungsionalitas micro-van listrik dengan kepraktisan maksimal.</p>
                <p>Dengan pintu geser elektrik dan lantai kabin rata berkat Blade Battery generasi terbaru, BYD Racco diproyeksikan menarik minat konsumen keluarga urban maupun pebisnis logistik perkotaan modern yang membutuhkan kendaraan operasional bebas emisi dan hemat biaya.</p>
            `
        },
        4: {
            title: 'Hongqi: Merek Legendaris dengan Sejarah Kenegaraan Masuki Era Elektrik',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
            author: 'Anindiyo Pradhana',
            date: '19 Agu, 2026',
            content: `
                <p>Lanskap industri otomotif nasional saat ini kian dinamis dengan masuknya merek-merek legendaris dunia. Hongqi, pabrikan yang telah berakar lebih dari 6 dekade sebagai produsen kendaraan kenegaraan para pemimpin dunia, kini sepenuhnya merangkul elektrifikasi.</p>
                <p>Transisi ini membuktikan bahwa mobil ramah lingkungan dapat mengawinkan nilai historis, kemewahan tanpa kompromi, dan teknologi motor listrik berakselerasi senyap tanpa emisi.</p>
            `
        },
        5: {
            title: 'Infrastruktur SPKLU Ultra-Fast Charging Ditambah 50 Titik Tol',
            image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
            author: 'Anindiyo Pradhana',
            date: '15 Agu, 2026',
            content: `
                <p>Pemerintah bersama konsorsium EV mempercepat penggelaran 50 titik SPKLU dengan kapasitas daya Ultra-Fast Charging 200kW–350kW di sepanjang rest area tol Trans-Jawa dan Trans-Sumatera.</p>
                <p>Dengan pengisian cepat ini, pengemudi EV hanya membutuhkan waktu istirahat sekitar 15 hingga 20 menit untuk menambah daya baterai hingga 80%, menghilangkan kekhawatiran jarak tempuh saat bepergian jauh ke luar kota.</p>
            `
        },
        6: {
            title: 'Insentif Pajak Pembelian Mobil Listrik Resmi Diperpanjang',
            image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80',
            author: 'Anindiyo Pradhana',
            date: '10 Agu, 2026',
            content: `
                <p>Kementerian Keuangan memastikan keringanan PPN Ditanggung Pemerintah (DTP) untuk pembelian mobil listrik berbasis baterai resmi diperpanjang hingga akhir tahun.</p>
                <p>Kebijakan ini menjadi stimulus penting yang mendorong adopsi kendaraan rendah emisi semakin terjangkau bagi masyarakat luas sekaligus mempercepat transisi energi hijau di sektor transportasi nasional.</p>
            `
        }
    };

    // Fungsi Global untuk Membuka Detail Berita
    window.openNewsDetail = function(id) {
        const article = newsArticles[id];
        const newsModal = document.getElementById('newsModal');
        const newsModalBody = document.getElementById('newsModalBody');

        if (article && newsModal && newsModalBody) {
            newsModalBody.innerHTML = `
                <img src="${article.image}" alt="${article.title}" class="news-modal-img">
                <div class="news-modal-inner">
                    <h2 class="news-modal-title">${article.title}</h2>
                    <div class="news-modal-meta">
                        <span class="news-author">${article.author}</span> • <span class="news-date">${article.date}</span>
                    </div>
                    <div class="news-modal-text">
                        ${article.content}
                    </div>
                    <div style="margin-top: 20px;">
                        <button class="btn btn-full" onclick="document.getElementById('newsModal').classList.remove('show')">Tutup Artikel</button>
                    </div>
                </div>
            `;
            newsModal.classList.add('show');
        }
    };

    const newsModal = document.getElementById('newsModal');
    const newsModalClose = document.getElementById('newsModalClose');
    if (newsModal && newsModalClose) {
        newsModalClose.addEventListener('click', () => {
            newsModal.classList.remove('show');
        });
        newsModal.addEventListener('click', (e) => {
            if (e.target === newsModal) {
                newsModal.classList.remove('show');
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && newsModal.classList.contains('show')) {
                newsModal.classList.remove('show');
            }
        });
    }

    // 12. Carousel Slider Berita Mobil (Tombol Prev & Next)
    const newsCarousel = document.getElementById('newsCarousel');
    const newsPrevBtn = document.getElementById('newsPrevBtn');
    const newsNextBtn = document.getElementById('newsNextBtn');

    if (newsCarousel && newsPrevBtn && newsNextBtn) {
        const getScrollAmount = () => {
            const firstCard = newsCarousel.querySelector('.news-card');
            return firstCard ? firstCard.offsetWidth + 24 : 320;
        };

        newsNextBtn.addEventListener('click', () => {
            newsCarousel.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        newsPrevBtn.addEventListener('click', () => {
            newsCarousel.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
    }
});


