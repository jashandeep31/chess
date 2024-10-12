import { contributers } from "../constants";

function footer() {
  return (
    <>
      <div className="md:flex items-center justify-around">
        {/* left side */}
        <div className="flex items-center justify-center gap-10 m-10">
          <div className="md:border-r-4 md:p-5 border-green-500">
            <h1 className="text-xl font-bold text-green-gradient">
              Contributers:
            </h1>
          </div>
          <div>
            <ul>
              {contributers.map((contri) => (
                <li key={contri.name}>{contri.name}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* right side */}
        <h1 className="text-center my-5">
          © 2024 Chess. All rights reserved. <br /> Designed with passion by our
          contributors.
        </h1>
      </div>
    </>
  );
}

export default footer;
