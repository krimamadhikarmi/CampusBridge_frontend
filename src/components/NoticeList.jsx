const NoticeList = ({ index, title, content, category, date }) => {
  return (
    <>
      <div className="notice-number">{index + 1}</div>
      <div className="notice-content">
        <p className="notice-title">{title}</p>
        <p className="notice-data">{content}</p>
        <div className="notice-bottom">
          <p className="notice-category">{category} </p>
          <p className="notice-date">Date:{date}</p>
        </div>
      </div>
    </>
  );
};
export default NoticeList;
