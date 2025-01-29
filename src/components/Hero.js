import { useRef } from "react";
import {
  useGsapShutterUnveil,
  useGsapPhotoDropping,
  useGsapPhotoLevitate,
} from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);
  useGsapPhotoDropping(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);
  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        Damosco <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Models <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1Ref}
          className="photo one"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/19328522/pexels-photo-19328522/free-photo-of-rusia-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photo2Ref}
          className="photo two"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/6577903/pexels-photo-6577903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photo3Ref}
          className="photo three"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/15647643/pexels-photo-15647643/free-photo-of-a-woman-with-an-afro-sitting-on-a-bench-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=600")',
          }}
        ></div>
        <div
          ref={photo4Ref}
          className="photo four"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/17243573/pexels-photo-17243573/free-photo-of-a-woman-in-white-pants-and-a-black-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photo5Ref}
          className="photo five"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/12984886/pexels-photo-12984886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
