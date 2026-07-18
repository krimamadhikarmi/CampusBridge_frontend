const CustomFormField = ({ label, name, placeholder, type, value, cname, onChange, readOnly }) => {
  return (
    <>
      <p id="login-label">
        <label htmlFor={cname}>{label}</label>
      </p>
      <input
        id={cname}
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
