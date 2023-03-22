import React from "react";
import {
  MdOutlineCarpenter,
  MdOutlineFoundation,
  MdOutlineLayers,
} from "react-icons/md";

const servicesData = [
  {
    id: 1,
    icon: <MdOutlineCarpenter size="2.8rem" />,
    title: "Jasa Cutting",
    description:
      "Seperti plat, akrilik, PVC, MDF metahan tanpa proses finishing",
  },
  {
    id: 2,
    icon: <MdOutlineFoundation size="2.8rem" />,
    title: "Las & Konstruksi",
    description:
      "Pembuatan interior/exterior pintu pagar, railing tangga, kanopi, plafon dll.",
  },
  {
    id: 3,
    icon: <MdOutlineLayers size="2.8rem" />,
    title: "Sketsel & Plat Instan",
    description:
      "Pembuatan sketsel siap pakai ataupun instan dengan finishing terbaik",
  },
];

const Services = () => {
  return (
    <section className="px-14 py-24">
      <div className="container px-5 mx-auto justify-center items-center">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="text-base text-main-color font-bold title-font uppercase mb-3">
            Layanan Yang Tersedia
          </h2>
          <h1 className="sm:text-3xl text-3xl font-bold font-mulish title-font mb-4 text-dark-main">
            Kami Memberikan Pelayanan Terbaik
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {servicesData.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="xl:w-1/5 lg:w-1/2 md:w-full py-6 md:border-l-2 md:border-line px-8"
            >
              <div className="inline-flex items-center justify-center rounded-none mb-2">
                {icon}
              </div>
              <h2 className="text-xl sm:text-xl text-dark-main font-bold title-font mb-1">
                {title}
              </h2>
              <p className="leading-relaxed text-sm text-gray font-medium">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
