const promotions = [
  {
    title: "Free",
    price: 0,
    items: [
      "30 users included",
      "15 GB of storage",
      "Phone and email support",
      "Help center access"
    ],
    isYearly: false,
    action: {
      name: "sign up",
      url: "#",
      isOutline: true
    }
  },
  {
    title: "Pro",
    price: 30,
    items: [
      "30 users included",
      "15 GB of storage",
      "Priority email support",
      "Phone and email support"
    ],
    isYearly: true,
    action: {
      name: "Getting started",
      url: "#",
      isOutline: false
    }
  },
  {
    title: "Enterprise",
    price: 26,
    items: [
      "30 users included",
      "Phone and email support",
      "15 GB of storage",
      "Phone and email support"
    ],
    isYearly: true,
    action: {
      name: "Contact Us",
      url: "#",
      isOutline: false
    }
  }
];
export default promotions;
