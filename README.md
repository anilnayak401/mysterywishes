🎉 Mystery Wishes

Mystery Wishes is a fun web-based mobile application that allows users to create a custom mystery wish link and send it to someone special.
The receiver opens the link and experiences a surprise animated wish with messages, videos, and celebration effects.

The sender’s identity remains hidden until the final reveal, making the experience exciting and emotional.


---

🚀 Features

🔗 Custom Mystery Wish Link

Users can generate a unique shareable link for a wish.

Example:

https://mysterywishes.app/wish/abc123


---

🎂 Predefined Wish Types

Users can choose from different occasions:

Happy Birthday

Congratulations

Happy Married Life

Anniversary Wishes

Best of Luck

Get Well Soon

Good Morning

Good Night

Thank You

Sorry

Friendship Wishes

Romantic Wishes

Graduation Wishes

New Job Wishes

Promotion Wishes

Baby Shower Wishes

Festival Wishes

Valentine Wishes

Appreciation Wishes

Custom Wish



---

🎥 Video Support

Users can include a video with their wish.

Supported options:

• YouTube video link
• Google Drive video link
• Custom uploaded video


---

💬 Custom Message

Senders can add a personal message that appears during the animation.

Example:

> "Wishing you a day filled with happiness and a year filled with joy!"




---

🎆 Celebration Effects

To make the surprise more exciting, the app supports animated effects:

• Confetti
• Fireworks
• Balloons
• Sparkles
• Cute animated avatars


---

👤 Anonymous Sender

The sender’s name is hidden until the final moment.

The receiver experiences the surprise first and then sees the sender reveal.


---

📱 Mobile Friendly

The application is designed primarily for mobile devices and works smoothly on:

• Android
• iPhone
• Tablets
• Desktop browsers


---

📷 QR Code Sharing

Users can also share their mystery wish using a QR code.

This makes it easy to send surprises via:

• WhatsApp
• Instagram
• Telegram
• Email
• Printed cards


---

🏗️ Tech Stack

This project is built using modern web technologies.

Frontend

React / Next.js

TailwindCSS

Animation libraries


Backend

Node.js

API routes


Database

Supabase (PostgreSQL)


Automation

n8n workflows (for lead generation & integrations)


Hosting

Antigravity Cloud


Version Control

GitHub



---

🗄️ Database Structure (Supabase)

Main table: wishes

Fields:

Field	Type	Description

id	UUID	Unique wish ID
receiver_name	text	Person receiving wish
sender_name	text	Hidden sender
wish_type	text	Type of wish
message	text	Custom message
video_url	text	Video link
animation_type	text	Selected effect
created_at	timestamp	Creation time



---

⚙️ Installation (Local Development)

Clone the repository

git clone https://github.com/yourusername/mystery-wishes.git

Navigate into project

cd mystery-wishes

Install dependencies

npm install

Run the development server

npm run dev

Open in browser

http://localhost:3000


---

🔑 Environment Variables

Create a .env file and add:

SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

You can find these in:

Supabase → Project Settings → API


---

📂 Project Structure

mystery-wishes
│
├── components
│   ├── WishForm
│   ├── WishReveal
│   ├── AnimationEffects
│
├── pages
│   ├── index.js
│   ├── create.js
│   ├── wish/[id].js
│
├── services
│   ├── supabaseClient.js
│
├── public
│   ├── animations
│   ├── images
│
└── README.md


---

🔄 Workflow

1️⃣ User opens Create Wish page

2️⃣ User fills:

Receiver name

Sender name

Wish type

Custom message

Video link

Animation style


3️⃣ App stores the wish in Supabase database

4️⃣ App generates a unique wish link

5️⃣ Sender shares the link with the receiver

6️⃣ Receiver opens link and sees:

🎉 Animation
🎥 Video
💬 Message
👤 Sender reveal


---

🌟 Future Improvements

Planned upgrades:

• AI generated wish messages
• Voice message wishes
• More animation themes
• Gift card integration
• Scheduled wishes
• Multi-language support
• Dark mode UI


---

🤝 Contributing

Contributions are welcome!

Steps:

1. Fork the repository


2. Create a new branch


3. Commit changes


4. Submit a pull request




---

📜 License

This project is licensed under the MIT License.


---

❤️ Built With Love

Mystery Wishes is designed to make special moments more magical by turning simple wishes into unforgettable surprises.


---
