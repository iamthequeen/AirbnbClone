import katieZaferes from './images/katie-zaferes.png'
import weddingPhotography from './images/wedding-photography.png'
import mountainBike from './images/mountain-bike.png'


const data = [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: katieZaferes,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: weddingPhotography,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: mountainBike,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3
    },
    {
        id: 4,
        title: "Mystery of Magic",
        description: "Join me in the Secrets of Magic Classroom where you will take part in this fully immersive, mind-blowing magic show with everyday objects such as cards, coins & the gold-dust of our times - a roll of toilet paper!",
        price: 27,
        coverImg: "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
        stats: {
            rating: 4.9,
            reviewCount: 113
        },
        location: "Online",
        openSpots: 42
    },
    {
        id: 5,
        title: "Meditate your stress away",
        description: "My intention is to create a shared online meditation space to support one another in cultivating mindfulness, healing, and compassion.",
        price: 45,
        coverImg: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        stats: {
            rating: 4.8,
            reviewCount: 64
        },
        location: "Bulgaria",
        openSpots: 6
    },
    {
        id: 6,
        title: "Make Mexican Street Tacos",
        description: "This online experience offers a unique opportunity to submerge yourself in the authentic Mexican street food culture with a step-by-step taco cooking class!",
        price: 40,
        coverImg: "https://images.unsplash.com/photo-1574782091246-c65ed4510300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        stats: {
            rating: 3.6,
            reviewCount: 40
        },
        location: "Mexico",
        openSpots: 23
    },
    {
        id: 7,
        title: "Murder Mystery Escape Room",
        description: "In this murder mystery escape room game, you will become a group of detectives trying to solve a case that we have prepared. We will connect through zoom in a form of a video conference.",
        price: 14,
        coverImg: "https://images.unsplash.com/photo-1577866906674-06078312b748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        stats: {
            rating: 4.1,
            reviewCount: 120
        },
        location: "Online",
        openSpots: 0
    },
    {
        id: 8,
        title: "Cultural journey around Ukraine",
        description: "Our virtual journey through Ukraine will bring us to different regions. We are going to visit our beautiful and majestic capital Kyiv, sunny as well as bright South with Odesa, ancient West with charming Lviv and so picturesque Carpathian mountain region and wine Transcarpathian region.",
        price: 29,
        coverImg: "https://images.unsplash.com/photo-1607867283465-d6792016b481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        stats: {
            rating: 3.8,
            reviewCount: 22
        },
        location: "Ukraine",
        openSpots: 0
    },
    {
        id: 9,
        title: "Harry Potter Magic in Edinburgh Tour",
        description: "Join David, Jule, Eden and Maria as we see the beautiful Scottish city of Edinburgh through the eyes of J.K Rowling. From her poor beginnings to a billionaire author.",
        price: 3,
        coverImg: "https://images.unsplash.com/photo-1514580964530-2f83a8edbeb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        stats: {
            rating: 3.2,
            reviewCount: 64
        },
        location: "Online",
        openSpots: 16
    },
    {
        id: 10,
        title: "The Ultimate Cookie Class",
        description: "We'll dive in to the world of cookies, whizzing through cookie theory, proper technique, and dozens of ideas for variations, as well as FOUR different types of cookies, plus common cookie-making mistakes and how to avoid them - all in one hour class!",
        price: 35,
        coverImg: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        stats: {
            rating: 4.6,
            reviewCount: 102
        },
        location: "Canada",
        openSpots: 4
    },
    {
        id: 11,
        title: "Fun Panda Time With a Nature Guide",
        description: "Join me on a virtual interactive GIANT PANDA experience ,we will take a look at the incredible world of PANDA, probably the 'cutiest' animal on earth and sharing some electrifying panda stories.",
        price: 18,
        coverImg: "https://images.unsplash.com/photo-1625859043880-56acbcb6a6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        stats: {
            rating: 5.0,
            reviewCount: 136
        },
        location: "China",
        openSpots: 20
    },
    {
        id: 12,
        title: "Take professional photos",
        description: "I come in here so I can help you. In 90 minutes I will give you important tips so that you can considerably improve your results on your mobile photos.",
        price: 22,
        coverImg: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        stats: {
            rating: 4.5,
            reviewCount: 53
        },
        location: "Online",
        openSpots: 5
    },
]

export default data;