import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper";
import NotFound from "@/components/pages/NotFound";

export default function NotFoundPage() {
  return (
    <ClientOnlyWrapper>
      <NotFound />
    </ClientOnlyWrapper>
  );
}
