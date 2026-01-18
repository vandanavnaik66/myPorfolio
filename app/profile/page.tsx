import type { Metadata } from "next";
import { getProfileApi } from "@/lib/api";
import { ProfileClient } from "@/app/profile/ProfileClient";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const profile = await getProfileApi();
  return <ProfileClient profile={profile} />;
}
