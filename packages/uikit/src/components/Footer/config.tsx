import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://twitter.com/HopiumSwap",
      },
      {
        label: "Blog",
        href: "https://www.s0cialhub.com/HopiumSwapExchange",
      },
      {
        label: "Community",
        href: "https://twitter.com/HopiumSwap",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://twitter.com/HopiumSwap",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://twitter.com/HopiumSwap",
      },
      {
        label: "Troubleshooting",
        href: "https://twitter.com/HopiumSwap",
      },
      {
        label: "Guides",
        href: "https://twitter.com/HopiumSwap",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/TheCryptoMonster",
      },
      {
        label: "Documentation",
        href: "https://github.com/TheCryptoMonster",
      },
      {
        label: "Bug Bounty",
        href: "https://twitter.com/HopiumSwap",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://twitter.com/HopiumSwap",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/HopiumSwap",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/HopiumSwapExchange",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/PancakeSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/PancakeSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/PancakeSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/pancakeswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/pancakeswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/pancakeswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/PancakeSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/PancakeswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/pancakeswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/pancakeswapfr",
      },
      {
        label: "Deutsch",
        href: "https://t.me/PancakeSwap_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/Pancakeswap_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/PancakeSwapGeorgia",
      },
      {
        label: "Announcements",
        href: "https://twitter.com/HopiumSwap",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/pancakeswap",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://discord.gg/qARSZRXYNR",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/TheCryptoMonster/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/qARSZRXYNR",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://www.s0cialhub.com/HopiumSwapExchange",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
