import { MetadataRoute } from "next";
import { blogPosts } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://neumog.tech";

    // Static routes for main pages
    const routes = [
        "",
        "/how-it-works",
        "/services",
        "/experts",
        "/experts/apply",
        "/blog",
        "/start-project",
        "/contact",
        "/press",
        "/case-studies",
        "/rlhf-waitlist",
        "/legal/privacy",
        "/legal/terms",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic blog posts from CMS/content file
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}${post.href}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    return [...routes, ...posts];
}
