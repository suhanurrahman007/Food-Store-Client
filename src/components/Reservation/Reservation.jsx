import { useEffect } from "react";
import reservation from "../../assets/make-a-reservation.jpg";
import AOS from "aos";

const Reservation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
    return (
      <div>
        <div className="hero min-h-screen px-5 md:px-16 lg:px-20 py-14 bg-[#151620] text-white">
          <div className="hero-content grid gap-16 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">MAKE ONLINE RESERVATION</h1>
              <p className="py-6">
                Opens 8:00 AM – 10:00 PM, every day of the week
              </p>

              <img data-aos="zoom-in" src={reservation} alt="" />
              <p className="mt-7 text-sm text-gray-400 text-justify">
                Users select a date and time, input their details, and get
                instant confirmation. Admins can manage these bookings via a
                simple panel. The system is mobile-friendly and tested for
                reliability.
              </p>
            </div>
            <div
              className="flex-shrink-0 w-full"
              
            >
              <form className="card-body space-y-5">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className="input border-white rounded-none bg-[#151620]"
                    required
                  />
                </div>

                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input border-white rounded-none bg-[#151620]"
                    required
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <select
                    className="input border-white rounded-none bg-[#151620]"
                    required
                  >
                    <option value="" disabled selected>
                      No. of guests
                    </option>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guest</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guest</option>
                    <option value="6">6 guests</option>
                    <option value="7">7 guest</option>
                    <option value="8">8 guests</option>
                  </select>
                </div>

                <div className="form-control">
                  <input
                    type="date"
                    placeholder="Date"
                    className="input border-white rounded-none bg-[#151620]"
                    required
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="form-control"
                >
                  <input
                    type="time"
                    placeholder="Time"
                    className="input border-white rounded-none bg-[#151620]"
                    required
                  />
                </div>

                <div
                  className="form-control mt-6"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <button className="btn bg-[#c5a35e] hover:bg-[#222335] font-normal text-white border-none rounded-none">
                    Make A Reservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Reservation;