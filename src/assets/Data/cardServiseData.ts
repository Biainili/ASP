// src/data/cardData.ts
import migrationImg from "../img/img_migration-V1.webp";
import openingCompanyImg from "../img/img_opening_company.png";
import citizenshipImg from "../img/ArmeniaCityzen.jpg";
import residencePermitImg from "../img/WORK Pr.png";
import visaImg from "../img/VISA.png";
import businessManagementImg from "../img/mani_bis.webp";
import { CardDataService } from "../../modules/CardDataService";

import icon_aps_1 from "../img/asp_img/icon_asp_1.webp";
import icon_aps_2 from "../img/asp_img/icon_asp_2.webp";
import icon_aps_3 from "../img/asp_img/icon_asp_3.webp";
import icon_aps_4 from "../img/asp_img/icon_asp_4.webp";

import icon_aps_5 from "../img/asp_img/icon_asp_5.webp";
import icon_aps_6 from "../img/asp_img/icon_asp_6.webp";
import icon_aps_7 from "../img/asp_img/icon_asp_7.webp";
import icon_aps_8 from "../img/asp_img/icon_asp_8.webp";

import icon_aps_9 from "../img/asp_img/icon_asp_9.webp";
import icon_aps_10 from "../img/asp_img/icon_asp_10.webp";
import icon_aps_11 from "../img/asp_img/icon_asp_11.webp";
import icon_aps_12 from "../img/asp_img/icon_asp_12.webp";

import icon_aps_13 from "../img/asp_img/icon_asp_13.webp";
import icon_aps_14 from "../img/asp_img/icon_asp_14.webp";
import icon_aps_15 from "../img/asp_img/icon_asp_15.webp";
import icon_aps_16 from "../img/asp_img/icon_asp_16.webp";

import icon_aps_17 from "../img/asp_img/icon_asp_17.webp";
import icon_aps_18 from "../img/asp_img/icon_asp_18.webp";
import icon_aps_19 from "../img/asp_img/icon_asp_19.webp";
import icon_aps_20 from "../img/asp_img/icon_asp_20.webp";

import icon_aps_21 from "../img/asp_img/icon_asp_21.webp";
import icon_aps_22 from "../img/asp_img/icon_asp_22.webp";
import icon_aps_23 from "../img/asp_img/icon_asp_23.webp";
import icon_aps_24 from "../img/asp_img/icon_asp_24.webp";

const cardData: CardDataService[] = [
  // Migration in Armenia
  {
    title: "Migration in Armenia",
    text: "Seeking assistance with migration to Armenia? We've got you covered! From work permits to legal documentation, we handle it all. Simplify your relocation process with our seamless solutions. Let's make your move stress-free and hassle-free. Get started today!",
    imgSrc: migrationImg,
    m_text:
      "Exploring the possibility of migrating to Armenia? Our specialized services cater to all aspects of the migration process, ensuring a smooth transition for you and your family. From securing work permits to handling all your legal documentation, our experts are here to facilitate every step of your journey to this culturally rich and scenic country.",
    fields: {
      visaConsultation: [
        "Visa Strategy and Planning",
        "Personalized visa type selection",
        "Detailed guidance through the application process",
        "Custom document preparation and verification",
      ],
      relocationAssistance: [
        "Comprehensive Relocation Services",
        "Registration and residency assistance",
        "Advisory on local healthcare and educational facilities",
        "Language and cultural integration programs",
      ],
      documentTranslation: [
        "Document Handling and Legal Services",
        "Accurate and certified translations",
        "Document legalization and notarization",
        "Procurement of legal and regulatory documents",
      ],
      legalSupport: [
        "Full-Spectrum Legal Assistance",
        "Legal consultations tailored to migration issues",
        "Document preparation and legal review",
        "Legal representation and liaison with authorities",
      ],
      icon_aps: [icon_aps_1, icon_aps_2, icon_aps_3, icon_aps_4],
    },
    id: 1,
  },

  // Opening a Company
  {
    title: "Opening a Company",
    text: "Ready to establish your business in Armenia? Look no further! We streamline the process from start to finish. From company registration to legal compliance, we've got you covered. Let's turn your business dream into reality. Start your journey to success in Armenia today!",
    imgSrc: openingCompanyImg,
    m_text:
      "Launching a business in Armenia? Our services provide comprehensive support for entrepreneurs aiming to establish or expand their business presence in Armenia. From navigating the complexities of company registration to ensuring legal compliance, our experts are committed to turning your entrepreneurial dreams into reality.",
    fields: {
      visaConsultation: [
        "Business Formation and Setup",
        "Company registration and legal formalities",
        "Guidance on compliance and regulatory requirements",
        "Strategic planning and consultation",
      ],
      relocationAssistance: [
        "Market Entry Strategy",
        "Analysis of market conditions and opportunities",
        "Tailored entry strategy consulting",
        "Operational setup and support",
      ],
      documentTranslation: [
        "Legal Requirements and Compliance",
        "Navigational aid through Armenian business laws",
        "Compliance checks and company legal health audit",
        "Legal advisory and continuous support",
      ],
      legalSupport: [
        "Entrepreneurial Support Services",
        "Business planning and development",
        "Networking and local partnership facilitation",
        "Ongoing business consultation and support",
      ],
      icon_aps: [icon_aps_5, icon_aps_6, icon_aps_7, icon_aps_8],
    },
    id: 2,
  },

  // Citizenship of Armenia
  {
    title: "Citizenship of Armenia",
    text: "Interested in obtaining citizenship in Armenia? We're here to assist you every step of the way. From navigating citizenship requirements to completing the application process, we ensure a smooth and efficient journey. Let us help you achieve your goal of becoming a citizen of Armenia. Get started with us today!",
    imgSrc: citizenshipImg,
    m_text:
      "Considering becoming an Armenian citizen? Our dedicated team guides you through the intricacies of the citizenship application process in Armenia. From understanding the legal requirements to submitting a well-prepared application, we are here to ensure your path to citizenship is clear and straightforward.",
    fields: {
      visaConsultation: [
        "Citizenship Consultation",
        "Expert advice on eligibility and requirements",
        "Personalized application process assistance",
        "Support in dual citizenship scenarios",
      ],
      relocationAssistance: [
        "Documentation and Legal Support",
        "Assistance with all required documentation",
        "Legal advice on documentation and procedures",
        "Document authentication and submission",
      ],
      documentTranslation: [
        "Legal Representation",
        "Representation in front of governmental agencies",
        "Handling of legal issues related to citizenship",
        "Legal support for appeals or complex cases",
      ],
      legalSupport: [
        "Integration and Cultural Orientation",
        "Cultural orientation programs",
        "Integration assistance into Armenian society",
        "Language training and societal norms education",
      ],
      icon_aps: [icon_aps_9, icon_aps_10, icon_aps_11, icon_aps_12],
    },
    id: 3,
  },

  // Residence permit in Armenia
  {
    title: "Residence permit in Armenia",
    text: "Ready to secure your residence permit in Armenia? Look no further! We simplify the entire process from beginning to end. From initial paperwork to navigating legal requirements, we're here to support you every step of the way. Let's transform your relocation dream into reality. Begin your journey towards residency in Armenia today!",
    imgSrc: residencePermitImg,
    m_text:
      "Need a residence permit in Armenia? Our team offers expert assistance in securing your Armenian residence permit, simplifying the process from initial application to final approval. Whether you’re looking to study, work, or settle, we provide tailored support to meet your specific needs in navigating the local bureaucratic landscape.",
    fields: {
      visaConsultation: [
        "Residence Permit Application",
        "Guidance on selecting the appropriate permit type",
        "Complete assistance in the application process",
        "Expert help in gathering and preparing necessary documents",
      ],
      relocationAssistance: [
        "Local Integration Assistance",
        "Help with finding housing and settling in",
        "Consultations on local amenities and services",
        "Support in adjusting to new cultural environments",
      ],
      documentTranslation: [
        "Legal Aid for Residency Issues",
        "Legal consultations specific to residency",
        "Preparation and review of all required legal documents",
        "Legal representation in administrative proceedings",
      ],
      legalSupport: [
        "Community Support and Networking",
        "Introduction to expat and local communities",
        "Networking events and community building",
        "Cultural exchange and social integration activities",
      ],
      icon_aps: [icon_aps_13, icon_aps_14, icon_aps_15, icon_aps_16],
    },
    id: 4,
  },

  // Applying for a Visa
  {
    title: "Applying for a Visa",
    text: "Ready to apply for your visa to Europe or America? Look no further! We simplify the process, whether you're exploring Europe's culture or pursuing opportunities in the USA. From documentation assistance to expert guidance, we ensure a seamless experience. Let's make your travel aspirations a reality. Start your visa application journey today!",
    imgSrc: visaImg,
    m_text:
      "Planning to travel abroad? Our visa application services are designed to help you navigate the complexities of applying for visas to Europe, America, and beyond. With expert guidance and comprehensive support, we ensure your application process is handled efficiently, maximizing your chances for approval.",
    fields: {
      visaConsultation: [
        "Visa Guidance and Planning",
        "In-depth analysis of visa requirements",
        "Strategic advice on visa type and application timing",
        "Assistance with complex visa cases",
      ],
      relocationAssistance: [
        "Application Process Assistance",
        "Step-by-step guidance through the visa application",
        "Document preparation and submission",
        "Appointment scheduling and follow-up",
      ],
      documentTranslation: [
        "Document Preparation and Handling",
        "Professional preparation of all required documents",
        "Document verification and correction",
        "Handling of special documents like invitations or sponsor letters",
      ],
      legalSupport: [
        "Travel and Consultation Services",
        "Pre-travel consultation and planning",
        "Post-visa travel arrangements",
        "Advice on travel insurance and health precautions",
      ],
      icon_aps: [icon_aps_17, icon_aps_18, icon_aps_19, icon_aps_20],
    },
    id: 5,
  },

  // Business management in Armenia
  {
    title: "Business management in Armenia",
    text: "Looking to navigate business management in Armenia? You're in the right place! We empower entrepreneurs with knowledge and tools for success. From strategic planning to operational efficiency, we offer comprehensive support. Whether starting anew or optimizing, we're here to help. Let's unlock your business's potential in Armenia!",
    imgSrc: businessManagementImg,
    m_text:
      "Seeking to master the art of business management in Armenia? Our expert team offers guidance and tools to help entrepreneurs at every stage of their business journey. From the inception of a business idea to achieving operational efficiency and market success, we provide strategic insights and practical solutions that cater to the unique challenges of the Armenian market.",
    fields: {
      visaConsultation: [
        "Strategic Business Planning",
        "Development of business strategies tailored to Armenian market",
        "Consultations on market entry and expansion",
        "Business model optimization and profitability analysis",
      ],
      relocationAssistance: [
        "Operational Support and Efficiency",
        "Assistance with operational setup and management",
        "Streamlining of business processes",
        "Technology and automation solutions",
      ],
      documentTranslation: [
        "Compliance and Legal Services",
        "Guidance on local business laws and regulations",
        "Compliance audits and risk management",
        "Ongoing legal and regulatory support",
      ],
      legalSupport: [
        "Growth Facilitation and Support",
        "Market research and competitive analysis",
        "Customer acquisition and retention strategies",
        "Support for scaling operations and entering new markets",
      ],
      icon_aps: [icon_aps_21, icon_aps_22, icon_aps_23, icon_aps_24],
    },
    id: 6,
  },
];

export default cardData;
