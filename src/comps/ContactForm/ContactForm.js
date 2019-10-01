import React from "react";

export const ContactForm = () => {
  const formData = [
    { name: "name", placeholder: "Nom complet", required: true },
    {
      name: "email",
      type: "email",
      placeholder: "Adresse email",
      required: true
    },
    { name: "phone", placeholder: "Numéro de téléphone", required: true },
    {
      name: "subject",
      type: "select",
      label: "Objet",
      required: true,
      options: [
        "Inscrire sa voiture pour le lancement",
        "Reservation de voiture pour le lancement",
        "En savoir plus",
        "Autre"
      ]
    },
    {
      name: "details",
      type: "textarea",
      placeholder: "Donnez nous plus de details",
      required: true
    }
  ];

  const [contactData, useContactData] = React.useState();

  const onChange = e => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const onValidate = () => {
    for (const itemData of formData) {
      console.log(contactData);
      if (itemData.required && !contactData[itemData.name]) {
        console.log("here good", itemData.name);
        alert(`Le champ ${itemData.name} n'est pas rempli`);
        return null;
      }
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onValidate(contactData);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: 700,
        padding: 20,
        margin: "auto"
      }}
    >
      {formData.map(itemData => (
        <InputHandler {...itemData} onChange={onChange} />
      ))}
      <button>Envoyer</button>
    </form>
  );
};

const InputHandler = ({ type, ...inputData }) => {
  switch (type) {
    case "textarea":
      return <textarea {...inputData}></textarea>;
    case "select":
      const selectOptions = inputData.options || [];
      return (
        <div>
          {inputData.label && <label>{inputData.label}</label>}
          <select {...inputData}>
            {selectOptions.map(selectOption => {
              const { value, text } =
                typeof selectOption === "string"
                  ? { value: selectOption, text: selectOption }
                  : selectOption;
              return <option value={value}> {text}</option>;
            })}
          </select>
        </div>
      );
    default:
      return <input type="text" {...inputData} />;
  }
};
