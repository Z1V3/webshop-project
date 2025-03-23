import { auth } from "auth";
import { loginAction, logoutAction } from "@/lib/authActions";
import { DesktopHeader } from "./DesktopHeader";
import { PhoneHeader } from "./PhoneHeader";

export default async function Header() {
  const session = await auth(); // Fetch session data on the server

  return (
    <div>
      <PhoneHeader className="md:hidden" />
      <DesktopHeader
        session={session}
        loginAction={loginAction}
        logoutAction={logoutAction}
        className="hidden md:flex"
      />
    </div>
  );
}
