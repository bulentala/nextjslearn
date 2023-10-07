import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    kind: "youtube#video",

    id: "PjYWpd7xkaM",
    snippet: {
      publishedAt: "2023-07-31T03:59:46Z",
      title: "DENEME",
      description:
        "Discord for any problems/errors/bugs: https://www.codewithantonio.com/discord\nGithub & Live Website: https://www.codewithantonio.com/projects/ai-companion\nClerk Authentication: https://bit.ly/3Kmyytc\nHotpot for AI Character Images: https://hotpot.ai/\nInspiration for the project: https://github.com/a16z-infra/companion-app\n\nIn this comprehensive tutorial, we'll explore the intricate details of building an advanced SaaS AI Companion using Next.js 13. Our AI Companion taps into the power of embeddings and the Pinecone vector database to ensure long-term memory retention, supplemented by the fast caching abilities of the Upstash Redis database. We will also use MySQL and Prisma for storing companions.\n\nHarnessing the revolutionary features of Next.js 13 App Router, our platform will facilitate swift client-side routing, making the user experience seamless and intuitive. Alongside, the integration of Stripe promises a hassle-free subscription system, while Clerk handles user authentication with finesse.\n\nThroughout this tutorial, you'll be exposed to a rich array of web development technologies, including React, Tailwind, and Prisma. Every step is meticulously explained, ensuring even those new to the realm of SaaS development can follow along with ease.\n\nWhether you're an aspiring developer or a seasoned expert, this tutorial holds gems of knowledge that can benefit everyone. Keen to create a state-of-the-art SaaS AI Companion? Grab your developer toolkit, maybe a cup of your favorite brew, and let's redefine the AI-empowered web universe of 2023 with Next.js 13!\n\nTimestamps\n00:00 Intro\n06:07 Environment Setup\n10:31 Folder Setup\n18:07 Clerk Authentication\n31:51 Navbar\n51:43 Sidebar\n01:03:46 Search Filter\n01:16:14 Category Filter\n01:37:12 Companion Creation Form\n02:33:41 Companion Creation API\n02:51:48 Companion List\n03:11:42 Chat Header\n03:40:55 Chat UI\n04:18:38 Memory Service\n04:45:00 Chat API\n05:15:35 Stripe API\n05:49:26 Stripe UI\n06:23:05 Deployment",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/PjYWpd7xkaM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/PjYWpd7xkaM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/PjYWpd7xkaM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/PjYWpd7xkaM/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/PjYWpd7xkaM/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Code With Antonio",
      defaultAudioLanguage: "en",
    },
  });
}
