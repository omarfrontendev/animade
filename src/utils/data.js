import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon8 } from "../icons";

export const WorksData = [
  {
    id: 1,
    icon: <Icon1 />,
    text: `<span>Create stunning images</span> using our AI Image generator & <span>select</span> the <span>designs</span> you like.`,
  },
  {
    id: 2,
    icon: <Icon2 />,
    text: `Mint the designs as <span>NFTs</span> on <span>OpenSea</span> OR select a product for your <span>store</span> on <span>PrintFul</span>.`,
  },
  {
    id: 3,
    icon: <Icon3 />,
    text: `Provide product information with help from an <span>AI assistant</span>.`,
  },
  {
    id: 4,
    icon: <Icon4 />,
    text: `<span>Organise</span> the NFT or product in a <span>Drop to upload </span> directly to <span>your platform</span>.`,
  },
  {
    id: 5,
    icon: <Icon5 />,
    text: `Use our <span>product finance manager</span> to <span>track your earnings</span>.`,
  },
];

export const Offers = [
  {
    title: "NFTs",
    text: [
      "We handle NFT creation, collections and drops, putting the <span>power of AI-created NFTs in your hands.</span>",
      "We take payments daily as a percentage of sales - so you <span>pay us as you earn.</span>",
    ],
    percentage: [
      {
        num: 3,
        text: "Of Initial NFT Sale",
      },
      {
        num: 1,
        text: "Of NFT Royalty",
      },
    ],
  },
  {
    title: "Print & Merch",
    text: [
      "We handle image creation and uploads to Printful, <span>bringing the power of AI to your store.</span>",
      "We take payments daily as a percentage of sales - so you <span>pay us as you earn.</span>",
    ],
    percentage: [
      {
        num: 3,
        text: "Of Sales",
      },
    ],
  },
];

export const SidebarLinks = [
  {
    label: "Create",
    icon: <Icon8 />,
  },
  {
    label: "Upload",
    icon: <Icon8 />,
  },
  {
    label: "Track",
    icon: <Icon8 />,
  },
  {
    label: "Options",
    icon: <Icon8 />,
  },
  {
    label: "User",
    icon: <Icon8 />,
  },
];
