import "./Menu.css";

const menuData = [
  {
    category: "Breakfast specials",
    items: [
      "Puttu & Kadala curry",
      "Appam & vegetable stew",
      "Idiyappam & egg curry",
      "Palappam & chicken curry",
      "Kallappam",
      "Nadan dosa with coconut chutney",
    ],
  },
  {
    category: "Vegetarian main course",
    items: [
      "Avial",
      "Thoran (beans, cabbage, or beetroot)",
      "Olan",
      "Kaalan",
      "Erissery",
      "Sambar",
      "Pulissery",
      "Theeyal",
    ],
  },
  {
    category: "Non-vegetarian specials",
    items: [
      "Kerala fish curry (meen curry)",
      "Karimeen pollichathu",
      "Kappa & meen curry",
      "Nadan kozhi curry",
      "Kerala beef roast",
      "Malabar mutton curry",
      "Prawns roast",
      "Chemmeen curry (prawn curry)",
    ],
  },
  {
    category: "Malabar specials",
    items: [
      "Malabar chicken biryani",
      "Kozhikode dum biryani",
      "Pathiri",
      "Porotta & beef roast",
      "Aleesa (haleem)",
      "Unnakaya",
    ],
  },
  {
    category: "Seafood section",
    items: [
      "Karimeen fry",
      "Ayala fry (mackerel)",
      "Neymeen pollichathu",
      "Squid roast (koonthal roast)",
      "Crab masala",
      "Prawn coconut fry",
    ],
  },
  {
    category: "Traditional Kerala meals",
    items: [
      "Kerala sadya (served on banana leaf)",
      "Rice",
      "Sambar",
      "Rasam",
      "Avial",
      "Thoran",
      "Olan",
      "Pachadi",
      "Pickles",
      "Pappadam",
      "Payasam",
    ],
  },
  {
    category: "Snacks",
    items: [
      "Pazham pori (banana fritters)",
      "Parippu vada",
      "Uzhunnu vada",
      "Unniyappam",
      "Ela ada",
      "Kozhukkatta",
    ],
  },
  {
    category: "Desserts",
    items: [
      "Palada payasam",
      "Ada pradhaman",
      "Parippu payasam",
      "Chakka payasam (jackfruit payasam)",
      "Tender coconut payasam",
    ],
  },
];

const signatureDishes = [
  "Karimeen pollichathu",
  "Kappa & meen curry",
  "Malabar chicken biryani",
  "Appam & stew",
  "Kerala sadya",
  "Puttu & kadala curry",
  "Kerala beef roast & porotta",
  "Chemmeen roast",
  "Palada payasam",
  "Pazham pori & chaya",
];

function Menu() {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <p className="menu-intro">
        A taste of Kerala — from traditional sadya to coastal seafood,
        every dish is rooted in heritage.
      </p>

      <div className="signature-card">
        <h2>Signature dishes</h2>
        <ol className="signature-list">
          {signatureDishes.map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ol>
      </div>

      <div className="menu-grid">
        {menuData.map((section) => (
          <div className="menu-card" key={section.category}>
            <h2>{section.category}</h2>
            <ul>
              {section.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;