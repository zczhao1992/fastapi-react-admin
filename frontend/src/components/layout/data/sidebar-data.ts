import {
  IconBarrierBlock,
  IconBug,
  IconChecklist,
  IconError404,
  // IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  // IconMessages,
  // IconPackages,
  IconServerOff,
  IconSettings,
  IconUserOff,
  // IconUsers,
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
            title: t("tasks"),
            url: "/tasks",
            icon: IconChecklist,
          },
          // {
          //   title: "Apps",
          //   url: "/",
          //   icon: IconPackages,
          // },
          // {
          //   title: "Chats",
          //   url: "/",
          //   badge: "3",
          //   icon: IconMessages,
          // },
          // {
          //   title: "Users",
          //   url: "/",
          //   icon: IconUsers,
          // },
        ],
      },
      {
        title: t("pages"),
        items: [
          {
            title: t("auth"),
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
            title: t("errors"),
            icon: IconBug,
            items: [
              {
                title: "Unauthorized",
                url: "/401",
                icon: IconLock,
              },
              {
                title: "Forbidden",
                url: "/403",
                icon: IconUserOff,
              },
              {
                title: "Not Found",
                url: "/404",
                icon: IconError404,
              },
              {
                title: "Internal Server Error",
                url: "/500",
                icon: IconServerOff,
              },
              {
                title: "Maintenance Error",
                url: "/503",
                icon: IconBarrierBlock,
              },
            ],
          },
        ],
      },
      {
        title: t("other"),
        items: [
          {
            title: t("settings"),
            url: "/settings",
            icon: IconSettings,
            // items: [
            //   {
            //     title: "Profile",
            //     url: "/",
            //     icon: IconUserCog,
            //   },
            //   {
            //     title: "Account",
            //     url: "/",
            //     icon: IconTool,
            //   },
            //   {
            //     title: "Appearance",
            //     url: "/",
            //     icon: IconPalette,
            //   },
            //   {
            //     title: "Notifications",
            //     url: "/",
            //     icon: IconNotification,
            //   },
            //   {
            //     title: "Display",
            //     url: "/",
            //     icon: IconBrowserCheck,
            //   },
            // ],
          },
        ],
      },
    ],
  }
}


