import {
  ChangePassIcon,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon8,
  LegalIcon,
  ManageIcon,
  PaymentIcon,
} from "../icons";

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
    to: "/settings",
  },
  {
    label: "User",
    icon: <Icon8 />,
    to: "/profile",
  },
];

export const privacyBoxprags = [
  `Welcome to Animade (www.animade.world), an online platform that enables users to produce and upload designs to non-fungible token (NFT) and Print-On-Demand platforms for the purposes of buying, selling, and showcasing. I am privileged to present to you this document which outlines the terms and conditions ("T&Cs") that govern the use of our platform.`,
  `Throughout these terms and conditions, the expressions "we," "us,", “the platform” and "our" refer to Animade, while "you" and "user" denote individuals who utilise our platform. By utilising our platform, you enter into a legally binding agreement to comply with these T&Cs. It is crucial that you carefully read and comprehend these terms before creating an account with us. Should you find that you do not concur with any of the conditions stipulated herein, we respectfully request that you do not proceed with the use of our platform.`,
  `As a user of our platform, you have the obligation to provide accurate information when creating an account, maintain the security and confidentiality of your login credentials, and promptly report any unauthorised use of your account. We reserve the right to refuse service to any person, monitor user activities on the platform, and collect and process data concerning user access and use of the platform. Furthermore, we reserve the right to impose a commission on your proceeds in exchange for utilising our services. In the event of any disputes with third-party providers, you, as a user, are responsible for resolving them and indemnifying and holding the platform harmless from any claims or damages.`,
  `We may display advertisements, use your data for marketing purposes, and share your data with third-party providers. However, you have the right to opt out of any marketing communications from our platform at any time. Additionally, you may request the deletion of your account and data, except for data that is owned by the platform in accordance with this document. Please note that we are not liable for any loss or damage resulting from a data breach, and you assume full responsibility for the security of your account and data. Please review the full details of the terms and conditions provided below.`,
];

export const privacyListOne = [
  "When creating an account, it is the user's obligation to provide precise and up-to-date information. The failure to do so may result in the termination of the account.",
  `The platform reserves the right to request further information from the user to verify their identity, and may do so at any time. Such verification may include the use of a third-party service provider.`,
  `The platform reserves the right to decline service to any person for any reason, including without limitation, if the platform believes that the user's conduct violates the terms and conditions of the platform or is illegal.`,
  `The platform may suspend or terminate a user's account without prior notice or explanation, including without limitation, if the user violates the terms and conditions of the platform or engages in any activity that the platform deems harmful to its operations.`,
  `The user is solely accountable for all activities undertaken using their account. Any unauthorized use of the user's account must be reported to the platform immediately.`,
  `The user must keep their login credentials confidential and secure. The user may not disclose their login credentials to any third-party, and the platform will not be liable for any damages or losses resulting from the user's failure to comply with this requirement.`,
  `The platform may monitor the user's activities on the platform for security purposes. The platform may collect and process data regarding the user's access and use of the platform, including without limitation, the user's IP address, location, and usage data. The user consents to such monitoring and data processing by using the platform.`,
];

export const privacyListTwo = [
  {
    text: `The platform reserves the right to impose a commission on the user's proceeds in exchange for using its services. This commission consists of a sum equivalent to 3% of the NFT's initial sale, 1% of NFT royalty, and 3% of print-on-demand sales, along with a further 3% of earnings from all additional sources that utilize the designs generated by the platform, or from sources that use an altered rendition of the said designs.`,
    list: [
      "To further expound, the platform shall retain 3% of the original sales value of an NFT, which is a unique cryptographic asset that represents ownership of a digital asset or other form of property, during its initial sale on the platform. Additionally, for any royalties paid out to the user following the initial sale, the platform shall retain 1% of the said amount as commission. For print-on-demand sales of designs created using the platform, the platform shall retain 3% of the sales value.",
      `It is important to note that any additional sources of income generated from designs produced using the platform, or edited versions of the same, shall also be subject to a commission of 3%.`,
      `In the event of a dispute, the governing law and jurisdiction specified in Section VII of this agreement shall be used to resolve the issue.`,
    ],
  },
  {
    text: "Users shall be provided with 50 free designs per month. If the user exceeds this limit, they may purchase additional designs through variously priced packages for a monthly fee. Additional designs may solely be procured on a monthly basis and are not transferrable to the following month.",
  },
  {
    text: ` If the user terminates their package, any unused design credits shall remain credited to their account for the remainder of the month, and they shall not be charged for the following month's package.`,
  },
  {
    text: "If the user endeavors to evade payment, the platform retains the right to terminate their account. In such cases, the platform may seize the commercial rights to the images, as well as all income from linked monetization platforms.",
  },
  {
    text: `To assist users in monitoring their earnings adjusted for the platform's small fees, financial tracking services are accessible on the platform.`,
  },
];

export const settingsLinks = [
  {
    label: "Payment & Billing",
    to: "payment",
    icon: <PaymentIcon />,
  },
  {
    label: "Manage Accounts",
    to: "manage-account",
    icon: <ManageIcon />,
  },
  {
    label: "Change Password",
    to: "change-password",
    icon: <ChangePassIcon />,
  },
  {
    label: "Legal",
    to: "legal",
    icon: <LegalIcon />,
  },
];
