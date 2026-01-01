import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-linear-to-br from-[#0a0f13] via-[#122c3d] to-[#1b3e4b] text-gray-200">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center text-white drop-shadow-lg">
        Projects
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto px-4"
      >
        {projects.map((proj) => (
          <SwiperSlide key={proj.id}>
            <ProjectCard project={proj} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
