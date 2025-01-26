import stuff from "../../../assets/images/roster/coach.jpg";
export default function CoachingStuff() {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-4xl py-5 font-bold text-black text-start">
          Coaching Staff
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col gap-12 border p-5">
        <div>
          <img className="w-52 h-52 rounded-full" src={stuff} alt="f" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-2xl font-semibold text-gray-500">Head Coach</h1>
          <h1 className="text-lg font-medium text-black">Chris Ralph</h1>
        </div>
      </div>
    </div>
  );
}
