import { getResumeData } from "@/lib/data";
import { PortfolioWrapper } from "@/components/portfolio-wrapper";
import { DetailedView } from "@/components/detailed-view";

/**
 * Main Page Component - Server Component
 * This component runs on the server and fetches data server-side
 * Only the view switching and animations are handled client-side
 */
export default async function Page() {
  // Fetch data on the server
  // This happens during the request, providing fresh data on each visit
  const data = await getResumeData();

  // Return the client wrapper with server-rendered detailed view
  return (
    <PortfolioWrapper
      data={data}
      detailedView={<DetailedView data={data} />}
    />
  );
}
