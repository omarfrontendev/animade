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
    link: "/single-input",
  },
  {
    label: "Upload",
    icon: <Icon8 />,
    link: "/drops",
  },
  {
    label: "Track",
    icon: <Icon8 />,
  },
  {
    label: "Options",
    icon: <Icon8 />,
    link: "/settings",
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

export const plans = [
  {
    title: "Free",
    subtitle: "Free plan enjoy them",
    designs: 30,
    // extra: 50,
    price: "free",
    free: true,
  },
  {
    title: "Booster",
    subtitle: "Take your business off the ground",
    designs: 100,
    price: 3.99,
    href: "https://checkout.stripe.com/c/pay/cs_test_a1Uq7LN4O6rdJkyxVFsFj50mr3anf6lysFyOxtRr9QyXhbnwZ3u6qCkXa7#fidkdWxOYHwnPyd1blpxYHZxWjA0SHY9YDdDU00wTEJWVn9tMzBPNTNMdUdMa2hGUEN1M2lDPUhpSUt0Rjc1TmhpXExpUlR1NH9VZz1DYXBffDM0TEdvUzNtUFB8blZzVl9hN19WfzxNQFw1NTV1QXdzQGpxUCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVpjX2A9cnI8QDNnSzE1QXA9cn0neCUl",
  },
  {
    title: "Accelerate",
    subtitle: "Reach new heights",
    designs: 1250,
    price: 15.99,
    href: "https://checkout.stripe.com/c/pay/cs_test_a1EVOMC0LXeT6jDAKrfvzmLxLra7NYo4n8wlu2aFYg6bSCCNbvGWgxXNdt#fidkdWxOYHwnPyd1blpxYHZxWjA0SHY9YDdDU00wTEJWVn9tMzBPNTNMdUdMa2hGUEN1M2lDPUhpSUt0Rjc1TmhpXExpUlR1NH9VZz1DYXBffDM0TEdvUzNtUFB8blZzVl9hN19WfzxNQFw1NTV1QXdzQGpxUCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVo1NWJkQEAyc1xkTzU0TXw0MTMneCUl",
  },
  {
    title: "Professional",
    subtitle: "Unlimited potential",
    price: 54.99,
    Professional: true,
    href: "https://checkout.stripe.com/c/pay/cs_test_a1L4H4bwvYLceq9HmGZiPX5TRb5dRZHtQ1zxM7QB0ONbeDRPVYPDRP4la6#fidkdWxOYHwnPyd1blpxYHZxWjA0SHY9YDdDU00wTEJWVn9tMzBPNTNMdUdMa2hGUEN1M2lDPUhpSUt0Rjc1TmhpXExpUlR1NH9VZz1DYXBffDM0TEdvUzNtUFB8blZzVl9hN19WfzxNQFw1NTV1QXdzQGpxUCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVo1NWIydnZmVGwzdk4yNFZnTEkneCUl",
  },
];

export const countriesCodes = [
  {
    name: "United States",
    dial_code: "+1",
    code: "US",
  },
  {
    name: "United Kingdom",
    dial_code: "+44",
    code: "GB",
  },
  {
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF",
  },
  {
    name: "Aland Islands",
    dial_code: "+358",
    code: "AX",
  },
  {
    name: "Albania",
    dial_code: "+355",
    code: "AL",
  },
  {
    name: "Algeria",
    dial_code: "+213",
    code: "DZ",
  },
  {
    name: "AmericanSamoa",
    dial_code: "+1684",
    code: "AS",
  },
  {
    name: "Andorra",
    dial_code: "+376",
    code: "AD",
  },
  {
    name: "Angola",
    dial_code: "+244",
    code: "AO",
  },
  {
    name: "Anguilla",
    dial_code: "+1264",
    code: "AI",
  },
  {
    name: "Antarctica",
    dial_code: "+672",
    code: "AQ",
  },
  {
    name: "Antigua and Barbuda",
    dial_code: "+1268",
    code: "AG",
  },
  {
    name: "Argentina",
    dial_code: "+54",
    code: "AR",
  },
  {
    name: "Armenia",
    dial_code: "+374",
    code: "AM",
  },
  {
    name: "Aruba",
    dial_code: "+297",
    code: "AW",
  },
  {
    name: "Australia",
    dial_code: "+61",
    code: "AU",
  },
  {
    name: "Austria",
    dial_code: "+43",
    code: "AT",
  },
  {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ",
  },
  {
    name: "Bahamas",
    dial_code: "+1242",
    code: "BS",
  },
  {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH",
  },
  {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD",
  },
  {
    name: "Barbados",
    dial_code: "+1246",
    code: "BB",
  },
  {
    name: "Belarus",
    dial_code: "+375",
    code: "BY",
  },
  {
    name: "Belgium",
    dial_code: "+32",
    code: "BE",
  },
  {
    name: "Belize",
    dial_code: "+501",
    code: "BZ",
  },
  {
    name: "Benin",
    dial_code: "+229",
    code: "BJ",
  },
  {
    name: "Bermuda",
    dial_code: "+1441",
    code: "BM",
  },
  {
    name: "Bhutan",
    dial_code: "+975",
    code: "BT",
  },
  {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591",
    code: "BO",
  },
  {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA",
  },
  {
    name: "Botswana",
    dial_code: "+267",
    code: "BW",
  },
  {
    name: "Brazil",
    dial_code: "+55",
    code: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO",
  },
  {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN",
  },
  {
    name: "Bulgaria",
    dial_code: "+359",
    code: "BG",
  },
  {
    name: "Burkina Faso",
    dial_code: "+226",
    code: "BF",
  },
  {
    name: "Burundi",
    dial_code: "+257",
    code: "BI",
  },
  {
    name: "Cambodia",
    dial_code: "+855",
    code: "KH",
  },
  {
    name: "Cameroon",
    dial_code: "+237",
    code: "CM",
  },
  {
    name: "Canada",
    dial_code: "+1",
    code: "CA",
  },
  {
    name: "Cape Verde",
    dial_code: "+238",
    code: "CV",
  },
  {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY",
  },
  {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF",
  },
  {
    name: "Chad",
    dial_code: "+235",
    code: "TD",
  },
  {
    name: "Chile",
    dial_code: "+56",
    code: "CL",
  },
  {
    name: "China",
    dial_code: "+86",
    code: "CN",
  },
  {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX",
  },
  {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC",
  },
  {
    name: "Colombia",
    dial_code: "+57",
    code: "CO",
  },
  {
    name: "Comoros",
    dial_code: "+269",
    code: "KM",
  },
  {
    name: "Congo",
    dial_code: "+242",
    code: "CG",
  },
  {
    name: "Congo, The Democratic Republic of the Congo",
    dial_code: "+243",
    code: "CD",
  },
  {
    name: "Cook Islands",
    dial_code: "+682",
    code: "CK",
  },
  {
    name: "Costa Rica",
    dial_code: "+506",
    code: "CR",
  },
  {
    name: "Cote d'Ivoire",
    dial_code: "+225",
    code: "CI",
  },
  {
    name: "Croatia",
    dial_code: "+385",
    code: "HR",
  },
  {
    name: "Cuba",
    dial_code: "+53",
    code: "CU",
  },
  {
    name: "Cyprus",
    dial_code: "+357",
    code: "CY",
  },
  {
    name: "Czech Republic",
    dial_code: "+420",
    code: "CZ",
  },
  {
    name: "Denmark",
    dial_code: "+45",
    code: "DK",
  },
  {
    name: "Djibouti",
    dial_code: "+253",
    code: "DJ",
  },
  {
    name: "Dominica",
    dial_code: "+1767",
    code: "DM",
  },
  {
    name: "Dominican Republic",
    dial_code: "+1849",
    code: "DO",
  },
  {
    name: "Ecuador",
    dial_code: "+593",
    code: "EC",
  },
  {
    name: "Egypt",
    dial_code: "+20",
    code: "EG",
  },
  {
    name: "El Salvador",
    dial_code: "+503",
    code: "SV",
  },
  {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ",
  },
  {
    name: "Eritrea",
    dial_code: "+291",
    code: "ER",
  },
  {
    name: "Estonia",
    dial_code: "+372",
    code: "EE",
  },
  {
    name: "Ethiopia",
    dial_code: "+251",
    code: "ET",
  },
  {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK",
  },
  {
    name: "Faroe Islands",
    dial_code: "+298",
    code: "FO",
  },
  {
    name: "Fiji",
    dial_code: "+679",
    code: "FJ",
  },
  {
    name: "Finland",
    dial_code: "+358",
    code: "FI",
  },
  {
    name: "France",
    dial_code: "+33",
    code: "FR",
  },
  {
    name: "French Guiana",
    dial_code: "+594",
    code: "GF",
  },
  {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF",
  },
  {
    name: "Gabon",
    dial_code: "+241",
    code: "GA",
  },
  {
    name: "Gambia",
    dial_code: "+220",
    code: "GM",
  },
  {
    name: "Georgia",
    dial_code: "+995",
    code: "GE",
  },
  {
    name: "Germany",
    dial_code: "+49",
    code: "DE",
  },
  {
    name: "Ghana",
    dial_code: "+233",
    code: "GH",
  },
  {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI",
  },
  {
    name: "Greece",
    dial_code: "+30",
    code: "GR",
  },
  {
    name: "Greenland",
    dial_code: "+299",
    code: "GL",
  },
  {
    name: "Grenada",
    dial_code: "+1473",
    code: "GD",
  },
  {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP",
  },
  {
    name: "Guam",
    dial_code: "+1671",
    code: "GU",
  },
  {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT",
  },
  {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG",
  },
  {
    name: "Guinea",
    dial_code: "+224",
    code: "GN",
  },
  {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW",
  },
  {
    name: "Guyana",
    dial_code: "+595",
    code: "GY",
  },
  {
    name: "Haiti",
    dial_code: "+509",
    code: "HT",
  },
  {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA",
  },
  {
    name: "Honduras",
    dial_code: "+504",
    code: "HN",
  },
  {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK",
  },
  {
    name: "Hungary",
    dial_code: "+36",
    code: "HU",
  },
  {
    name: "Iceland",
    dial_code: "+354",
    code: "IS",
  },
  {
    name: "India",
    dial_code: "+91",
    code: "IN",
  },
  {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID",
  },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    dial_code: "+98",
    code: "IR",
  },
  {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ",
  },
  {
    name: "Ireland",
    dial_code: "+353",
    code: "IE",
  },
  {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM",
  },
  {
    name: "Israel",
    dial_code: "+972",
    code: "IL",
  },
  {
    name: "Italy",
    dial_code: "+39",
    code: "IT",
  },
  {
    name: "Jamaica",
    dial_code: "+1876",
    code: "JM",
  },
  {
    name: "Japan",
    dial_code: "+81",
    code: "JP",
  },
  {
    name: "Jersey",
    dial_code: "+44",
    code: "JE",
  },
  {
    name: "Jordan",
    dial_code: "+962",
    code: "JO",
  },
  {
    name: "Kazakhstan",
    dial_code: "+77",
    code: "KZ",
  },
  {
    name: "Kenya",
    dial_code: "+254",
    code: "KE",
  },
  {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI",
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: "+850",
    code: "KP",
  },
  {
    name: "Korea, Republic of South Korea",
    dial_code: "+82",
    code: "KR",
  },
  {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW",
  },
  {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG",
  },
  {
    name: "Laos",
    dial_code: "+856",
    code: "LA",
  },
  {
    name: "Latvia",
    dial_code: "+371",
    code: "LV",
  },
  {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB",
  },
  {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS",
  },
  {
    name: "Liberia",
    dial_code: "+231",
    code: "LR",
  },
  {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY",
  },
  {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI",
  },
  {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT",
  },
  {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU",
  },
  {
    name: "Macao",
    dial_code: "+853",
    code: "MO",
  },
  {
    name: "Macedonia",
    dial_code: "+389",
    code: "MK",
  },
  {
    name: "Madagascar",
    dial_code: "+261",
    code: "MG",
  },
  {
    name: "Malawi",
    dial_code: "+265",
    code: "MW",
  },
  {
    name: "Malaysia",
    dial_code: "+60",
    code: "MY",
  },
  {
    name: "Maldives",
    dial_code: "+960",
    code: "MV",
  },
  {
    name: "Mali",
    dial_code: "+223",
    code: "ML",
  },
  {
    name: "Malta",
    dial_code: "+356",
    code: "MT",
  },
  {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH",
  },
  {
    name: "Martinique",
    dial_code: "+596",
    code: "MQ",
  },
  {
    name: "Mauritania",
    dial_code: "+222",
    code: "MR",
  },
  {
    name: "Mauritius",
    dial_code: "+230",
    code: "MU",
  },
  {
    name: "Mayotte",
    dial_code: "+262",
    code: "YT",
  },
  {
    name: "Mexico",
    dial_code: "+52",
    code: "MX",
  },
  {
    name: "Micronesia, Federated States of Micronesia",
    dial_code: "+691",
    code: "FM",
  },
  {
    name: "Moldova",
    dial_code: "+373",
    code: "MD",
  },
  {
    name: "Monaco",
    dial_code: "+377",
    code: "MC",
  },
  {
    name: "Mongolia",
    dial_code: "+976",
    code: "MN",
  },
  {
    name: "Montenegro",
    dial_code: "+382",
    code: "ME",
  },
  {
    name: "Montserrat",
    dial_code: "+1664",
    code: "MS",
  },
  {
    name: "Morocco",
    dial_code: "+212",
    code: "MA",
  },
  {
    name: "Mozambique",
    dial_code: "+258",
    code: "MZ",
  },
  {
    name: "Myanmar",
    dial_code: "+95",
    code: "MM",
  },
  {
    name: "Namibia",
    dial_code: "+264",
    code: "NA",
  },
  {
    name: "Nauru",
    dial_code: "+674",
    code: "NR",
  },
  {
    name: "Nepal",
    dial_code: "+977",
    code: "NP",
  },
  {
    name: "Netherlands",
    dial_code: "+31",
    code: "NL",
  },
  {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN",
  },
  {
    name: "New Caledonia",
    dial_code: "+687",
    code: "NC",
  },
  {
    name: "New Zealand",
    dial_code: "+64",
    code: "NZ",
  },
  {
    name: "Nicaragua",
    dial_code: "+505",
    code: "NI",
  },
  {
    name: "Niger",
    dial_code: "+227",
    code: "NE",
  },
  {
    name: "Nigeria",
    dial_code: "+234",
    code: "NG",
  },
  {
    name: "Niue",
    dial_code: "+683",
    code: "NU",
  },
  {
    name: "Norfolk Island",
    dial_code: "+672",
    code: "NF",
  },
  {
    name: "Northern Mariana Islands",
    dial_code: "+1670",
    code: "MP",
  },
  {
    name: "Norway",
    dial_code: "+47",
    code: "NO",
  },
  {
    name: "Oman",
    dial_code: "+968",
    code: "OM",
  },
  {
    name: "Pakistan",
    dial_code: "+92",
    code: "PK",
  },
  {
    name: "Palau",
    dial_code: "+680",
    code: "PW",
  },
  {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS",
  },
  {
    name: "Panama",
    dial_code: "+507",
    code: "PA",
  },
  {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG",
  },
  {
    name: "Paraguay",
    dial_code: "+595",
    code: "PY",
  },
  {
    name: "Peru",
    dial_code: "+51",
    code: "PE",
  },
  {
    name: "Philippines",
    dial_code: "+63",
    code: "PH",
  },
  {
    name: "Pitcairn",
    dial_code: "+872",
    code: "PN",
  },
  {
    name: "Poland",
    dial_code: "+48",
    code: "PL",
  },
  {
    name: "Portugal",
    dial_code: "+351",
    code: "PT",
  },
  {
    name: "Puerto Rico",
    dial_code: "+1939",
    code: "PR",
  },
  {
    name: "Qatar",
    dial_code: "+974",
    code: "QA",
  },
  {
    name: "Romania",
    dial_code: "+40",
    code: "RO",
  },
  {
    name: "Russia",
    dial_code: "+7",
    code: "RU",
  },
  {
    name: "Rwanda",
    dial_code: "+250",
    code: "RW",
  },
  {
    name: "Reunion",
    dial_code: "+262",
    code: "RE",
  },
  {
    name: "Saint Barthelemy",
    dial_code: "+590",
    code: "BL",
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH",
  },
  {
    name: "Saint Kitts and Nevis",
    dial_code: "+1869",
    code: "KN",
  },
  {
    name: "Saint Lucia",
    dial_code: "+1758",
    code: "LC",
  },
  {
    name: "Saint Martin",
    dial_code: "+590",
    code: "MF",
  },
  {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1784",
    code: "VC",
  },
  {
    name: "Samoa",
    dial_code: "+685",
    code: "WS",
  },
  {
    name: "San Marino",
    dial_code: "+378",
    code: "SM",
  },
  {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST",
  },
  {
    name: "Saudi Arabia",
    dial_code: "+966",
    code: "SA",
  },
  {
    name: "Senegal",
    dial_code: "+221",
    code: "SN",
  },
  {
    name: "Serbia",
    dial_code: "+381",
    code: "RS",
  },
  {
    name: "Seychelles",
    dial_code: "+248",
    code: "SC",
  },
  {
    name: "Sierra Leone",
    dial_code: "+232",
    code: "SL",
  },
  {
    name: "Singapore",
    dial_code: "+65",
    code: "SG",
  },
  {
    name: "Slovakia",
    dial_code: "+421",
    code: "SK",
  },
  {
    name: "Slovenia",
    dial_code: "+386",
    code: "SI",
  },
  {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB",
  },
  {
    name: "Somalia",
    dial_code: "+252",
    code: "SO",
  },
  {
    name: "South Africa",
    dial_code: "+27",
    code: "ZA",
  },
  {
    name: "South Sudan",
    dial_code: "+211",
    code: "SS",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS",
  },
  {
    name: "Spain",
    dial_code: "+34",
    code: "ES",
  },
  {
    name: "Sri Lanka",
    dial_code: "+94",
    code: "LK",
  },
  {
    name: "Sudan",
    dial_code: "+249",
    code: "SD",
  },
  {
    name: "Suriname",
    dial_code: "+597",
    code: "SR",
  },
  {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ",
  },
  {
    name: "Swaziland",
    dial_code: "+268",
    code: "SZ",
  },
  {
    name: "Sweden",
    dial_code: "+46",
    code: "SE",
  },
  {
    name: "Switzerland",
    dial_code: "+41",
    code: "CH",
  },
  {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY",
  },
  {
    name: "Taiwan",
    dial_code: "+886",
    code: "TW",
  },
  {
    name: "Tajikistan",
    dial_code: "+992",
    code: "TJ",
  },
  {
    name: "Tanzania, United Republic of Tanzania",
    dial_code: "+255",
    code: "TZ",
  },
  {
    name: "Thailand",
    dial_code: "+66",
    code: "TH",
  },
  {
    name: "Timor-Leste",
    dial_code: "+670",
    code: "TL",
  },
  {
    name: "Togo",
    dial_code: "+228",
    code: "TG",
  },
  {
    name: "Tokelau",
    dial_code: "+690",
    code: "TK",
  },
  {
    name: "Tonga",
    dial_code: "+676",
    code: "TO",
  },
  {
    name: "Trinidad and Tobago",
    dial_code: "+1868",
    code: "TT",
  },
  {
    name: "Tunisia",
    dial_code: "+216",
    code: "TN",
  },
  {
    name: "Turkey",
    dial_code: "+90",
    code: "TR",
  },
  {
    name: "Turkmenistan",
    dial_code: "+993",
    code: "TM",
  },
  {
    name: "Turks and Caicos Islands",
    dial_code: "+1649",
    code: "TC",
  },
  {
    name: "Tuvalu",
    dial_code: "+688",
    code: "TV",
  },
  {
    name: "Uganda",
    dial_code: "+256",
    code: "UG",
  },
  {
    name: "Ukraine",
    dial_code: "+380",
    code: "UA",
  },
  {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE",
  },
  {
    name: "Uruguay",
    dial_code: "+598",
    code: "UY",
  },
  {
    name: "Uzbekistan",
    dial_code: "+998",
    code: "UZ",
  },
  {
    name: "Vanuatu",
    dial_code: "+678",
    code: "VU",
  },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dial_code: "+58",
    code: "VE",
  },
  {
    name: "Vietnam",
    dial_code: "+84",
    code: "VN",
  },
  {
    name: "Virgin Islands, British",
    dial_code: "+1284",
    code: "VG",
  },
  {
    name: "Virgin Islands, U.S.",
    dial_code: "+1340",
    code: "VI",
  },
  {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF",
  },
  {
    name: "Yemen",
    dial_code: "+967",
    code: "YE",
  },
  {
    name: "Zambia",
    dial_code: "+260",
    code: "ZM",
  },
  {
    name: "Zimbabwe",
    dial_code: "+263",
    code: "ZW",
  },
];
