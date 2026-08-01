import {
  Activity,
  BatteryCharging,
  Bot,
  Building2,
  Cable,
  Cpu,
  Factory,
  HeartPulse,
  Home,
  Network,
  Radio,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { NavGroup } from "@/types/content";

export const siteConfig = {
  name: "Lyntek Electronics",
  legalName: "Lyntek Electronics Co., Ltd.",
  domain: "lyntekelectronics.com",
  url: "https://lyntekelectronics.com",
  description:
    "Taiwan-based electronics engineering company developing embedded systems, industrial IoT, smart home controls, and OEM/ODM solutions.",
  email: "hello@lyntekelectronics.com",
  salesEmail: "sales@lyntekelectronics.com",
  careersEmail: "careers@lyntekelectronics.com",
  headquarters: "Taipei, Taiwan",
} as const;

export const navigation: NavGroup[] = [
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About Lyntek", href: "/about", description: "Our engineering culture and strategy" },
      { label: "Vision & Mission", href: "/vision", description: "The future we are building" },
      { label: "Quality", href: "/quality", description: "Reliability by design" },
      { label: "Global Presence", href: "/global-presence", description: "Taiwan headquarters and regional network" },
      { label: "Careers", href: "/careers", description: "Build meaningful technology with us" },
    ],
  },
  {
    label: "Solutions",
    href: "/products",
    items: [
      { label: "Products", href: "/products", description: "Industrial and connected electronics" },
      { label: "Technologies", href: "/technologies", description: "Platforms, protocols, and engineering" },
      { label: "Industries", href: "/industries", description: "Solutions designed around real operations" },
      { label: "Manufacturing", href: "/manufacturing", description: "From prototype to production" },
    ],
  },
  {
    label: "Resources",
    href: "/news",
    items: [
      { label: "News & Insights", href: "/news", description: "Company and engineering perspectives" },
      { label: "Downloads", href: "/downloads", description: "Product briefs and company resources" },
      { label: "Technology Partnership", href: "/partnership", description: "A focused regional manufacturing network" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const technologies = [
  "Embedded Linux",
  "RTOS",
  "MCU Design",
  "ESP32",
  "STM32",
  "NXP",
  "Power Electronics",
  "Edge AI",
  "Wi-Fi",
  "Bluetooth LE",
  "Matter",
  "Thread",
  "Zigbee",
  "RS485",
  "CAN",
  "Modbus",
  "MQTT",
  "Cloud",
  "Secure OTA",
] as const;

export const industries = [
  { name: "Industrial Automation", description: "Deterministic control, edge connectivity, and machine intelligence.", icon: Factory },
  { name: "Energy", description: "Measurement, conversion, and connected energy management.", icon: Zap },
  { name: "Electric Mobility", description: "Embedded controls and power subsystems for evolving mobility.", icon: BatteryCharging },
  { name: "Healthcare", description: "Reliable electronics platforms for non-critical connected equipment.", icon: HeartPulse },
  { name: "Smart Buildings", description: "Interoperable controls for efficient, responsive spaces.", icon: Building2 },
  { name: "Smart Home", description: "Elegant control products built around open ecosystems.", icon: Home },
  { name: "OEM / ODM", description: "Engineering partnerships from specification to lifecycle support.", icon: Cpu },
  { name: "Consumer Electronics", description: "Connected products balancing usability, cost, and scale.", icon: Radio },
  { name: "Infrastructure", description: "Rugged communication and monitoring at the network edge.", icon: Network },
] as const;

export const capabilities = [
  { title: "Embedded systems", description: "Purpose-built MCU and Linux platforms optimized for product constraints.", icon: Cpu },
  { title: "Connectivity", description: "Wireless and wired protocol integration from device to cloud.", icon: Cable },
  { title: "Edge intelligence", description: "Local inference and data processing for responsive systems.", icon: Bot },
  { title: "Power electronics", description: "Efficient conversion, metering, protection, and control.", icon: Zap },
  { title: "Verification", description: "Traceable validation focused on function, stress, and reliability.", icon: ShieldCheck },
  { title: "Lifecycle engineering", description: "Secure updates, diagnostics, and long-term product evolution.", icon: Activity },
] as const;

export { news } from "@/content/news";

export const values = [
  ["Engineering clarity", "We make constraints visible, decisions traceable, and products understandable."],
  ["Useful innovation", "Technology matters when it improves reliability, efficiency, or the user experience."],
  ["Long-term trust", "We design for maintainability, transparent collaboration, and responsible growth."],
  ["Global by design", "Taiwanese engineering discipline paired with an adaptable international network."],
] as const;
