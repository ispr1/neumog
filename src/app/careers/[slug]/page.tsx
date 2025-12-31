import { notFound } from "next/navigation";
import { getJobBySlug } from "@/lib/careers-db";
import { JobPostContent } from "@/components/sections/JobPostContent";

export const revalidate = 60; // Revalidate every minute

export default async function JobPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const job = await getJobBySlug(slug);

    if (!job) {
        return notFound();
    }

    return <JobPostContent job={job} />;
}
