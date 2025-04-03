import image from '../../assets/nature.jpg'

export const Section8 = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-surface p-8 md:p-12 w-[60vw] text-center shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Land Acknowledgement</h1>
        <p className="text-secondary mt-4 leading-relaxed text-md md:text-lg">
          Bow Valley College aims to uphold the intention of the numbered friendship treaties
          from the perspective of Indigenous Peoples. As an education institution in Treaty 7
          territory, it is our responsibility to pursue a deeper understanding of this Treaty,
          so that we can respect and honour its terms, and respect Indigenous Peoples’ legal
          and inherent rights. As a college, we know we have more to learn, and that there is
          more we can do to deepen our capacity to work alongside Indigenous communities in
          reciprocal ways.
        </p>
        <p className="text-secondary mt-4 leading-relaxed text-md md:text-lg">
          We acknowledge the Blackfoot Confederacy: which includes the Siksika, Kainai,
          Piikani, and Amskapi Piikani First Nations; we acknowledge the Îyâxe Nakoda: which
          includes the Goodstoney, Chiniki, and Bearspaw First Nations; and we acknowledge
          the Tsuut’ina First Nation.
        </p>
        <p className="text-secondary mt-4 leading-relaxed text-md md:text-lg">
          We also acknowledge the historical Northwest Métis homeland and the Otipemisiwak
          Métis Government of Alberta, districts 4, 5, and 6 in Battle River territory.
        </p>
        <p className="text-secondary mt-4 leading-relaxed text-md md:text-lg">
          We acknowledge and express our gratitude to the Indigenous caretakers of this land,
          and we join all Nations in celebrating the unique histories, traditions, and
          contributions of Indigenous Peoples as we continue our journey of reconciliation
          together.
        </p>
      </div>
    </div>
  );
};

