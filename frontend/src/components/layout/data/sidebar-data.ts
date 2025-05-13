import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
} from "@tabler/icons-react";
import {
  Table,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from "lucide-react";
import { type SidebarData } from "../types";
import { useTranslation } from 'react-i18next';


export const sidebarData = (): SidebarData => {
  const { t } = useTranslation();

  return {
    user: {
      name: "zc",
      email: "zcdev@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "FastAPI React Admin",
        logo: Command,
        plan: "Vite + ShadcnUI",
      },
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
    ],
    navGroups: [
      {
        title: t("general"),
        items: [
          {
            title: t("dashboard"),
            url: "/",
            icon: IconLayoutDashboard,
          },
          {
            title: t("basictable"),
            url: "/basictable",
            icon: Table,
          },
          {
            title: "Tasks",
            url: "/",
            icon: IconChecklist,
          },
          {
            title: "Apps",
            url: "/",
            icon: IconPackages,
          },
          {
            title: "Chats",
            url: "/",
            badge: "3",
            icon: IconMessages,
          },
          {
            title: "Users",
            url: "/",
            icon: IconUsers,
          },
        ],
      },
      {
        title: "Pages",
        items: [
          {
            title: "Auth",
            icon: IconLockAccess,
            items: [
              {
                title: "Sign In",
                url: '/sign-in',
              },
              {
                title: "Sign In (2 Col)",
                url: "/sign-in-2",
              },
              {
                title: "Sign Up",
                url: "/sign-up",
              },
              {
                title: "Forgot Password",
                url: "/forgot-password",
              },
              {
                title: "OTP",
                url: "/otp",
              },
            ],
          },
          {
            title: "Errors",
            icon: IconBug,
            items: [
              {
                title: "Unauthorized",
                url: "/",
                icon: IconLock,
              },
              {
                title: "Forbidden",
                url: "/",
                icon: IconUserOff,
              },
              {
                title: "Not Found",
                url: "/",
                icon: IconError404,
              },
              {
                title: "Internal Server Error",
                url: "/",
                icon: IconServerOff,
              },
              {
                title: "Maintenance Error",
                url: "/",
                icon: IconBarrierBlock,
              },
            ],
          },
        ],
      },
      {
        title: "Other",
        items: [
          {
            title: "Settings",
            icon: IconSettings,
            items: [
              {
                title: "Profile",
                url: "/",
                icon: IconUserCog,
              },
              {
                title: "Account",
                url: "/",
                icon: IconTool,
              },
              {
                title: "Appearance",
                url: "/",
                icon: IconPalette,
              },
              {
                title: "Notifications",
                url: "/",
                icon: IconNotification,
              },
              {
                title: "Display",
                url: "/",
                icon: IconBrowserCheck,
              },
            ],
          },
          {
            title: "Help Center",
            url: "/",
            icon: IconHelp,
          },
        ],
      },
    ],
  }
}


