import FormHeader from '../common/FormHeader';
import ButtonGroup from '../common/ButtonGroup';
import CustomFormField from '../customFormField';
// const EditNotice = ({ handleEditForm, id, content, title, getCheckboxOptions, currentDate }) => {
//   return (
//     <div className="form-overlay">
//       <div className="form-design">
//         <FormHeader handleForm={handleEditForm} title={'Edit Notice'} />
//         <form>
//           <CustomFormField
//             name={'NoticeId'}
//             label={'Notice Id'}
//             placeholder={'Enter the Notice Id'}
//             type={'text'}
//             value={id}
//           />
//           <CustomFormField
//             name={'Title'}
//             label={'Title'}
//             placeholder={'Enter the title of notice'}
//             type={'text'}
//             value={title}
//           />
//           <CustomFormField
//             name={'Description'}
//             label={'Description'}
//             placeholder={'Enter the Notice Description'}
//             type={'text'}
//             value={content}
//           />
//           <div className="check-group">
//             <p>Who is your notice directed to?</p>
//             <div className="check-group-item">{getCheckboxOptions()}</div>
//           </div>

//           <CustomFormField label={'Date'} name={'date'} type={'date'} value={currentDate} />
//           <ButtonGroup handleClose={handleEditForm} />
//         </form>
//       </div>
//     </div>
//   );
// };
// export default EditNotice;
import { useState } from 'react';
import { useToken } from '../../context/TokenContext';
// import FormHeader from '../common/FormHeader';
// import ButtonGroup from '../common/ButtonGroup';
// import CustomFormField from '../customFormField';

const EditNotice = ({ handleEditForm, nid, content, title, getCheckboxOptions, currentDate, handleUpdateForm }) => {
  const { id } = useToken();
  const [noticeTitle, setNoticeTitle] = useState(title);
  const [noticeContent, setNoticeContent] = useState(content);
  const [directedTo, setDirectedTo] = useState([]);
  const [dateUpdated, setDateUpdated] = useState(currentDate);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setDirectedTo((prev) => [...prev, value]);
    } else {
      setDirectedTo((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleEditFormSubmit = (e, nid) => {
    e.preventDefault();
    const updatedNotice = {
      NoticeId: nid,
      title: noticeTitle,
      description: noticeContent,
      directedTo: directedTo, // Array of selected checkboxes
      dateUpdated: new Date().toISOString(),
      creatorId: id,
    };
    console.log('Updated Notice:', updatedNotice);
    console.log(JSON.stringify(updatedNotice));
    handleEditForm();
    handleUpdateForm(updatedNotice);
  };

  return (
    <div className="form-overlay">
      <div className="form-design">
        <FormHeader handleForm={handleEditForm} title={'Edit Notice'} />
        <form onSubmit={handleEditFormSubmit}>
          <CustomFormField
            name={'NoticeId'}
            label={'Notice Id'}
            placeholder={'Enter the Notice Id'}
            type={'text'}
            value={nid}
            disabled
          />
          <CustomFormField
            name={'Title'}
            label={'Title'}
            placeholder={'Enter the title of notice'}
            type={'text'}
            value={noticeTitle}
            onChange={(e) => setNoticeTitle(e.target.value)}
          />

          <CustomFormField
            name={'Description'}
            label={'Description'}
            placeholder={'Enter the Notice Description'}
            type={'text'}
            value={noticeContent}
            onChange={(e) => setNoticeContent(e.target.value)}
          />

          <div className="check-group">
            <p>Who is your notice directed to?</p>
            <div className="check-group-item">{getCheckboxOptions(handleCheckboxChange)}</div>
          </div>
          <CustomFormField
            label={'Date Updated'}
            name={'dateUpdated'}
            type={'date'}
            value={dateUpdated}
            onChange={(e) => setDateUpdated(e.target.value)}
          />
          <ButtonGroup handleClose={handleEditForm} />
        </form>
      </div>
    </div>
  );
};

export default EditNotice;
