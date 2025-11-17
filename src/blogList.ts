 export const blogList = [
   {
      "id": 1,
      "title": "How I Built My First SaaS in 30 Days as a Nigerian Developer",
      "slug": "how-i-built-my-first-saas-in-30-days",
      "description": "From idea to first $1,200 in revenue using no-code tools and Flutter – all from Lagos with unstable electricity.",
      "excerpt": "Zero funding, PHCN stress, dollar hustle – how I launched a profitable SaaS while NEPA took light 10 times a day.",
      "author": {
        "name": "Chinedu Okeke",
        "bio": "Full-stack dev & indie maker from Lagos. Building the future one commit at a time.",
        "avatar": "/images/author/ai-author.jpg",
        "twitter": "@chinedu_okeke"
      },
      "publishedDate": "2025-11-10",
      "readTime": "8 min read",
      "category": "Entrepreneurship",
      "tags": ["SaaS", "Indie Hacking", "No-code", "Nigeria"],
      "featuredImage": "/images/blog/sas.jpg",
      "featured": true
    },
    {
      "id": 2,
      "title": "Mastering Tailwind CSS in 2025 – Tips Nigerian Devs Actually Use",
      "slug": "mastering-tailwind-css-2025",
      "description": "The Tailwind tricks that save you hours when you're coding with 2G network and Gen at 11pm.",
      "excerpt": "Dark mode, custom themes, mobile-first magic – everything I wish I knew when I started.",
      "author": {
        "name": "Aisha Yusuf",
        "bio": "Frontend queen from Kano. Currently building the most beautiful UIs in Naija.",
        "avatar": "/images/author/author.jpg",
        "twitter": "@aishayusuf_"
      },
      "publishedDate": "2025-10-28",
      "readTime": "12 min read",
      "category": "Web Development",
      "tags": ["Tailwind CSS", "Frontend", "Nigeria Tech"],
      "featuredImage": "/images/blog/tailwind.jpg",
      "featured": false
    },
    {
      "id": 3,
      "title": "Why I Switched from React to SvelteKit in 2025 (And Never Looked Back)",
      "slug": "why-i-moved-from-react-to-sveltekit-2025",
      "description": "Real numbers after migrating a 100k-user app from Next.js to SvelteKit – smaller bundle, faster load in Nigeria.",
      "excerpt": "My Lighthouse score went from 68 to 99. Load time on MTN 3G dropped from 12s to 3.8s.",
      "author": {
        "name": "Tunde Adebayo",
        "bio": "Svelte Nigeria community lead. Addicted to compiler magic and jollof rice.",
        "avatar": "/images/author/author.jpg",
        "twitter": "@tunde_js"
      },
      "publishedDate": "2025-10-15",
      "readTime": "10 min read",
      "category": "Web Development",
      "tags": ["SvelteKit", "Performance", "Framework Wars"],
      "featuredImage": "/images/blog/switch.jpg",
      "featured": true
    },
    {
      "id": 4,
      "title": "10 Side Hustles That Pay in Dollars From Nigeria (2025 Edition)",
      "slug": "10-dollar-side-hustles-nigeria-2025",
      "description": "Tested and working side hustles that pay $500–$5,000/month even with bad network.",
      "excerpt": "Copywriting, UI design, micro-SaaS, Twitter growth – the ones that actually work right now.",
      "author": {
        "name": "Fatima Bello",
        "bio": "Made my first $100k online from Abuja. Now teaching others how to escape 9-5.",
        "avatar": "/images/author/ai-author.jpg",
        "twitter": "@fatimabello_"
      },
      "publishedDate": "2025-09-22",
      "readTime": "15 min read",
      "category": "Money & Business",
      "tags": ["Side Hustle", "Remote Work", "Dollar Income"],
      "featuredImage": "/images/blog/hustle.jpg",
      "featured": false
    },
    {
      "id": 5,
      "title": "Building Mobile Apps with Flutter in Nigeria – My 2025 Stack",
      "slug": "flutter-mobile-app-development-nigeria-2025",
      "description": "The exact tools and workflow I use to ship Android/iOS apps from Lagos with zero downtime.",
      "excerpt": "Firebase, RevenueCat, Codemagic, Supabase – everything that works when you're offline half the day.",
      "author": {
        "name": "Kemi Adeyemi",
        "bio": "Flutter GDE Nigeria. Building the next big fintech app from Ibadan.",
        "avatar": "/images/author/author.jpg",
        "twitter": "@kemi_flutter"
      },
      "publishedDate": "2025-11-05",
      "readTime": "11 min read",
      "category": "Mobile Development",
      "tags": ["Flutter", "Mobile", "Fintech"],
      "featuredImage": "/images/blog/mobile.jpg",
      "featured": true
    }
  ]


  // types/blog.ts  or  types.d.ts
export interface Author {
  name: string;
  bio: string;
  avatar: string;                    // path or URL to avatar image
  twitter?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  website?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  author: Author;
  publishedDate: string;             // ISO date string, e.g., "2025-11-10"
  readTime: string;                  // e.g., "8 min read"
  category: string;
  tags: string[];
  featuredImage: string;             // path or URL
  featured?: boolean;
}

export interface BlogListData {
  blogList: BlogPost[];
  meta: {
    totalBlogs: number;
    lastUpdated: string;             // ISO date string
    siteName: string;
    siteUrl: string;
  };
}