import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in');

  return (
    <main className="flex h-screen w-full font-inter">
      {/* Sidebar */}
      <Sidebar user={loggedIn} />

      <div className="flex flex-col w-full overflow-y-auto"> {/* Ensure this div is scrollable */}
        <div className="root-layout flex items-center justify-between p-4 bg-gray-100">
          <Image src="/icons/bright-path-logo.svg" width={35} height={35} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>

        {/* This is the main content that will scroll if it overflows */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
