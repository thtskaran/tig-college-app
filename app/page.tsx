import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardCards } from "@/components/dashboard-cards"

export default function HomePage() {
  return (
    <DashboardLayout title="Dashboard">
      <DashboardCards />
    </DashboardLayout>
  )
}
