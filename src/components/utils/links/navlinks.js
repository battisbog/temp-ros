import { Contact2Icon, IdCardIcon, UserCog, UserCog2Icon } from "lucide-react";

export const navLinks = [
  {
    icon: Contact2Icon,
    label: "Dashboard",
    key: "dashboard",
    href: "/user/dashboard",
  },
  {
    icon: UserCog2Icon,
    label: "Pricing",
    key: "package-pricing",
    href: "/user/package-pricing",
  },
  {
    icon: IdCardIcon,
    label: "Add Payment",
    key: "add-card-info",
    href: "/user/add-card-info",
  },
  {
    icon: UserCog,
    label: "Settings",
    key: "profile-settings",
    href: "/user/profile-settings",
  },
];
