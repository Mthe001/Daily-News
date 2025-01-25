
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaCrown, FaUser, FaUsers } from "react-icons/fa";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const Statistic = () => {
  const axiosPublic = useAxiosPublic()

  const { data = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-users-stat")
      return data
    }
  })

  const normal = data.filter(item => item.role === "user")
  const premium = data.filter(item => item.role === "premium" || item.role === "admin")

  const stats = {
    totalUsers: data.length, normalUsers: normal.length, premiumUsers: premium.length
  }
  const { totalUsers, normalUsers, premiumUsers } = stats;

  const { ref: totalUsersRef, inView: totalUsersInView } = useInView({ triggerOnce: true, threshold: 1 });
  const { ref: normalUsersRef, inView: normalUsersInView } = useInView({ triggerOnce: true, threshold: 1 });
  const { ref: premiumUsersRef, inView: premiumUsersInView } = useInView({ triggerOnce: true, threshold: 1 });

  return (
    <div className="mb-10 flex flex-col justify-center items-center bg-background p-4">
      <h1 className="tracking-[0.5rem] py-10 font-bold text-gray-800 uppercase text-center">
        <div className="z-10 flex items-center justify-center">
          <div className={cn("group rounded-full lg:text-4xl md:text-3xl text-xl text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 text-nowrap")}>
            <AnimatedShinyText className="inline-flex text-neutral-600 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-700 hover:duration-300">
              <span>user information</span>
            </AnimatedShinyText>
          </div>
        </div>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Total Users Card */}
        <div ref={totalUsersRef} className="bg-gradient-to-r from-blue-900 to-blue-500 p-6 flex flex-col items-center rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4 shadow-lg">
            <FaUsers />
          </div>
          <h2 className="text-xl font-semibold text-white">Total Users</h2>
          {totalUsersInView && (
            <CountUp end={totalUsers} duration={2.5} className="text-4xl font-bold text-white" />
          )}
        </div>

        {/* Normal Users Card */}
        <div ref={normalUsersRef} className="bg-gradient-to-r from-green-900 to-green-600 p-6 flex flex-col items-center rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3">
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4 shadow-lg">
            <FaUser />
          </div>
          <h2 className="text-xl font-semibold text-white">Normal Users</h2>
          {normalUsersInView && (
            <CountUp end={normalUsers} duration={2.5} className="text-4xl font-bold text-white" />
          )}
        </div>

        {/* Premium Users Card */}
        <div ref={premiumUsersRef} className="bg-gradient-to-r from-yellow-900 to-yellow-500 p-6 flex flex-col items-center rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4 shadow-lg">
            <FaCrown />
          </div>
          <h2 className="text-xl font-semibold text-white">Premium Users</h2>
          {premiumUsersInView && (
            <CountUp end={premiumUsers} duration={2.5} className="text-4xl font-bold text-white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
