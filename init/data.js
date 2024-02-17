const sampleListings = [
    {
      "title": "Luxury Beachfront Villa",
      "description": "Escape to paradise in this stunning beachfront villa. Experience ultimate luxury and relaxation with breathtaking ocean views.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 50000,
      "location": "Sunny Beach",
      "country": "Maldives"
    },
    {
      "title": "Seaside Resort Retreat",
      "description": "A perfect blend of comfort and nature awaits you at our seaside resort. Enjoy spacious rooms and direct access to a pristine beach.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1502208327471-d5dde4d78995?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 30000,
      "location": "Golden Sands",
      "country": "Spain"
    },
    {
      "title": "Mountain View Lodge",
      "description": "Nestled in the mountains, our lodge offers a tranquil escape. Enjoy cozy accommodations with stunning mountain views.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 20000,
      "location": "Majestic Peaks",
      "country": "Switzerland"
    },
    {
      "title": "Tropical Paradise Hotel",
      "description": "Immerse yourself in tropical bliss at our paradise hotel. Discover lush gardens, sparkling pools, and a serene atmosphere.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1618245318763-a15156d6b23c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 40000,
      "location": "Palm Bay",
      "country": "Thailand"
    },
    {
      "title": "Historic City Center Inn",
      "description": "Step back in time at our historic inn located in the heart of the city. Explore the charm of cobblestone streets and local landmarks.",
      "image": {
        "filename": "listingimage",
        "url": "https://plus.unsplash.com/premium_photo-1673380327509-fda861d7817e?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 15000,
      "location": "Old Town",
      "country": "Italy"
    },
    {
      "title": "Eco-Friendly Beach Bungalow",
      "description": "Experience sustainable living in our eco-friendly beach bungalow. Enjoy the serene environment and eco-conscious amenities.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 25000,
      "location": "Green Cove",
      "country": "Costa Rica"
    },
    {
      "title": "Charming Lakeside Cabin",
      "description": "Escape to a cozy lakeside cabin surrounded by nature. Perfect for a tranquil retreat with fishing and hiking opportunities.",
      "image": {
        "filename": "listingimage",
        "url": "https://plus.unsplash.com/premium_photo-1663091687045-d108c7fb83e4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 18000,
      "location": "Tranquil Waters",
      "country": "Canada"
    },
    {
      "title": "Secluded Island Resort",
      "description": "Indulge in luxury at our secluded island resort. Experience exclusive amenities and a private beach for the ultimate getaway.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1605538108568-7f0d77a214c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kJTIwcmVzb3J0fGVufDB8fDB8fHww"
      },
      "price": 700000,
      "location": "Paradise Island",
      "country": "Fiji"
    },
    {
      "title": "Historic Castle Retreat",
      "description": "Stay in a historic castle turned into a luxurious retreat. Experience the charm of medieval architecture with modern comforts.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1649320236150-8024a88ff878?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 550000,
      "location": "Mystic Highlands",
      "country": "Scotland"
    },
    {
      "title": "Desert Oasis Hotel",
      "description": "Discover luxury in the midst of the desert at our oasis hotel. Enjoy spa treatments and starry nights in a unique setting.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1569359271440-30c84eb4ab1f?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 3000,
      "location": "Golden Dunes",
      "country": "United Arab Emirates"
    },
    {
      "title": "Ski Chalet Getaway",
      "description": "Escape to a charming ski chalet for a winter wonderland experience. Cozy up by the fireplace after a day on the slopes.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1548873902-8b69fb85030a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 40000,
      "location": "Snowy Peaks",
      "country": "Switzerland"
    },
    {
      "title": "Modern Urban Loft",
      "description": "Stay in a stylish urban loft in the heart of the city. Explore trendy neighborhoods and enjoy a vibrant city atmosphere.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 180000,
      "location": "City Center",
      "country": "USA"
    },
    {
      "title": "Cliffside Retreat",
      "description": "Perched on a cliff, our retreat offers breathtaking views of the ocean. Experience serenity and luxury in a secluded setting.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1674070883990-284bf61e129d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 6000000,
      "location": "Azure Cliffs",
      "country": "Greece"
    },
    {
      "title": "Rustic Vineyard Cottage",
      "description": "Experience the charm of a rustic cottage surrounded by vineyards. Enjoy wine tastings and scenic views in a tranquil setting.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1593006525478-f6997e240225?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 2500,
      "location": "Wine Country",
      "country": "France"
    },
    {
      "title": "Jungle Treehouse Retreat",
      "description": "Immerse yourself in nature with a stay in a luxurious jungle treehouse. Experience wildlife and canopy views in comfort.",
      "image": {
        "filename": "listingimage",
        "url": "https://plus.unsplash.com/premium_photo-1685305676839-26406ddbe4de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZSUyMGhvdXNlfGVufDB8fDB8fHww"
      },
      "price": 3500000,
      "location": "Tropical Rainforest",
      "country": "Brazil"
    }
];

module.exports = {data:sampleListings};