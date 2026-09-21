const attributes = [
    { label: "Material", value: "100% Cotton" },
    { label: "Fit", value: "Relaxed / Oversized" },
    { label: "Collar", value: "Camp (open) collar" },
    { label: "Sleeve", value: "Short sleeve" },
    { label: "Pattern", value: "Vertical stripe" },
    { label: "Color", value: "White / Navy" },
    { label: "Available Sizes", value: "S, M, L, XL, XXL" },
    { label: "Care", value: "Machine wash cold, iron low" },
    { label: "SKU", value: "PW-STR-1975" },
    { label: "Country of Origin", value: "Türkiye" },
  ];
  
  function AdditionalTab() {
    return (
      <table className="additional-info">
        <tbody>
          {attributes.map((attr) => (
            <tr key={attr.label}>
              <th scope="row">{attr.label}</th>
              <td>{attr.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default AdditionalTab;