import '../styles/common.css'
const PageHeader = ({pageTitle}) => {
  return (
    <div className="page-header">
      <h2>{pageTitle}</h2>
    </div>
  );
};
export default PageHeader;