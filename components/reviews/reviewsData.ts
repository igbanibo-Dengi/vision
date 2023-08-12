interface Review {
  name: string;
  imagePath: string;
  reviewText: string;
  position: string;
}



const reviewsData: Review[]  = [
  {
    name: "John Smith",
    imagePath: require("../../public/reviewer-1.jpg"),
    reviewText:
      "Outstanding service and support! I couldn't be happier with the results.",
    position: "CEO, Tech Innovations",
  },
  {
    name: "Jane Doe",
    imagePath: require("../../public/reviewer-2.jpg"),
    reviewText:
      "Impressive web design that truly captured the essence of our brand.",
    position: "Marketing Director, Creative Co.",
  },
  {
    name: "Michael Johnson",
    imagePath: require("../../public/reviewer-3.jpg"),
    reviewText:
      "Flawless e-commerce solutions that skyrocketed our sales. Highly recommended.",
    position: "Owner, Trendy Treasures",
  },
  {
    name: "Emily Davis",
    imagePath: require("../../public/reviewer-4.jpg"),
    reviewText:
      "Exceptional hosting that ensured our website never missed a beat.",
    position: "CTO, Digital Dynamics",
  },
  {
    name: "David Brown",
    imagePath: require("../../public/reviewer-5.jpg"),
    reviewText:
      "The digital marketing strategies provided remarkable ROI. Thrilled!",
    position: "Marketing Manager, Global Connect",
  },
  {
    name: "Olivia White",
    imagePath: require("../../public/reviewer-6.jpg"),
    reviewText:
      "A game-changer for our online presence. The results speak for themselves.",
    position: "Founder, Health Hub",
  },
  {
    name: "William Green",
    imagePath: require("../../public/reviewer-7.jpg"),
    reviewText:
      "Innovative designs combined with seamless functionality. A winning combination.",
    position: "Art Director, Studio Spectrum",
  },
];


export default reviewsData;