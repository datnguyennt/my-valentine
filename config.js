// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Nhat Anh",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Em có thích anh không?",                                    // First interaction
            yesBtn: "Có",                                             // Text for "Yes" button
            noBtn: "Không",                                               // Text for "No" button
            secretAnswer: "Không thích, nhưng mà yêuuuu! ❤️"           // Secret hover message
        },
        second: {
            text: "Em yêu anh đến mức nào?",                          // For the love meter
            startText: "Nhiều như thế này!",                                   // Text before the percentage
            nextBtn: "Tiếp theo ❤️"                                         // Text for the next button
        },
        third: {
            text: "Mặc dù mình đang tạm yêu xa. Nhưng mà, em có muốn là Valentine của anh không? 🌹", // The big question!
            yesBtn: "Có!",                                             // Text for "Yes" button
            noBtn: "Không"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Yêu nhiều cỡ đó luôn hà, ghê z?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "Yêu tới vô cực và hơn thế nữa! 🚀💝",              // Shows when they go past 1000%
        normal: "Và hơn thế nữa! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Hẹ hẹ, vui quá trời luôn",
        message: "Lần gặp tới, anh sẽ ôm em thật chặt, trao cho em nụ hôn ngọt ngào nhất! 💋",
        emojis: "🎁💖🤗💝💋❤️💕",  // These will bounce around
        image: "./IMG_0069.jpg"     // Image to display (use .jpg or .png, not .heic)
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "./music.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 