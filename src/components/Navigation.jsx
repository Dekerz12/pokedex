import { NavLink, Outlet } from "react-router-dom";
const routes = [
  "/gen-i",
  "/gen-ii",
  "/gen-iii",
  "/gen-iv",
  "/gen-v",
  "/gen-vi",
  "/gen-vii",
  "/gen-viii",
  "/gen-ix",
];

function convertToRoman(num) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var str = "";

  for (var i of Object.keys(roman)) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
}
export default function Navigation() {
  return (
    <div className="font-body ">
      <h1 className="text-center font-bold text-5xl py-12">Pokedex</h1>
      <h2 className="text-center font-bold text-xl text-blue-500">
        Select Generation:
      </h2>
      <div className="text-center">
        <nav className="font-bold inline-flex flex-wrap justify-center shadow-md mx-4 md:my-6 my-12  ">
          {routes.map((route, i) => {
            return (
              <NavigationLink path={route}>
                {convertToRoman(i + 1)}
              </NavigationLink>
            );
          })}
        </nav>
      </div>

      <Outlet />
    </div>
  );
}

function NavigationLink({ path, children }) {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? "px-5 pt-4"
          : isActive
          ? "px-5 pt-4 border-b-2 border-blue-500"
          : "hover:bg-blue-500 hover:bg-opacity-40 px-5 pt-4 md:text-lg"
      }
      to={path}
    >
      {children}
    </NavLink>
  );
}
