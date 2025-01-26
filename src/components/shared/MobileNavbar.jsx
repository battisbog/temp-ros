const MobileNavbar = ({ menuItems }) => {
  return (
    <div className="lg:hidden bg-primary p-4">
      <ul className="flex flex-col space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              className="block text-white font-bold text-xl hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
