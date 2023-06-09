import Spotify from "./assets/img/spotify-1.svg";
import Expedia from "./assets/img/expedia.svg";
import Lexus from "./assets/img/lexus-logo.svg";
import Xbox from "./assets/img/xbox.svg";
import Microsoft from "./assets/img/microsoft.svg";
import Tinder from "./assets/img/tinder.svg";
import Google from "./assets/img/google.svg";
import Slack from "./assets/img/slack.svg";

//Services icon import.
import DesignIcon from "./assets/img/design-icon.svg"
import DevelopmentIcon from "./assets/img/development-icon.svg"
import SeoIcon from "./assets/img/seo-icon.svg"
import InstallationIcon from "./assets/img/Installation-icon.svg"
import FixIssueIcon from "./assets/img/fix-issues-icon.svg"
import DigitalMarketingIcon from "./assets/img/digital-marketing-icon.svg"

//Features images.
import FeaturesImage from "./assets/img/why-choose-us.svg"

//Footer
import FLogo from "./assets/img/footer-logo.svg"
import Location from "./assets/img/location.svg"
import Phone from "./assets/img/call-calling.svg"
import Email from "./assets/img/sms.svg"


//Key Features icons.
import Start from "./assets/img/star.svg"
import Verify from "./assets/img/verify.svg"
import PenToool from "./assets/img/pen-tool.svg"
import SendIcon from "./assets/img/send-icon.svg"
import Clock from "./assets/img/clock.svg"
import SmsStar from "./assets/img/sms-star.svg"


//Testimonial
import TestimonialAuthor1 from "./assets/img/testimonial-author-1.png";
import TestimonialAuthor2 from "./assets/img/testimonial-author-2.png";
import TestimonialAuthor3 from "./assets/img/testimonial-author-3.png";



//Latest News
import featuredImage1 from './assets/img/blog-post-1.jpg'
import featuredImage2 from './assets/img/blog-post-2.jpg'
import featuredImage3 from './assets/img/blog-post-3.jpg'


export const brandLogo = [
    {
        logoUrl: Spotify
    },
    {
        logoUrl: Expedia
    },
    {
        logoUrl: Lexus
    },
    {
        logoUrl: Xbox
    },
    {
        logoUrl: Microsoft
    },
    {
        logoUrl: Tinder
    },
    {
        logoUrl: Google
    },
    {
        logoUrl: Slack
    },
    {
        logoUrl: Spotify
    },
    {
        logoUrl: Expedia
    },
    {
        logoUrl: Lexus
    },
    {
        logoUrl: Xbox
    },
    {
        logoUrl: Microsoft
    },
    {
        logoUrl: Tinder
    },
    {
        logoUrl: Google
    },
    {
        logoUrl: Slack
    }
]


export const services = [
    {
        id: 1,
        icon: DesignIcon,
        title: "Design",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 2,
        icon: DevelopmentIcon,
        title: "Development",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 3,
        icon: SeoIcon,
        title: "SEO",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 4,
        icon: InstallationIcon,
        title: "Installation",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 5,
        icon: FixIssueIcon,
        title: "Fix Issues",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 6,
        icon: DigitalMarketingIcon,
        title: "Digital Marketing",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    }

]

export const features = {
    id: 1,
    featureImg: FeaturesImage,
    subTitle: "Why Choose Us",
    title: "We deliver the high quality end results you need",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    featureList: [
        {
            id: 1,
            featureListText: "Perfect for modern startups",
        },
        {
            id: 2,
            featureListText: "Built with ease-of-use at its core",
        },
        {
            id: 3,
            featureListText: "Quality design & thoughtfully crafted code",
        },
    ],
    featureText: "Perfect for modern startups | Built with ease-of-use at its core | Quality design & thoughtfully crafted code"
}


export const footerMenus = [
    {
        id: 1,
        colXL: 3,
        footerLogo: FLogo,
        contactInfo: [
            {
                id: 11,
                icon: Location,
                infoText: "151 Allen Way, Yuba City, CA, USA.",
            },
            {
                id: 12,
                icon: Phone,
                infoText: "(800) 123 6789",
                link: "tel:8001236789"
            },
            {
                id: 13,
                icon: Email,
                infoText: "support@azenci.com",
                link: "mailto:support@azenci.com"
            },
        ]
    },
    {
        id: 2,
        colXL: 4,
        widgetTitle: "Services",
        widgetMenu: [
            {
                id: 21,
                menuItem: "Design",
                menuLocation: "/design"
            },
            {
                id: 22,
                menuItem: "Development",
                menuLocation: "/development"
            },
            {
                id: 23,
                menuItem: "Search Engine Optimization (SEO)",
                menuLocation: "/seo"
            },
            {
                id: 24,
                menuItem: "Installation",
                menuLocation: "/installation"
            },
            {
                id: 25,
                menuItem: "Digital Marketing",
                menuLocation: "/digital-marketing"
            },
        ]
    },
    {
        id: 3,
        colXL: 3,
        widgetTitle: "Company",
        widgetMenu: [
            {
                id: 31,
                menuItem: "About Company",
                menuLocation: "/about-company"
            },
            {
                id: 32,
                menuItem: "Support",
                menuLocation: "/support"
            },
            {
                id: 33,
                menuItem: "Privacy Policy",
                menuLocation: "/privacy-policy"
            },
            {
                id: 34,
                menuItem: "Product Sourcing",
                menuLocation: "/product-sourcing"
            },
            {
                id: 35,
                menuItem: "Terms and Conditions",
                menuLocation: "/terms-and-conditions"
            },
        ]
    },
    {
        id: 4,
        colXL: 2,
        widgetTitle: "Quick Links",
        widgetMenu: [
            {
                id: 41,
                menuItem: "Home",
                menuLocation: "/"
            },
            {
                id: 42,
                menuItem: "About us",
                menuLocation: "/about"
            },
            {
                id: 43,
                menuItem: "Services",
                menuLocation: "/services"
            },
            {
                id: 44,
                menuItem: "Blog",
                menuLocation: "/blog"
            },
            {
                id: 45,
                menuItem: "Contact",
                menuLocation: "/contact"
            },
        ]
    },
]


export const dataKeyFeatures = [
    {
        id: 1,
        icon: Start,
        title: "Finest Quality",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 2,
        icon: Verify,
        title: "Real Solutions",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 3,
        icon: PenToool,
        title: "Great Design",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 4,
        icon: SendIcon,
        title: "Quick Response",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 5,
        icon: Clock,
        title: "Time Saving",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    },
    {
        id: 6,
        icon: SmsStar,
        title: "Best Support",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
    }

]


export const testimonials = [
    {
        id: 1,
        userImg: TestimonialAuthor1,
        reviewText: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Marvin McKinney",
        ratings: 4.6,
        bgColor: "blue-gradient"
    },
    {
        id: 2,
        userImg: TestimonialAuthor2,
        reviewText: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Ronald Richards",
        ratings: 5,
        bgColor: "yellow-gradient"
    },
    {
        id: 3,
        userImg: TestimonialAuthor3,
        reviewText: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Kathryn Murphy",
        ratings: 3.8,
        bgColor: "blue-gradient"
    },
    {
        id: 4,
        userImg: TestimonialAuthor2,
        reviewText: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Ronald Richards",
        ratings: 5,
        bgColor: "yellow-gradient"
    },
    {
        id: 5,
        userImg: TestimonialAuthor3,
        reviewText: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Kathryn Murphy",
        ratings: 3.8,
        bgColor: "blue-gradient"
    }
]


export const LatestNewsData = [
    {
        id: 1,
        featuredImg: featuredImage1,
        date: "Feb 15, 2023",
        author: "Ronald Richards",
        title: "Website Development Process 101 | A Guide to Pixel-Perfect",
        content: "Consectetur adipiscing elit, sed do ut eiusmod tempor incididunt..."
    },
    {
        id: 2,
        featuredImg: featuredImage2,
        date: "Feb 15, 2023",
        author: "Ronald Richards",
        title: "Everything You Need to Know About UI/UX Design",
        content: "Consectetur adipiscing elit, sed do ut eiusmod tempor incididunt..."
    },
    {
        id: 3,
        featuredImg: featuredImage3,
        date: "Feb 15, 2023",
        author: "Ronald Richards",
        title: "How to be a WordPress developer in 2023 and beyond?",
        content: "Consectetur adipiscing elit, sed do ut eiusmod tempor incididunt..."
    },
    {
        id: 4,
        featuredImg: featuredImage2,
        date: "Feb 15, 2023",
        author: "Ronald Richards",
        title: "Everything You Need to Know About UI/UX Design",
        content: "Consectetur adipiscing elit, sed do ut eiusmod tempor incididunt..."
    },
    {
        id: 5,
        featuredImg: featuredImage3,
        date: "Feb 15, 2023",
        author: "Ronald Richards",
        title: "How to be a WordPress developer in 2023 and beyond?",
        content: "Consectetur adipiscing elit, sed do ut eiusmod tempor incididunt..."
    },
    {
        id: 6,
        featuredImg: featuredImage1,
        date: "Feb 15, 2023",
        author: "Ronald Richards",
        title: "Website Development Process 101 | A Guide to Pixel-Perfect",
        content: "Consectetur adipiscing elit, sed do ut eiusmod tempor incididunt..."
    },
    {
        id: 7,
        featuredImg: featuredImage2,
        date: "Feb 15, 2023",
        author: "Ronald Richards",
        title: "Everything You Need to Know About UI/UX Design",
        content: "Consectetur adipiscing elit, sed do ut eiusmod tempor incididunt..."
    },
]