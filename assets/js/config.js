var SITE_CONFIG = {
    general: {
        responsive: '(max-width: 1024px)', /* kaç px de responsive geçeceği */
        regex: {
            typ1: /[^a-zA-ZıiIğüşöçİĞÜŞÖÇ\s]+/, /* sadece harf */
            typ2: /[^0-9\s]+/, /* sadece rakam */
            typ3: /[^a-zA-ZıiI0-9ğüşöçİĞÜŞÖÇ\s]+/ /* harf rakam karışık */
        },
    },
    management: {

        /* 
            url selection 
        */
        urlSelected: [
            { uri: '/uyeIslem/favorilistem.aspx', elm: '[rel="ems-member-favorite"]', cls: 'selected' },
            { uri: '/favorilerim/', elm: '[rel="ems-member-favorite"]'},
            { uri: '/my-favorites/', elm: '[rel="ems-member-favorite"]'},
            { uri: '/uyeIslem/marketdedektif.aspx', elm: '[rel="ems-member-follow-list"]' },
            { uri: '/uyeIslem/siparistakip.aspx', elm: '[rel="ems-member-order"]' },
            { uri: '/siparislerim/', elm: '[rel="ems-member-order"]' },
            { uri: '/my-orders/', elm: '[rel="ems-member-order"]' },
            { uri: '/uyeIslem/siparisdetay.aspx', elm: '[rel="ems-member-order"]' },
            { uri: '/uyeIslem/siparisIptal.aspx', elm: '[rel="ems-member-order"]' },
            { uri: '/uyeIslem/siparisIade.aspx', elm: '[rel="ems-member-order"]' },
            { uri: '/uyeIslem/iadetakip.aspx', elm: '[rel="ems-member-refund"]' },
            { uri: '/iadelerim/', elm: '[rel="ems-member-refund"]' },
            { uri: '/my-return/', elm: '[rel="ems-member-refund"]' },
            { uri: '/uyeIslem/kuponlarim.aspx', elm: '[rel="ems-member-ticket"]' },
            { uri: '/kuponlarim/', elm: '[rel="ems-member-ticket"]' },
            { uri: '/my-coupon/', elm: '[rel="ems-member-ticket"]' },
            { uri: '/uyeIslem/odemeCeki.aspx', elm: '[rel="ems-member-gift-card"]' },
            { uri: '/gift-kartlarim/', elm: '[rel="ems-member-gift-card"]' },
            { uri: '/my-gift-card/', elm: '[rel="ems-member-gift-card"]' },            
            { uri: '/uyeBilgi/uyeBilgi.aspx', elm: '[rel="ems-member-info"]' },
            { uri: '/kisisel-bilgilerim/', elm: '[rel="ems-member-info"]' },
            { uri: '/my-personel-informations/', elm: '[rel="ems-member-info"]' },
            { uri: '/uyeBilgi/uyeSifre.aspx', elm: '[rel="ems-member-password"]' },
            { uri: '/sifre-degistir/', elm: '[rel="ems-member-password"]' },
            { uri: '/change-password/', elm: '[rel="ems-member-password"]' },
            { uri: '/uyeBilgi/uyeAdres.aspx', elm: '[rel="ems-member-address"]' },
            { uri: '/adreslerim/', elm: '[rel="ems-member-address"]' },
            { uri: '/my-address/', elm: '[rel="ems-member-address"]' },
            { uri: '/mesaj/mesaj.aspx', elm: '[rel="ems-member-message"]' },
            { uri: '/mesaj/mesaj_oku.aspx', elm: '[rel="ems-member-message"]' },
            { uri: '/mesaj/mesaj_gonder.aspx', elm: '[rel="ems-member-message"]' },
            { uri: '/mesajlarim/', elm: '[rel="ems-member-message"]' },
            { uri: '/my-message/', elm: '[rel="ems-member-message"]' },
            { uri: '/uyeIslem/kuponlarim.aspx?tp=2&spr=0', elm: '.btnKuponHepsi' },
            { uri: '/kuponlarim/', elm: '.btnKuponHepsi' },
            { uri: '/uyeIslem/kuponlarim.aspx?tp=2&spr=2', elm: '.btnKuponAcikKuponlar' },
            { uri: '/uyeIslem/kuponlarim.aspx?tp=2&spr=4', elm: '.btnKuponKapanan' },
        ],
        
        /* 
            form yönetimi 
        */
        form: [            
            /* yeni adres */
            {
                'el': '[id$="lbfUYA_AD"]',
                'addClass': 'zorunluFont'
            },
            {
                'el': '[id$="txtUYA_AD"]',
                'attr': { 'required': 'true' }
            },
            {
                'el': '[id$="lbfUYA_CEPTELEFON"]',
                'addClass': 'zorunluFont'
            },
            {
                'el': '[id$="txtUYA_CEPTELEFON"]',
                'mask': '9999999999',
                'prop': { 'type': 'tel' },
                'attr': { 'required': 'true' }
            },
            {
                'el': '[id$="txtUYA_TCKIMLIKNO"]',
                'mask': '99999999999',
                'prop': { 'type': 'tel' }
            },
            {
                'el': '[id$="txtUYA_POSTAKODU"]',
                'regex': 'typ2',
                'attr': { 'required': 'true' }
                //'mask': '99999',
                //'prop': { 'type': 'tel' }
            },

            /* iletisim */
            {
                'el': '[id$="txtUYM_TELEFON"]',
                'mask': '999 9999999',
                'prop': { 'type': 'tel' }
            },

            /* login */
            {
                'el': '[id$="lbfUYE_CEPTELEFON"]',
                'addClass': 'zorunluFont'
            },
            {
                'el': '[id$="txtUYE_CEPTELEFONALAN"]',
                'mask': '999',
                'prop': { 'type': 'tel' },
                'attr': { 'required': 'true' }
            },
            {
                'el': '[id$="txtUYE_CEPTELEFON"]',
                'mask': '9999999',
                'prop': { 'type': 'tel' },
                'attr': { 'required': 'true' }
            },
            {
                'el': '[id$="txtUYE_DOGUMTARIHI"]',
                'attr': {  'required': 'true', 'autocomplete': 'off', /*'readonly': 'true'*/ },
                'mask': '99.99.9999',
            },

            {
                'el': '[id$="lbfUYE_DOGUMTARIHI"]',
                'attr': {  'class': 'zorunluFont' },
            },

            {
                'el': '[id$="txtUYE_KONTROLKODU"]',
                'attr': { 'maxlength': '6', 'autocomplete': 'off' }
            },

            /* diger */
            {
                'el': '.mini-bulletin [id$="txtUYE_EMAIL"]',
                'attr': { 'placeholder': $('[data-target="[rel=\'lbfBultenInput\']"]').text() || '' }
            },
            {
                'el': '[id$="txtURN_ADET"]',
                'attr': { 'readonly': 'true' }
            },

            /* XML Form */
            {
                'el': 'input.fc-int',
                'regex': 'typ2' 
            },
            {
                'el': 'input.fc-string',
                'regex': 'typ1'
            },
            {
                'el': 'input.fc-tc',
                'mask': '99999999999',
                'prop': { 'type': 'tel' },
                'regex': 'typ1'
            },
            {
                'el': 'input.fc-tel',
                'mask': '999 9999999',
                'prop': { 'type': 'tel' },
                'regex': 'typ1'
            },
            {
                'el': 'input.fc-mail',
                'prop': { 'type': 'mail' }
            },
            {
                'el': '[id$="txtPRM_TEL"]',
                'mask': '999 9999999',
                'prop': { 'type': 'tel' }
            }
        ],

        /* 
            append yönetimi 
        */
        append: [
            { 'main': '.ems-extra-product', 'target': '.ems-extra-product-append', 'add': 'append' },
            { 'main': '.customer-support', 'target': '.customer-support-append', 'add': 'append' },
            { 'main': '.mini-lang', 'target': '.mini-lang-append', 'add': 'append', 'clone': true },
            { 'main': '.top-menu', 'target': '.top-menu-append', 'add': 'append', 'clone': true },
            { 'main': '.popular-search-words', 'target': '.popular-search-words-append', 'add': 'append' },
            { 'main': '.popular-last-search', 'target': '.popular-search-words-append', 'add': 'append' },
            { 'main': '.kutuDefault.kutuUyelikOneri', 'target': '.kutuUyelikOneri-append', 'add': 'append' },
            { 'main': '.bottom-step.ems-obj-step1', 'target': '.bottom-step.ems-obj-step0', 'add': 'after' },
            { 'main': '.pageSiparisOnay_lbfSatisSozlesme', 'target': '.bottom-step.ems-obj-step1', 'add': 'after' },
            { 'main': '.pageSiparisOnay_lbfOnBilgilendirmeForm', 'target': '.bottom-step.ems-obj-step1', 'add': 'after' },
            { 'main': '.ems-prd-list-sort', 'target': '.ems-prd-list-sort-append', 'add': 'append' },
            { 'main': '.ems-step1 .ems-order-cart-grid > .ga1', 'target': '.ems-order-cart-grid-ga1-append', 'add': 'append' },
            { 'main': '.ems-prdd-gallery .swiper-slide:eq(0) > a img', 'target': '.ems-prdd-small-img', 'add': 'append', 'clone': true },
            { 'main': '[data-swiper="collections"] .swiper-wrapper', 'target': '[data-swiper="collectionBig"] .swiper-wrapper', 'add': 'html' },
            { 'main': '.basket-ssl', 'target': '.customer-support-append', 'add': 'before' },
        ]
    },
    plugin: {

        animate: {
            animCls: 'slideInUp', // viewporta girince alacağı class belirlenir.
            threshold: 0, // threshold değeri
            delay: 0, // girilen milisaniyeye göre settimeot ile classı atacak
        },

        /* 
            zoom gallery
        */
        zoomGallery: {
            ID: '.ems-prdd-gallery',
            'prop': {
                'template': {
                    'wrp': '<div class="zoom-gallery"><div class="zoom-gallery-inner"><div class="zoom-gallery-header"><span class="title">{{title}}</span><a href="javascript:void(0);" class="close-btn sub-close">{{closeButton}}</a></div>{{large}}{{thumbs}}<div class="zoom-gallery-footer">'+ ($('[data-target="[rel=\'lbfZoomFooter\']"]').html() || 'büyütmek için çift tıkla') +'</div></div></div>',
                    'large': '<div class="large-wrapper swiper-container swiper-container-light slider-navigation slider-pagination"><div class="swiper-inner"><ul class="swiper-wrapper">{{li}}</ul></div><div class="swiper-button-prev zoom-swiper-large-button-prev">{{largeButtonPrev}}</div><div class="swiper-button-next zoom-swiper-large-button-next">{{largeButtonNext}}</div><div class="swiper-pagination"></div></div>',
                    'largeLi': '<li data-order="{{order}}" class="swiper-slide"><div class="swiper-zoom-container"><img data-src="{{src}}" class="swiper-lazy"></div><div class="swiper-lazy-preloader"></div></li>',
                    'thumbs': '<div class="thumbs-wrapper swiper-container"><div class="swiper-inner"><ul class="swiper-wrapper">{{li}}</ul></div><div class="swiper-button-prev zoom-swiper-thumb-button-prev">{{thumbButtonPrev}}</div><div class="swiper-button-next zoom-swiper-thumb-button-next">{{thumbButtonNext}}</div></div>',
                    'thumbsLi': '<li data-order="{{order}}" class="swiper-slide"><span><img src="{{src}}" border="0" /></span></li>'
                },
                thumbConfig: {
                    slideToClickedSlide: true,
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    onlyExternal: true,
                    spaceBetween: 10,
                    direction: 'vertical',
                    navigation: {
                        nextEl: '.zoom-swiper-thumb-button-next',
                        prevEl: '.zoom-swiper-thumb-button-prev',
                    },
                },
                closeButton: '<svg class="icon-close"><use xlink:href="#icon-close"></use></svg>'
            }
        },

        /* 
           social Share
       */
        socialShare: {
            ID: '.social-share-body > a'
        },

        /* 
            load more button
        */
        loadMoreButton: {
            'ID': '.loadmore-btn-list',
            'prop': {
                'activePaging': '.urunPaging_pageNavigation [id$="ascPagingDataAlt_lblPaging"] span',
                'target': '.urnList .emosInfinite',
                'paging': '.urunPaging_pageNavigation'
            }
        },

        /* 
            counter
        */
        counter: {
            'ID': '.ems-grid-table-favorite [id$="txtURN_ADET"]',
        },

        /* 
           kategori filter
       */
        categoryFilter: {
            'ID': '.ems-page-product-list',
            'prop': {
                'target': '.ems-page-product-list', // ajx ile htmlin dolacağı kapsayici div
                'btn': '.urunKiyaslamaOzellik_ozellik a, .menuKategori li:not(".no-ajx") > a, .urunPaging_pageNavigation a, .ozellikSecimGrup a, .urunKiyaslamaOzellik_tumunuTemizle a', // ajx button olacak tüm nesneler buraya tanımlanır

                'mobiBtn': '.btn-filter-popup', // mobilde filtre popup açma
                'mobiCloseBtn': '.kutuDefault.kutuOzellikFiltre .btn-close, #pnlSecimiDarat .kutuFooterOzellikFiltre .filter-apply', // mobilde filtre popup açma
            }
        },

        /*  
            list sort
        */
        listSort: [
            {
                'ID': '.ems-sort-body .sorts',
                'prop': {
                    'btn': '[rel]',
                    'mobiBtn': '.btn-sort-popup',
                    'mobiCloseBtn': '.ems-sort .btn-close, .sort-apply .btn',
                    'clearBtn': '.sort-clear > a'
                }
            }
        ],

        /* 
           liste görünüm
       */
        viewer: {
            'ID': '.ems-sort-body .views',
            'prop': {
                'btn': '[rel]',
                'selected': 'link_selected',
                'defaultSelected': {
                    'mobi': 'view-2',
                    'desktop': 'view-3'
                }
            }
        },

        /* 
            kategori swiper
        */
        catSwiper: [
            {
                'ID': '.menuKategori',
                'prop': {
                    'target': '.categories-append',
                    'addAllBtn': '[data-target="[rel=\'lbfTumu\']"]'
                }
            }
        ],

        /* 
         popular worlds
        */
        popularWorlds: [
            {
                'ID': '.popular-search-words',
                'prop': {
                    'input': '[id="txtARM_KEYWORD"]',
                    'btn': '[data-keyword]'
                }
            }
        ],

        /* 
            custom search
        */
        customSearch: {
            'ID': '.mini-search',
            'prop': {
                btn: '.mini-search-info, .header-mobile .open-search', // trigger button
                clearButton: '.mini-search-sub .sub-close', // input içerisini temizleme
                closeBtn: '.mini-search-overlay, .mini-search-sub .sub-close', // search close button
                input: '[id$="txtARM_KEYWORD"]', // search input

                // cls
                ajx: 'mini-search-ajx-loading',
                ready: 'mini-search-ready',
                animate: 'mini-search-animate',
                focused: 'mini-search-focused',
                keyup: 'mini-search-keyup',
                result: 'mini-search-result-found',
                noResult: 'mini-search-no-result',
            }
        },

        /* 
            dropDown
        */
        dropDown: [
            {
                'ID': '.mini-lang-con .mini-lang',
                'prop': {
                    'clicked': '.mini-lang-info',
                    'closeElem': '.mod-mini-login, #validateLogin',
                    'type': isMobile ? 'click' : 'click',
                    'customClass': 'ems-lang-opened',
                    'bdyCls': 'mini-lang-ready',
                    'bdyCls2': 'mini-lang-animate',
                    'closedBtn': '.mini-lang-overlay, .mini-lang-sub .sub-close',
                    'overlay': true,
                    'openedDelay': 222,
                }
            },
            {
                'ID': '.mini-cart',
                'prop': {
                    'clicked': '.mini-cart-info',
                    'closeElem': '.mod-mini-login, .mini-lang',
                    'type': isMobile ? 'click' : 'click',
                    'customClass': 'ems-cart-opened',
                    'bdyCls': 'mini-cart-ready',
                    'bdyCls2': 'mini-cart-animate',
                    'closedBtn': '.mini-cart .mini-cart-overlay, .mini-cart .sub-close',
                    'overlay': true,
                    'openedDelay': 222
                }
            },
            {
                'ID': '#validateLogin',
                'prop': {
                    'clicked': '.mini-user-info',
                    'closeElem': '.mod-mini-cart, .mini-lang',
                    'type': isMobile ? 'click' : 'click',
                    'customClass': 'ems-user-opened',
                    'bdyCls': 'mini-user-ready',
                    'bdyCls2': 'mini-user-animate',
                    'closedBtn': '#validateLogin .sub-close, #validateLogin .mini-user-overlay',
                    'overlay': true,
                    'openedDelay': 222
                }
            },
        ],

        /* 
            main menu
        */
        menu: [

            {
                'ID': '.menu.main-menu',
                /*
                    NOT: cosmetica daki gibi bir menu istenirse
                    'custom': {
                        'elm': '.sub-nav > ul',
                        'unbind': '.sub-nav > ul > li',
                        'target': '> li:eq( 1 )',
                        'class': 'selected'
                    },
                */
                'prop': {
                    'closeElem': '.mod-mini-cart, .mod-mini-login',
                    'bdyClicked': true,
                    'eventType': isMobile ? 'click' : 'hover',
                    'overlay': true,
                    'bdyCls': 'menu-ready',
                    'bdyCls2': 'menu-animate',
                    'items': 'ul > li'
                }
            }
        ],

        /* 
            swiper config
        */
        swiper: {

            defaultOpt: {
                videoStretching: 'responsive'
            },

            main: {
                paginationClickable: true,
                preloadImages: false,
                lazyLoading: true,
                slidesPerView: 1,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },

            productDetail: {
                paginationClickable: true,
                preloadImages: false,
                lazyLoading: true,
                slidesPerView: 1,
                wrapperClass: 'slide-wrp',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },

            widgetFive: {
                paginationClickable: true,
                preloadImages: false,
                lazyLoading: true,
                slidesPerView: 5,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },

            widgetThree: {
                paginationClickable: true,
                preloadImages: false,
                lazyLoading: true,
                slidesPerView: 3,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },

            widgetVertical: {
                paginationClickable: true,
                preloadImages: false,
                lazyLoading: true,
                slidesPerView: 1,
                loop: true,
                direction: 'vertical'
            },

            widgetAuto: {
                paginationClickable: true,
                preloadImages: false,
                lazyLoading: true,
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },

            widgetStoryCentered: {
                paginationClickable: true,
                preloadImages: false,
                lazyLoading: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },

            widgetStory: {
                paginationClickable: true,
                preloadImages: false,
                lazyLoading: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },

            collections: {
                paginationClickable: true,
                preloadImages: false,
                lazyLoading: true,

                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 20,
                loopedSlides: 20,

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },

            collectionBig: {
                paginationClickable: true,
                preloadImages: false,
                lazyLoading: true,

                slidesPerView: 1,
                loop: true,
                loopAdditionalSlides: 20,
                loopedSlides: 20,
                
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }

        },

        /* input, selectbox, radiobox stillendirme */
        styler: [
            //passiveIco: ikon
            //activeIco: tıklandıktan sonraki ikon
            //class: özel class
            {
                ID: 'select',
                prop: {
                    wrapper: true,
                    passiveIco: '<svg class="icon icon-select"><use xlink:href="#icon-select"></use></svg>',
                    activeIco: '<svg class="icon icon-select-active"><use xlink:href="#icon-select-active"></use></svg>',
                    customClass: ''
                }
            },
            {
                ID: 'input:checkbox',
                prop: {
                    wrapper: true,
                    passiveIco: '<svg class="icon icon-checkbox"><use xlink:href="#icon-checkbox"></use></svg>',
                    activeIco: '<svg class="icon icon-checkbox-active"><use xlink:href="#icon-checkbox-active"></use></svg>',
                    customClass: ''
                }
            },
            {
                ID: 'input:radio',
                prop: {
                    wrapper: true,
                    passiveIco: '<svg class="icon icon-radio"><use xlink:href="#icon-radio"></use></svg>',
                    activeIco: '<svg class="icon icon-radio-active"><use xlink:href="#icon-radio-active"></use></svg>',
                    customClass: 'ems-custom-radiobox'
                }
            }
        ]
    }
};