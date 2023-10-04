const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs mt-10 gap-2">
      <a
        onClick={() => setActiveTab("tools_description")}
        className={`tab tab-bordered ${
          activeTab === "tools_description" && "tab-active"
        }`}
      >
        Tools Description
      </a>
      <a
        onClick={() => setActiveTab("reviews")}
        className={`tab tab-bordered ${
          activeTab === "reviews" && "tab-active"
        }`}
      >
        Reviews
      </a>
    </div>
  );
};

export default Tabs;
