import { FilterBtn } from "../FilterBtn"

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Mythological",
    "Animal",
    "Robot",
    "Poopybutthole",
    "Disease",
    "Cronenberg",
    "Planet",
    "Unknown",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed" type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
        >Especies</button>
      </h2>
      <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      arial-labelledby="headingTwo"
      data-bs-parent="#accordinExample"
      >
      <div className="accordion-body d-flex flex-wrap gap-3">
        {species.map((item,index)=> {
          return (
            <FilterBtn
              name="species"
              index={index}
              key={index}
              updatePageNumber={updatePageNumber}
              task={updateSpecies}
              input={item}
            />
          )
        })}
      </div>
      </div>
    </div>
  )
}

export { Species }
