import historyimg from "../../assets/images/history/t3f98gf91bonefzv.jpg";

export default function History() {
  return (
    <div className="bg-blue-900 min-h-screen flex justify-center py-10">
      <div className="bg-white w-full max-w-4xl p-6">
        {/* Image Section */}
        <div className="mb-6">
          <img src={historyimg} alt="Team Photo" className="mx-auto" />
        </div>

        {/* Achievements Section */}
        <div className="flex flex-col justify-center items-center text-sm text-black mb-6">
          <p className="mb-4">
            <strong>AMCC Champions</strong> 1997, 1999, 2003, 2007, 2011, 2013,
            2014, 2016, 2018, 2019, 2024
          </p>
          <p className="mb-4">
            <strong>NCAA Tournament</strong> 2003 (Regional Semifinalist), 2007,
            2011, 2013, 2014, 2016, 2018 (Sweet 16), 2019
          </p>
          <p className="mb-4">
            <strong>ECAC Champions</strong> 2009
          </p>
          <p className="mb-4">
            <strong>ECAC Tournament</strong> 2000, 2005, 2008, 2009, 2010, 2012,
            2015, 2017, 2021, 2022, 2023
          </p>
          <p className="mb-4">
            <strong>International Trips</strong> England 1998, Italy 2002,
            Germany 2006, Brazil 2010, Spain 2013, Iceland 2016, Spain 2019,
            Croatia 2022
          </p>
        </div>

        {/* Historical Records Section */}
        <div className="text-sm text-primary">
          <h2 className="text-lg font-bold mb-4">Historical Records</h2>

          {/* First Group */}
          <div className="mb-6">
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2023 Statistics
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2023 Schedule/Results
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2023-24 Top Stories
            </a>
          </div>

          {/* Second Group */}
          <div className="mb-6">
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2022 Statistics
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2022 Schedule/Results
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2022-23 Top Stories
            </a>
          </div>

          {/* Third Group */}
          <div className="mb-6">
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2021 Statistics
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2021 Schedule/Results
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2021-22 Top Stories
            </a>
          </div>

          {/* Fourth Group */}
          <div className="mb-6">
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2020 Schedule/Results
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2020-21 Top Stories
            </a>
          </div>

          {/* Fifth Group */}
          <div className="mb-6">
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2019 Statistics
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2019 Schedule/Results
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2019-20 Top Stories
            </a>
          </div>

          {/* Additional Rows */}
          <div className="mb-6">
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2018 Statistics
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2018 Schedule/Results
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-primary font-semibold underline hover:text-blue-900"
            >
              2018-19 Top Stories
            </a>
          </div>
        </div>
        <div className="mb-6">
          <a
            href="#"
            className="text-primary font-semibold underline hover:text-blue-900"
          >
            1973-1979 Rosters - Schedules/Results - Records{" "}
            <span className="text-black">
              (Provided by alumni of 1973-1979 teams)
            </span>
          </a>{" "}
          |{" "}
        </div>
      </div>
    </div>
  );
}
