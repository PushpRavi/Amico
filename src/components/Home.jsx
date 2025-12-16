const Home = () => {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/HomeHero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
          {/* Text */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Amico Pharmaceuticals
            </h1>

            <h3
              className="mt-3 text-2xl sm:text-3xl text-green-400"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              For the Health of Humanity
            </h3>

            <p className="mt-4 text-base sm:text-lg text-gray-200">
              Delivering advanced, trusted and affordable pharmaceutical
              solutions.
            </p>
          </div>

          {/* Image */}
          <div
            className="
    bg-white p-1 rounded shadow-xl
    max-w-[200px]
    sm:max-w-[260px]
    md:max-w-[320px]
    lg:max-w-[360px]
    xl:max-w-[420px]
    mx-auto
    mt-6 md:mt-0
  "
          >
            <img
              src="/image.png"
              alt="AMICO Preview"
              className="rounded w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 bg-white rounded-xl shadow p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-blue-700 border-b-4 border-red-600 inline-block mb-4">
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            AMICO Pharmaceuticals Pvt. Ltd. is dedicated to improving healthcare
            outcomes by developing, manufacturing, and delivering high-quality
            pharmaceutical products that meet global standards. Driven by
            science, innovation, and integrity, we create safe, effective, and
            affordable medicines.
          </p>
        </div>
      </section>

      {/* FROM THE MAKERS OF */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-10 border-b-4 border-red-600 inline-block">
            From the Makers of
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Calcimio-Forte MaxCap",
                img: "/medicines/med1.png",
              },
              {
                name: "Kaze Drop",
                img: "/medicines/med2.png",
              },
              {
                name: "Amizyme Drop",
                img: "/medicines/med3.png",
              },
            ].map((med, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <img
                    src={med.img}
                    alt={med.name}
                    className="h-44 sm:h-52 w-full object-contain mb-4"
                  />
                  <h4 className="text-lg font-semibold text-center text-blue-700">
                    {med.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              icon: "fa-bullseye",
              title: "Our Mission",
              text: "To provide safe and effective medicines.",
            },
            {
              icon: "fa-eye",
              title: "Our Vision",
              text: "To become a globally trusted pharmaceutical brand.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-8 rounded-xl shadow text-center"
            >
              <i className={`fas ${item.icon} text-4xl text-red-600 mb-4`}></i>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-8 border-b-4 border-red-600 inline-block">
            Our Focus Areas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "fa-tablets", text: "Tablet Formulations" },
              {
                icon: "fa-prescription-bottle-alt",
                text: "Syrups & Suspensions",
              },
              { icon: "fa-heartbeat", text: "Critical Care" },
              { icon: "fa-microscope", text: "Research Based" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 sm:p-6 rounded-xl shadow text-center hover:bg-blue-700 hover:text-white transition"
              >
                <i className={`fas ${item.icon} text-3xl mb-3`}></i>
                <h4 className="font-semibold">{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
