class AlternativeDistanceCalculator {
    constructor() {
        this.map = null;
        this.fromMarker = null;
        this.toMarker = null;
        this.routeLine = null;
        this.fromCoords = null;
        this.toCoords = null;
        
        // Mock locations database for demo
       this.mockLocations = [
    { name: "New York, NY, USA", lat: 40.7128, lng: -74.0060 },
    { name: "Los Angeles, CA, USA", lat: 34.0522, lng: -118.2437 },
    { name: "London, UK", lat: 51.5074, lng: -0.1278 },
    { name: "Paris, France", lat: 48.8566, lng: 2.3522 },
    { name: "Tokyo, Japan", lat: 35.6762, lng: 139.6503 },
    { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093 },
    { name: "Berlin, Germany", lat: 52.5200, lng: 13.4050 },
    { name: "Rome, Italy", lat: 41.9028, lng: 12.4964 },
    { name: "Madrid, Spain", lat: 40.4168, lng: -3.7038 },
    { name: "Amsterdam, Netherlands", lat: 52.3676, lng: 4.9041 },
    { name: "Barcelona, Spain", lat: 41.3851, lng: 2.1734 },
    { name: "Vienna, Austria", lat: 48.2082, lng: 16.3738 },
    { name: "Prague, Czech Republic", lat: 50.0755, lng: 14.4378 },
    { name: "Budapest, Hungary", lat: 47.4979, lng: 19.0402 },
    { name: "Warsaw, Poland", lat: 52.2297, lng: 21.0122 },
    { name: "Stockholm, Sweden", lat: 59.3293, lng: 18.0686 },
    { name: "Copenhagen, Denmark", lat: 55.6761, lng: 12.5683 },
    { name: "Oslo, Norway", lat: 59.9139, lng: 10.7522 },
    { name: "Helsinki, Finland", lat: 60.1699, lng: 24.9384 },
    { name: "Moscow, Russia", lat: 55.7558, lng: 37.6176 },

    // Indian Cities
    { name: "New Delhi, India", lat: 28.6139, lng: 77.2090 },
    { name: "Mumbai, India", lat: 19.0760, lng: 72.8777 },
    { name: "Bengaluru, India", lat: 12.9716, lng: 77.5946 },
    { name: "Chennai, India", lat: 13.0827, lng: 80.2707 },
    { name: "Kolkata, India", lat: 22.5726, lng: 88.3639 },
    { name: "Hyderabad, India", lat: 17.3850, lng: 78.4867 },
    { name: "Ahmedabad, India", lat: 23.0225, lng: 72.5714 },
    { name: "Jaipur, India", lat: 26.9124, lng: 75.7873 },
    { name: "Goa, India", lat: 15.2993, lng: 74.1240 },
    { name: "Varanasi, India", lat: 25.3176, lng: 82.9739 },
    { name: "Lucknow, India", lat: 26.8467, lng: 80.9462 },
    { name: "Pune, India", lat: 18.5204, lng: 73.8567 },
    { name: "Thiruvananthapuram, India", lat: 8.5241, lng: 76.9366 },
    { name: "Kochi, India", lat: 9.9312, lng: 76.2673 },
    { name: "Shimla, India", lat: 31.1048, lng: 77.1734 },
    { name: "Darjeeling, India", lat: 27.0410, lng: 88.2663 },
    { name: "Leh, India", lat: 34.1526, lng: 77.5770 },
    { name: "Rishikesh, India", lat: 30.0869, lng: 78.2676 },
    { name: "Udaipur, India", lat: 24.5854, lng: 73.7125 },
    { name: "Mysuru, India", lat: 12.2958, lng: 76.6394 },

    // Kerala Places
    { name: "Alleppey, India", lat: 9.4981, lng: 76.3388 },
    { name: "Munnar, India", lat: 10.0889, lng: 77.0595 },
    { name: "Kozhikode, India", lat: 11.2588, lng: 75.7804 },
    { name: "Wayanad, India", lat: 11.6854, lng: 76.1310 },
    { name: "Varkala, India", lat: 8.7379, lng: 76.7163 },
    { name: "Thrissur, India", lat: 10.5276, lng: 76.2144 },
    { name: "Guruvayur, India", lat: 10.5943, lng: 76.0410 },
    { name: "Kottayam, India", lat: 9.5916, lng: 76.5222 },
    { name: "Vagamon, India", lat: 9.6853, lng: 76.9056 },
    { name: "Kannur, India", lat: 11.8745, lng: 75.3704 },
    { name: "Bekal Fort, India", lat: 12.3879, lng: 75.0340 },
    { name: "Palakkad, India", lat: 10.7867, lng: 76.6548 },
    { name: "Silent Valley, India", lat: 11.0640, lng: 76.4257 },
    { name: "Idukki, India", lat: 9.8498, lng: 76.9685 },
    { name: "Thekkady, India", lat: 9.6031, lng: 77.1622 },
    { name: "Athirappilly, India", lat: 10.2851, lng: 76.5698 },
    { name: "Ponmudi, India", lat: 8.7564, lng: 77.1164 },
    { name: "Periyar, India", lat: 9.5386, lng: 77.2023 },
    { name: "Malampuzha, India", lat: 10.8145, lng: 76.7139 },
    { name: "Vadakkunnathan Temple, Thrissur", lat: 10.5207, lng: 76.2140 },
    { name: "Peechi Dam, Thrissur", lat: 10.5597, lng: 76.3351 },
    { name: "Fort Kochi, Kochi", lat: 9.9667, lng: 76.2413 },
    { name: "Mattancherry, Kochi", lat: 9.9677, lng: 76.2493 },
    { name: "Marine Drive, Kochi", lat: 9.9714, lng: 76.2862 },
    { name: "Mala, India", lat: 10.3895, lng: 76.2324 },
    { name: "Kodakara, India", lat: 10.3566, lng: 76.3173 },
    { name: "Puliparakunnu, India", lat: 9.9719, lng: 76.2850 },
    { name: "Sahrdaya College of Advanced Studies, Kodakkara", lat: 10.3206, lng: 76.3055 },
    { name: "Kalamassery TinkerSpace, Kalamassery", lat: 10.0417, lng: 76.3064 }
];

        
        this.conversionFactors = {
            chicken: { factor: 0.3, unit: 'chicken steps', emoji: '🐓', speed: '15 km/h' },
            snail: { factor: 0.02, unit: 'snail wiggles', emoji: '🐌', speed: '0.03 mph' },
            rat: { factor: 0.15, unit: 'rat tail flicks', emoji: '🐀', speed: '8 km/h' },
            paddle: { factor: 1.5, unit: 'paddle strokes', emoji: '🚣', speed: '5 km/h' },
            flying: { factor: 2.0, unit: 'wing flaps', emoji: '🪽', speed: '50 km/h' },
            underground: { factor: 0.5, unit: 'mole digs', emoji: '🦦', speed: '15 ft/h' }
        };
        
        this.funFacts = {
            chicken: [
                "Did you know? A chicken can run up to 15 km/h, but probably won't!",
                "Chickens can remember over 100 different faces of people or animals!",
                "The longest recorded flight of a chicken is 13 seconds!",
                "Chickens have better color vision than humans!",
                "A chicken's heart beats 280-315 times per minute!"
            ],
            snail: [
                "Fun fact: Garden snails can sleep for up to 3 years!",
                "A snail can have up to 25,000 teeth!",
                "Snails are hermaphrodites - they have both male and female organs!",
                "The fastest snail ever recorded moved at 0.03 mph!",
                "Snails can climb vertical surfaces and even hang upside down!"
            ],
            rat: [
                "Rats laugh when tickled, but at a frequency too high for humans to hear!",
                "A rat can fall from a 5-story building and walk away uninjured!",
                "Rats are excellent swimmers and can tread water for 3 days!",
                "Rats have excellent memories and rarely forget a path they've traveled!",
                "A rat's teeth never stop growing throughout their entire life!"
            ],
            paddle: [
                "Paddle boats were invented in 1810 and were originally called 'pedal boats'!",
                "The world record for fastest pedal boat is 18.5 mph!",
                "Paddle boating burns about 250 calories per hour!",
                "The largest paddle boat ever built could hold 6,000 passengers!",
                "Paddle boats are also called swan boats in some countries!"
            ],
            flying: [
                "Hummingbirds can flap their wings up to 80 times per second!",
                "Arctic terns migrate roughly 44,000 miles annually!",
                "Peregrine falcons can dive at speeds over 240 mph!",
                "Albatrosses can fly for hours without flapping their wings!",
                "The wandering albatross has the largest wingspan of any bird at 11 feet!"
            ],
            underground: [
                "Moles can dig tunnels at a rate of 15 feet per hour!",
                "A mole's tunnel system can extend over 2,000 feet!",
                "Moles eat 70-100% of their body weight daily!",
                "Moles have been around for 54 million years!",
                "A mole can dig a tunnel 300 feet long in just one night!"
            ]
        };
        
        this.init();
    }
    
    init() {
        this.initMap();
        this.bindEvents();
        console.log('Alternative Distance Calculator initialized!');
    }
    
    initMap() {
        this.map = L.map('map').setView([40.7128, -74.0060], 2);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);
    }
    
    bindEvents() {
        const fromInput = document.getElementById('from-location');
        const toInput = document.getElementById('to-location');
        const calculateBtn = document.getElementById('calculate-btn');
        
        fromInput.addEventListener('input', (e) => this.handleLocationInput(e, 'from'));
        toInput.addEventListener('input', (e) => this.handleLocationInput(e, 'to'));
        calculateBtn.addEventListener('click', () => this.calculateDistance());
        
        // Handle suggestion clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('suggestion-item')) {
                this.selectSuggestion(e.target);
            }
        });
        
        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.input-group')) {
                this.hideAllSuggestions();
            }
        });
    }
    
    handleLocationInput(event, type) {
        const query = event.target.value.toLowerCase();
        if (query.length < 2) {
            this.hideSuggestions(type);
            return;
        }
        
        // Filter mock locations
        const suggestions = this.mockLocations.filter(location => 
            location.name.toLowerCase().includes(query)
        ).slice(0, 5);
        
        this.showSuggestions(suggestions, type);
    }
    
    showSuggestions(suggestions, type) {
        const suggestionsContainer = document.getElementById(`${type}-suggestions`);
        suggestionsContainer.innerHTML = '';
        
        suggestions.forEach(suggestion => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.textContent = suggestion.name;
            item.dataset.lat = suggestion.lat;
            item.dataset.lng = suggestion.lng;
            item.dataset.type = type;
            item.dataset.name = suggestion.name;
            suggestionsContainer.appendChild(item);
        });
        
        suggestionsContainer.style.display = suggestions.length > 0 ? 'block' : 'none';
    }
    
    hideSuggestions(type) {
        const suggestionsContainer = document.getElementById(`${type}-suggestions`);
        suggestionsContainer.style.display = 'none';
    }
    
    hideAllSuggestions() {
        this.hideSuggestions('from');
        this.hideSuggestions('to');
    }
    
    selectSuggestion(item) {
        const type = item.dataset.type;
        const lat = parseFloat(item.dataset.lat);
        const lng = parseFloat(item.dataset.lng);
        const name = item.dataset.name;
        
        document.getElementById(`${type}-location`).value = name;
        this.hideSuggestions(type);
        
        if (type === 'from') {
            this.fromCoords = { lat, lng, name };
        } else {
            this.toCoords = { lat, lng, name };
        }
        
        console.log(`Selected ${type}:`, { lat, lng, name });
        this.updateMapVisualization();
    }
    
    updateMapVisualization() {
        if (this.fromCoords && this.toCoords) {
            console.log('Would update map with route from', this.fromCoords.name, 'to', this.toCoords.name);
            // In production, this would update the Google Map with markers and route
        }
    }
    
    calculateDistance() {
        if (!this.fromCoords || !this.toCoords) {
            alert('🚨 Please select both starting and destination locations!');
            return;
        }
        
        this.showLoading(true);
        
        // Simulate API call delay
        setTimeout(() => {
            const distance = this.getDistanceFromLatLng(
                this.fromCoords.lat, this.fromCoords.lng,
                this.toCoords.lat, this.toCoords.lng
            );
            
            const travelMode = document.getElementById('travel-mode').value;
            const conversion = this.conversionFactors[travelMode];
            
            const alternativeDistance = Math.round((distance * 1000) / conversion.factor);
            
            this.displayResult(alternativeDistance, conversion, travelMode, distance);
            this.triggerAnimation(conversion.emoji);
            this.showLoading(false);
        }, 1500);
    }
    
    showLoading(show) {
        const loadingContainer = document.getElementById('loading-container');
        const calculateBtn = document.getElementById('calculate-btn');
        
        if (show) {
            loadingContainer.style.display = 'block';
            calculateBtn.disabled = true;
            calculateBtn.textContent = 'Calculating...';
        } else {
            loadingContainer.style.display = 'none';
            calculateBtn.disabled = false;
            calculateBtn.textContent = '✨ Calculate Ridiculous Distance! ✨';
        }
    }
    
    getDistanceFromLatLng(lat1, lng1, lat2, lng2) {
        const R = 6371; // Radius of the earth in km
        const dLat = this.deg2rad(lat2 - lat1);
        const dLng = this.deg2rad(lng2 - lng1);
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
            Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const d = R * c; // Distance in km
        return d;
    }
    
    deg2rad(deg) {
        return deg * (Math.PI/180);
    }
    
    displayResult(alternativeDistance, conversion, travelMode, actualDistance) {
        const resultsSection = document.getElementById('results-section');
        const distanceDisplay = document.getElementById('distance-display');
        const funFactElement = document.getElementById('fun-fact');
        const journeyStats = document.getElementById('journey-stats');
        
        distanceDisplay.innerHTML = `
            ${conversion.emoji} ${alternativeDistance.toLocaleString()} ${conversion.unit}
            <br><small style="font-size: 0.6em; color: #7f8c8d;">
                
            </small>
        `;
        
        const randomFact = this.funFacts[travelMode][
            Math.floor(Math.random() * this.funFacts[travelMode].length)
        ];
        funFactElement.textContent = randomFact;
        
        // Calculate additional stats
        const timeHours = this.calculateTravelTime(actualDistance, travelMode);
        const calories = this.calculateCalories(actualDistance, travelMode);
        
        journeyStats.innerHTML = `
            <div class="stat-item">
                <div class="stat-value">${timeHours}</div>
                <div class="stat-label">Estimated Time</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${calories}</div>
                <div class="stat-label">Calories Burned</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${conversion.speed}</div>
                <div class="stat-label">Max Speed</div>
            </div>
        `;
        
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    calculateTravelTime(distance, mode) {
        const speeds = {
            chicken: 15, // km/h
            snail: 0.048, // km/h (0.03 mph)
            rat: 8, // km/h
            paddle: 5, // km/h
            flying: 50, // km/h
            underground: 0.024 // km/h (15 ft/h)
        };
        
        const hours = distance / speeds[mode];
        
        if (hours < 1) {
            return `${Math.round(hours * 60)} min`;
        } else if (hours < 24) {
            return `${hours.toFixed(1)} hours`;
        } else {
            const days = Math.floor(hours / 24);
            const remainingHours = Math.round(hours % 24);
            return `${days}d ${remainingHours}h`;
        }
    }
    
    calculateCalories(distance, mode) {
        const caloriesPerKm = {
            chicken: 60, // walking
            snail: 5, // very slow movement
            rat: 40, // moderate activity
            paddle: 45, // paddling
            flying: 80, // flying effort
            underground: 70 // digging effort
        };
        
        const totalCalories = Math.round(distance * caloriesPerKm[mode]);
        return totalCalories.toLocaleString();
    }
    
    triggerAnimation(emoji) {
        const floatingEmoji = document.getElementById('floating-emoji');
        floatingEmoji.textContent = emoji;
        floatingEmoji.style.top = Math.random() * 50 + 20 + '%';
        floatingEmoji.classList.remove('animate');
        
        setTimeout(() => {
            floatingEmoji.classList.add('animate');
        }, 100);
        
        // Create multiple floating emojis
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                this.createFloatingEmoji(emoji);
            }, i * 800);
        }
    }
    
    createFloatingEmoji(emoji) {
        const container = document.querySelector('.animations-container');
        const floatingEmoji = document.createElement('div');
        floatingEmoji.className = 'floating-emoji';
        floatingEmoji.textContent = emoji;
        floatingEmoji.style.top = Math.random() * 60 + 20 + '%';
        floatingEmoji.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
        
        container.appendChild(floatingEmoji);
        
        setTimeout(() => {
            floatingEmoji.classList.add('animate');
        }, 100);
        
        setTimeout(() => {
            container.removeChild(floatingEmoji);
        }, 4000);
    }
}

// Initialize the calculator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing calculator...');
    new AlternativeDistanceCalculator();
});

// Add some fun console messages
console.log('🐓 Welcome to the Alternative Distance Calculator! 🐌');
console.log('Ready to measure distances in the most ridiculous units possible!');
