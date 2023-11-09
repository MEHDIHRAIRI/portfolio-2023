import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects, skills } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 max-h-screen">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-s drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <div className="flex gap-10 flex-wrap">
                  <img src={content.image} alt="..." />
                  <div>
                    <div className="flex gap-10">
                      <h2 className="font-bold font-Poppins">
                        {content.title}
                      </h2>
                      {content.skills_content.map((skill, h) => (
                        <img
                          key={h}
                          src={skill.logo}
                          alt={skill.name}
                          className="w-10 h-10 group-hover:scale-125 duration-200 mt-2"
                        />
                      ))}
                    </div>
                    <p className="ml-10 mt-10 inline-grid">
                      {content.description}
                    </p>
                  </div>
                </div>
                <div className="flex  gap-1 mt-2 justify-end">
                  <div className="flex gap-5">
                    {content.links.map((link, j) => (
                      <SocialIcon key={j} url={link.link} />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
