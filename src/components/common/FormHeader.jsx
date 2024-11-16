import CloseButton from "./CloseButton";
import '../../styles/common.css'
const FormHeader = ({handleForm,title}) => {
  return (
    <div className="syllabus-form-header">
     {title}
      <CloseButton toggleBox={handleForm} fill={'#004d4d'} variant={'syllabusform'} />
    </div>
  );
};
export default FormHeader;