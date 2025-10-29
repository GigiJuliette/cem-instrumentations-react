import './prestations.css';

const allPrestations = [
  {
    imageSrc: "",
    title: "Essais sur micropieux",
    text: [
      "Essais à la rupture et contrôle sur micropieux dans le cadre de bâtiments et / ou ville neuve, également dans le cadre de reprise en sous œuvre.",
      "Réalisation d’essai de traction ou de compression pour un large panel de charge jusqu’à 2100 kN"
    ]
  }
]

function Prestations() {
  allPrestations.map(presta => {
    console.log("/////////")
    console.log('hi from allprestation.map')
    console.log("im supposed to show this -> " + presta)
    console.log("/////////")
    return (
      <article>
        <img src={presta.imageSrc} alt={presta.title} />
        <div>
          <h3>{presta.title}</h3>
          <div class="line"></div>
          {presta.text.map((paragraph) => {
            console.log("/////////")
            console.log("hi from presta.text.map")
            console.log("im supposed to show this -> " + paragraph)
            console.log("/////////")

            return (
              <p>{paragraph}</p>
            )
          })}
        </div>
      </article>
    )
  })
}
export default Prestations