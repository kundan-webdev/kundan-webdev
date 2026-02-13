const ExperienceItem = ({ role, company, year }) => {
  return (
    <div className="mb-4">
      <h4 className="font-medium">{role}</h4>
      <p className="text-sm text-gray-500">
        {company} • {year}
      </p>
    </div>
  );
};

export default ExperienceItem;
