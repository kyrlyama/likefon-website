import type { Service, ServiceGroupId } from "@/types/service";

// Order of the groups on the page.
export const serviceGroupTitles: Record<ServiceGroupId, string> = {
  setup: "Setup and data transfer",
  memory: "Memory cleanup and files",
  cleaning: "Cleaning and care",
  software: "Diagnostics and software",
  repairs: "Repairs and installation",
};

export const services: Service[] = [
  // Setup and data transfer
  {
    id: "data-transfer",
    group: "setup",
    name: "Data transfer from an old phone to a new one",
    price: 15,
  },
  {
    id: "new-phone-setup",
    group: "setup",
    name: "First-time setup of a new phone",
    price: 5,
  },
  {
    id: "setup-after-reset",
    group: "setup",
    name: "Phone setup after a factory reset",
    price: 5,
  },
  {
    id: "google-account",
    group: "setup",
    name: "Creating a Google account",
    price: 5,
  },
  { id: "apple-id", group: "setup", name: "Apple ID setup", price: 5 },
  { id: "email-setup", group: "setup", name: "Email setup", price: 3 },
  {
    id: "install-one-app",
    group: "setup",
    name: "Installing one app",
    price: 2,
  },
  {
    id: "install-several-apps",
    group: "setup",
    name: "Installing and setting up several apps",
    price: 5,
  },
  {
    id: "wifi-bluetooth",
    group: "setup",
    name: "Wi-Fi and Bluetooth setup",
    price: 2,
  },
  {
    id: "mobile-internet",
    group: "setup",
    name: "Mobile internet setup",
    price: 3,
  },
  {
    id: "sim-contacts",
    group: "setup",
    name: "Copying contacts to or from a SIM card",
    price: 3,
  },

  // Memory cleanup and files
  {
    id: "free-up-memory",
    group: "memory",
    name: "Freeing up memory without deleting important data",
    price: 5,
  },
  {
    id: "copy-photos",
    group: "memory",
    name: "Copying photos and videos to a computer or external drive",
    price: 5,
  },
  { id: "data-backup", group: "memory", name: "Data backup", price: 5 },
  { id: "factory-reset", group: "memory", name: "Factory reset", price: 5 },
  {
    id: "prepare-for-sale",
    group: "memory",
    name: "Preparing a phone for sale: signing out of accounts and factory reset",
    price: 8,
  },

  // Cleaning and care
  {
    id: "charging-port",
    group: "cleaning",
    name: "Charging port cleaning",
    price: 5,
  },
  {
    id: "speaker-microphone",
    group: "cleaning",
    name: "Speaker and microphone cleaning",
    price: 5,
  },
  {
    id: "exterior-cleaning",
    group: "cleaning",
    name: "Deep cleaning of the phone's exterior",
    price: 5,
  },

  // Diagnostics and software
  {
    id: "os-update",
    group: "software",
    name: "Operating system update",
    price: 5,
  },
  { id: "app-updates", group: "software", name: "App updates", price: 3 },
  {
    id: "remove-apps",
    group: "software",
    name: "Removing unnecessary apps",
    price: 3,
  },
  {
    id: "account-recovery",
    group: "software",
    name: "Help with account recovery",
    price: 5,
  },
  {
    id: "cloud-backup",
    group: "software",
    name: "iCloud or Google backup setup",
    price: 5,
  },

  // Repairs and installation (from Figma, not in the price list: confirm with the client)
  {
    id: "glass-installation",
    group: "repairs",
    name: "Screen protector installation",
    price: 0,
  },
  { id: "screen-repair", group: "repairs", name: "Phone screen repair" },
  {
    id: "battery-replacement",
    group: "repairs",
    name: "Phone battery replacement",
  },
];
