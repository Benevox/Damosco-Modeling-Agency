import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";

const Featured = () => {
  const featureRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
  useGsapFeatureRightShutterUnveil(featureRightShutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Featured Models</h2> {/* Updated title */}
      <div className="features">
        <div className="feature-l">
          <span className="feature-text">Meet Luna</span> {/* More descriptive text */}
          <img
            src="https://images.pexels.com/photos/2829373/pexels-photo-2829373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL - find a professional headshot or portfolio image
            alt="[Model Name 1] - OnlyFans Model" // Alt text is more descriptive
          />
          <span
            className="feature-shutter-l"
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className="feature-r">
          <span className="feature-text">Meet Siren</span> {/* More descriptive text */}
          <img
            src="https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL - find a professional headshot or portfolio image
            alt="[Model Name 2] - OnlyFans Model" // Alt text is more descriptive
          />
          <span
            className="feature-shutter-r"
            ref={featureRightShutterRef}
          ></span>
        </div>
      </div>
      <p className="featured-description"> {/* Added a short description */}
        Showcasing some of the talented creators we represent.  Connect with them and discover their exclusive content.
      </p>
    </section>
  );
};

export default Featured;