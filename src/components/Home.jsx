const Home = () => {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-full w-full bg-red-600 rounded-br-[60%]"></div>
      </div>

      {/* HERO */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              AMICO Pharmaceuticals
            </h1>
            <h3 className="mt-3 text-3xl font-semibold font-[cursive]">
              For the Health of Humanity
            </h3>
            <p className="mt-4 text-lg">
              Delivering advanced, trusted and affordable pharmaceutical solutions.
            </p>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-xl">
            <img
              src="/image.png"
              alt="AMICO Preview"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 bg-white rounded-xl shadow p-8">
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

      {/* MISSION & VISION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {[
            {
              icon: "fa-bullseye",
              title: "Our Mission",
              text: "To provide safe and effective medicines."
            },
            {
              icon: "fa-eye",
              title: "Our Vision",
              text: "To become a globally trusted pharmaceutical brand."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow text-center">
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
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-8 border-b-4 border-red-600 inline-block">
            Our Focus Areas
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "fa-tablets", text: "Tablet Formulations" },
              { icon: "fa-prescription-bottle-alt", text: "Syrups & Suspensions" },
              { icon: "fa-heartbeat", text: "Critical Care" },
              { icon: "fa-microscope", text: "Research Based" }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow text-center hover:bg-blue-700 hover:text-white transition"
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
