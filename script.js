// ============================================
// INVENTORY ZERO-ONE - JavaScript
// ============================================

// Beispiel-Daten für die Sammlung (Platzhalter)
const inventoryItems = [
    {
        id: "001",
        name: "Siegel von Flamront",
        category: "Uraltes Siegel",
        description: "Ein uraltes Siegel das eine legendäre Kreatur in sich verschlossen hält.",
        rarity: "legendary",
        condition: "???",
        date: "Uraltes Siegel",
        location: "Bonus Effekt",
        notes: "Nur wer diesen Gegenstand besitzt kann die Kreatur im Inneren beobachten.",
        image: "images/Artefakt001.png"
    },
    {
        id: "002",
        name: "Gewöhnlicher Oranger Hut",
        category: "Fun",
        description: "Ein einfacher Hut für ein bisschen Style im Alltag.",
        rarity: "common",
        condition: "Keine",
        date: "Fun",
        location: "",
        notes: "Vielleicht kann er irgendwann mal wieder verwendet werden.",
        image: "images/Artefakt002.png"
    },
    {
        id: "003",
        name: "Artefakt #003",
        category: "???",
        description: "Dieses Artefakt wurde noch nicht entdeckt.",
        rarity: "unknown",
        condition: "Unbekannt",
        date: "???",
        location: "???",
        notes: "LOCATION UNKNOWN|Awaiting discovery...",
        image: ""
    },
    {
        id: "004",
        name: "Artefakt #004",
        category: "???",
        description: "Dieses Artefakt wurde noch nicht entdeckt.",
        rarity: "unknown",
        condition: "Unbekannt",
        date: "???",
        location: "???",
        notes: "LOCATION UNKNOWN|Awaiting discovery...",
        image: ""
    },
    {
        id: "005",
        name: "Artefakt #005",
        category: "???",
        description: "Dieses Artefakt wurde noch nicht entdeckt.",
        rarity: "unknown",
        condition: "Unbekannt",
        date: "???",
        location: "???",
        notes: "LOCATION UNKNOWN|Awaiting discovery...",
        image: ""
    },
    {
        id: "006",
        name: "Artefakt #006",
        category: "???",
        description: "Dieses Artefakt wurde noch nicht entdeckt.",
        rarity: "unknown",
        condition: "Unbekannt",
        date: "???",
        location: "???",
        notes: "LOCATION UNKNOWN|Awaiting discovery...",
        image: ""
    },
    {
        id: "007",
        name: "Artefakt #007",
        category: "???",
        description: "Dieses Artefakt wurde noch nicht entdeckt.",
        rarity: "unknown",
        condition: "Unbekannt",
        date: "???",
        location: "???",
        notes: "LOCATION UNKNOWN|Awaiting discovery...",
        image: ""
    },
    {
        id: "008",
        name: "Artefakt #008",
        category: "???",
        description: "Dieses Artefakt wurde noch nicht entdeckt.",
        rarity: "unknown",
        condition: "Unbekannt",
        date: "???",
        location: "???",
        notes: "LOCATION UNKNOWN|Awaiting discovery...",
        image: ""
    },
    {
        id: "009",
        name: "Artefakt #009",
        category: "???",
        description: "Dieses Artefakt wurde noch nicht entdeckt.",
        rarity: "unknown",
        condition: "Unbekannt",
        date: "???",
        location: "???",
        notes: "LOCATION UNKNOWN|Awaiting discovery...",
        image: ""
    },
    {
        id: "010",
        name: "Artefakt #010",
        category: "???",
        description: "Dieses Artefakt wurde noch nicht entdeckt.",
        rarity: "unknown",
        condition: "Unbekannt",
        date: "???",
        location: "???",
        notes: "LOCATION UNKNOWN|Awaiting discovery...",
        image: ""
    },
    {
        id: "011",
        name: "Artefakt #011",
        category: "???",
        description: "Dieses Artefakt wurde noch nicht entdeckt.",
        rarity: "unknown",
        condition: "Unbekannt",
        date: "???",
        location: "???",
        notes: "LOCATION UNKNOWN|Awaiting discovery...",
        image: ""
    },
    {
        id: "012",
        name: "Artefakt #012",
        category: "???",
        description: "Dieses Artefakt wurde noch nicht entdeckt.",
        rarity: "unknown",
        condition: "Unbekannt",
        date: "???",
        location: "???",
        notes: "LOCATION UNKNOWN|Awaiting discovery...",
        image: ""
    }
];

// DOM Elements
const inventoryGrid = document.getElementById('inventoryGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

// Modal Elements
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalId = document.getElementById('modalId');
const modalDescription = document.getElementById('modalDescription');
const modalRarity = document.getElementById('modalRarity');
const modalDate = document.getElementById('modalDate');
const modalCondition = document.getElementById('modalCondition');
const modalLocation = document.getElementById('modalLocation');
const modalNotes = document.getElementById('modalNotes');

// Seltenheit übersetzen
const rarityTranslations = {
    'legendary': 'Legendär',
    'epic': 'Episch',
    'rare': 'Selten',
    'common': 'Gewöhnlich',
    'unknown': '???'
};

// Karten generieren
function generateCards() {
    inventoryGrid.innerHTML = '';
    
    inventoryItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.dataset.id = item.id;
        
        const hasImage = item.image && item.image.trim() !== '';
        const noteParts = item.notes.split('|');
        const noteTitle = noteParts[0] || '';
        const noteSubtitle = noteParts[1] || '';
        
        card.innerHTML = `
            <div class="card-image-container ${!hasImage ? 'no-image' : ''}">
                ${hasImage 
                    ? `<img src="${item.image}" alt="${item.name}" class="card-image" loading="lazy">`
                    : `<div class="placeholder-image">
                        <div class="placeholder-status">${noteTitle}</div>
                        <div class="placeholder-note">${noteSubtitle}</div>
                       </div>`
                }
                <div class="card-overlay"></div>
                <span class="card-category">${item.category}</span>
                <span class="card-rarity ${item.rarity}"></span>
            </div>
            <div class="card-content">
                <span class="card-id">#${item.id}</span>
                <h3 class="card-title">${item.name}</h3>
                <p class="card-subtitle">${item.description.substring(0, 60)}...</p>
                <div class="card-footer">
                    <div class="card-status">
                        <span class="status-dot"></span>
                        <span>${item.condition}</span>
                    </div>
                    <span class="card-action">DETAILS →</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(item));
        inventoryGrid.appendChild(card);
    });
    
    // Update Stats - Anzahl gefundener Artefakte (mit Bild)
    const discoveredCount = inventoryItems.filter(item => item.image && item.image.trim() !== '').length;
    const discoveredStr = String(discoveredCount).padStart(3, '0');
    document.getElementById('totalItems').textContent = `${discoveredStr}/???`;
}

// Modal öffnen
function openModal(item) {
    modalImage.src = item.image;
    modalImage.alt = item.name;
    modalCategory.textContent = item.category.toUpperCase();
    modalTitle.textContent = item.name;
    modalId.textContent = `#${item.id}`;
    modalDescription.textContent = item.description;
    modalRarity.textContent = rarityTranslations[item.rarity] || item.rarity;
    modalDate.textContent = item.date;
    modalCondition.textContent = item.condition;
    modalLocation.textContent = item.location;
    modalNotes.textContent = item.notes;
    
    // Bonuseffekt-Feld ausblenden wenn leer
    const bonusEffectDiv = document.querySelector('.modal-stat.bonus-effect');
    if (bonusEffectDiv) {
        bonusEffectDiv.style.display = item.location && item.location.trim() !== '' ? '' : 'none';
    }
    
    // Seltenheits-Farbe anpassen
    const rarityColors = {
        'legendary': '#ffd700',
        'epic': '#a855f7',
        'rare': '#3b82f6',
        'common': '#6b7280',
        'unknown': '#00f0ff'
    };
    modalRarity.style.color = rarityColors[item.rarity] || 'inherit';
    
    // URL aktualisieren für Deep-Linking
    history.pushState({ itemId: item.id }, '', `#${item.id}`);
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Modal schließen
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // URL zurücksetzen
    history.pushState({}, '', window.location.pathname);
}

// Event Listeners
modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    generateCards();
    
    // Deep-Link prüfen - Item direkt öffnen wenn ID in URL
    checkDeepLink();
    
    // Kleine Animation beim Laden
    const cards = document.querySelectorAll('.item-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Deep-Link Handler
function checkDeepLink() {
    const hash = window.location.hash.substring(1); // # entfernen
    if (hash) {
        const item = inventoryItems.find(i => i.id === hash);
        if (item) {
            openModal(item);
        }
    }
}

// Zurück-Button Handler
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.itemId) {
        const item = inventoryItems.find(i => i.id === e.state.itemId);
        if (item) {
            openModal(item);
        }
    } else {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ============================================
// ANLEITUNG ZUM HINZUFÜGEN NEUER GEGENSTÄNDE:
// ============================================
// 
// Um einen neuen Gegenstand hinzuzufügen, füge ein neues Objekt 
// zum inventoryItems Array hinzu:
//
// {
//     id: "013",                           // Eindeutige ID
//     name: "Name des Gegenstands",        // Anzeigename
//     category: "Kategorie",               // z.B. Technik, Figuren, etc.
//     description: "Beschreibung...",      // Ausführliche Beschreibung
//     rarity: "legendary",                 // legendary, epic, rare, common
//     condition: "Neuwertig",              // Zustandsbeschreibung
//     date: "01.01.2026",                  // Datum (Erhalten/Gekauft)
//     location: "Vitrine A",               // Aufbewahrungsort
//     notes: "Zusätzliche Notizen...",     // Weitere Infos
//     image: "URL oder lokaler Pfad"       // Bild des Gegenstands
// }
//
// Für lokale Bilder: Speichere sie im "images" Ordner und verwende
// "images/dein-bild.jpg" als Pfad.
// ============================================
