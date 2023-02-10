import "./EmployeeDetail.css";

const EmployeeDetail = ({ employeeDetail }) => {
  return (
    <div className="employee-details-page">
      <div className="employees-details">
        <img
          src={employeeDetail.avatar}
          alt={
            employeeDetail.avatar === null
              ? ""
              : `Avatar of ${employeeDetail.name}`
          }
          className="avatar"
        />
        <div className="employee-info">
          <div className="user-name">{employeeDetail.name} </div>
          <strong className="question-count">
            Number of questions the employee asked:{" "}
            <p>{employeeDetail.createdQuestions}</p>
          </strong>
          <strong className="answer-count">
            Number of questions the employee answered:{" "}
            <p>{employeeDetail.answeredQuestions}</p>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
