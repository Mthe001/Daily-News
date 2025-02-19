import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { IoPeopleCircleOutline, IoPersonOutline, IoStarSharp } from "react-icons/io5";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const Statistic = () => {
  const axiosPublic = useAxiosPublic();

  const { data = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-users-stat");
      return data;
    },
  });

  const normal = data.filter((item) => item.role === "user");
  const premium = data.filter((item) => item.role === "premium" || item.role === "admin");

  const stats = {
    totalUsers: data.length,
    normalUsers: normal.length,
    premiumUsers: premium.length,
  };
  const { totalUsers, normalUsers, premiumUsers } = stats;

  const { ref: totalUsersRef, inView: totalUsersInView } = useInView({ triggerOnce: true, threshold: 1 });
  const { ref: normalUsersRef, inView: normalUsersInView } = useInView({ triggerOnce: true, threshold: 1 });
  const { ref: premiumUsersRef, inView: premiumUsersInView } = useInView({ triggerOnce: true, threshold: 1 });

  return (
    <div className="mb-10 flex flex-col justify-center items-center bg-background border-2 mx-9 rounded-lg p-6">
      {/* Header */}
      <h1 className="tracking-[0.5rem] py-10 font-bold text-white uppercase text-center">
        <div className="z-10 flex items-center justify-center">
          <div className={cn("group rounded-full lg:text-4xl md:text-3xl text-xl transition-all ease-in hover:cursor-pointer")}>
            <AnimatedShinyText className="inline-flex text-yellow-400 items-center justify-center px-4 py-1 transition ease-out hover:text-yellow-500">
              <span>User Insights</span>
            </AnimatedShinyText>
          </div>
        </div>
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Total Users Card */}
        <div
          ref={totalUsersRef}
          className="bg-gradient-to-r from-purple-900 to-purple-600 p-8 flex flex-col items-center rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-2"
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full h-20 w-20 flex items-center justify-center mb-4 shadow-lg">
            <IoPeopleCircleOutline size={40} />
          </div>
          <h2 className="text-xl font-bold text-white">All Platform Users</h2>
          {totalUsersInView && (
            <CountUp end={totalUsers} duration={2.5} className="text-4xl font-extrabold text-yellow-300" />
          )}
        </div>

        {/* Normal Users Card */}
        <div
          ref={normalUsersRef}
          className="bg-gradient-to-r from-green-900 to-green-500 p-8 flex flex-col items-center rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-2"
        >
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full h-20 w-20 flex items-center justify-center mb-4 shadow-lg">
            <IoPersonOutline size={40} />
          </div>
          <h2 className="text-xl font-bold text-white">Standard Members</h2>
          {normalUsersInView && (
            <CountUp end={normalUsers} duration={2.5} className="text-4xl font-extrabold text-yellow-300" />
          )}
        </div>

        {/* Premium Users Card */}
        <div
          ref={premiumUsersRef}
          className="bg-gradient-to-r from-yellow-900 to-yellow-500 p-8 flex flex-col items-center rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full h-20 w-20 flex items-center justify-center mb-4 shadow-lg">
            <IoStarSharp size={40} />
          </div>
          <h2 className="text-xl font-bold text-white">Elite Members</h2>
          {premiumUsersInView && (
            <CountUp end={premiumUsers} duration={2.5} className="text-4xl font-extrabold text-yellow-300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
