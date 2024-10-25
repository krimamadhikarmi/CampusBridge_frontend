const CustomFormField = ({ label, name, placeholder, type, value, cname, onChange,readOnly}) => {
  return (
    <>
      <p id="login-label">
        <label for={cname}>{label}</label>
      </p>
      <input
        className="login-field"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </>
  );
};
export default CustomFormField;
