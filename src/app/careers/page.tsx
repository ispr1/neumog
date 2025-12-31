import { getJobOpenings } from "@/lib/careers-db";
import { CareersList } from "@/components/sections/CareersList";

export const revalidate = 60;

export default async function CareersPage() {
    const jobs = await getJobOpenings();

    return <CareersList initialJobs={jobs} />;
}
