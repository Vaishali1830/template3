import { Card } from "./Card";

export const Section3 = () => {
  const card1 = [
    {
      title: "By interest",
      description: "Tailor your education to your passions",
      list: [
        "Business",
        "Centre for Entertainment Arts",
        "Technology",
        "Health & Wellness",
        "Community Studies",
      ],
    },
  ];

  const card2 = [
    {
      title: "Program type",
      description: "Select the program type that suits your learning style.",
      list: [
        "Programs, diplomas, post-diplomas and certificates",
        "Extended education",
      ],
    },
  ];

  const card3 = [
    {
      title: "Ready to apply?",
      description: "Follow the steps for your specific profile.",
      list: [
        "I am a first year student",
        "I need academic upgrading",
        "I want professional development",
        "I am an international student",
        "‍I am a transfer student",
      ],
    },
  ];
  return (
    <div className="m-8 bg-surface">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
        <div className="w-[25vw] flex flex-col gap-8 md:m-20">
          <p className="text-4xl font-bold gradient-text">Select your path</p>
          <p className="text-secondary text-lg">
            We make applying to the program of your choice easy.
          </p>
          <p className="text-secondary text-lg">
            Starting college is an exciting journey filled with new
            opportunities and discoveries.
          </p>
          <p className="text-secondary text-lg">
            It’s a time to explore, grow, and shape your future. We’ll be with
            you every step of the way from choosing the right courses to
            celebrating your successes.
          </p>
        </div>
        <Card data={card1} />
        <Card data={card2} />
      </div>

      <div className="mt-8 flex justify-center items-center gap-8 md:ml-108">
        <Card data={card3}/>
        <div className="flex flex-col gap-8 justify-center items-center ml-24">
          <p className="gradient-text text-2xl font-bold">
            Don’t know where to start?
          </p>
          <p className="text-xl text-blue-500 font-semibold">We can help you.</p>
          <button className="btn-primary">+Connect with us</button>
        </div>
      </div>
    </div>
  );
};
