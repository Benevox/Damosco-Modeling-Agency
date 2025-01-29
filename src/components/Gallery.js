import GalleryItem from "./GalleryItem";

const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Elevated Content Creation",
    category: "Content",
    description: "High-quality photos and videos tailored for OnlyFans success.",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/6963585/pexels-photo-6963585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Strategic Marketing & Promotion",
    category: "Marketing",
    description: "Reaching a wider audience and growing your fanbase.",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/12668238/pexels-photo-12668238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Engaging Fan Interactions",
    category: "Engagement",
    description: "Building meaningful connections with your subscribers.",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/30419974/pexels-photo-30419974/free-photo-of-wooden-hand-holding-a-red-heart-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Professional Support & Management",
    category: "Management",
    description: "Expert guidance and support to maximize your potential.",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/30391273/pexels-photo-30391273/free-photo-of-fan-spread-of-euro-banknotes-in-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
    title: "Monetization Strategies",
    category: "Monetization",
    description: "Optimizing your OnlyFans profile for increased revenue.",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/7876388/pexels-photo-7876388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
    title: "Data-Driven Insights",
    category: "Analytics",
    description: "Understanding your audience and improving your content strategy.",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="section-title">What We Offer</h2> {/* Updated title */}
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;