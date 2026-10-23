import dataLabImage from "../assets/work/data-lab.webp"
import clearlyImage from "../assets/work/clearly.webp"
import goldbellBorrowersImage from "../assets/work/goldbell-borrowers.webp"
import goldbellCreditOfficeImage from "../assets/work/goldbell-credit-office.webp"

// The client projects from the original portfolio (the Portfolio section on the main branch).
// The resume doesn't cover them, so each description only says what the site visibly is.
export const projects = [
  {
    id: "compliance-station",
    title: "Compliance Station",
    description: "Compliance-management platform from Compliance Data Lab, in English and Japanese.",
    href: "https://cs.c-datalab.com/",
    image: { src: dataLabImage, alt: "Compliance Station home page with the product hero and language switcher" },
  },
  {
    id: "clearly",
    title: "Clearly",
    description: "Canadian online store for glasses, contact lenses and eye exams.",
    href: "https://www.clearly.ca/en-ca",
    image: { src: clearlyImage, alt: "Clearly storefront home page showing seasonal glasses and contacts promotions" },
  },
  {
    id: "goldbell-borrowers",
    title: "Goldbell Borrowers",
    description: "Borrower portal for Goldbell Financial Services.",
    href: "https://goldbell-borrowers.netlify.app",
    image: { src: goldbellBorrowersImage, alt: "Goldbell borrower portal sign-in page" },
  },
  {
    id: "goldbell-credit-office",
    title: "Goldbell Credit Office",
    description: "Credit-officer portal for Goldbell Financial Services.",
    href: "https://goldbell-credit-office.netlify.app",
    image: { src: goldbellCreditOfficeImage, alt: "Goldbell credit-officer portal sign-in page" },
  },
]
