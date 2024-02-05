const BasicInfo = ({ basicInfo }) => {
  return (
    <div>
      <p className="font-medium mt-5">Basic Info</p>
      <table className="table w-fit border mt-2 ml-12">
        {Object.entries(basicInfo).map(([key, value], i) => (
          <tbody>
            <tr>
              <td className="border">{key}</td>
              <td className="border">{value}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default BasicInfo;
