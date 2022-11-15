import React from "react";
import vCardJS from "vcards-js";
import logo from "../constants/calbank-logo.webp";
import { useUserStore } from "../store";

const CardPage = () => {
  const { user } = useUserStore((state) => state);
  const vcf = vCardJS();

  console.log(user);

  const downloadCard = () => {
    vcf.firstName = `${user?.firstName} ${user?.otherNames} ${user?.lastName}`;
    vcf.title = user?.jobDescription;
    vcf.organization = `CALBank PLC, ${user?.department}`;
    vcf.workAddress = `${user?.address}, P.O.Box 14596 Accra-Ghana`;
    vcf.workEmail = user?.email;
    vcf.cellPhone = user?.phone1;
    vcf.workFax = "(233-302) 684676";
    // vcf.logo.attachFromUrl(logo);
    vcf.workPhone = "(233-302) 680061 - 69 680079";
    vcf.workUrl = "www.calbank.net";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", `data:,${vcf.getFormattedString()}`);
    linkElement.setAttribute("download", "card.vcf");
    linkElement.style.display = "none";
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
  };

  return (
    <div className="flex flex-col  overflow-auto px-2 items-center justify-center p-2 sm:p-6  white-glassmorphism h-[100vh]  ">
      {/* <a href={url} id="download" download="card.vcf"> */}
      <div className="px-4">
        <p className="text-[#f2f2f2] text-lg text-center">
          Click on Card to Download and
        </p>
        <p className="text-[#f2f2f2] text-lg text-center">
          Import to your Contact
        </p>
      </div>
      <div
        onClick={downloadCard}
        id="cardDownload"
        className={`relative p-3 px-4 justify-end items-start flex-col 
          sm:min-h-[240px] sm:h-[240px] sm:max-h-[240px] min-h-[400px] h-[400px] max-h-[400px]
         sm:min-w-[440px] sm:w-[440px] sm:max-w-[440px] min-w-[316px] w-[316px] max-w-[316px]
         mb-5 mt-2 bg-white shadow-4xl transform rotate-0 sm:rotate-0 rounded-md sm:rounded-md cursor-pointer`}
      >
        <div className="flex flex-col sm:flex-row w-full h-full gap-4 sm:gap-0">
          <div className="flex flex-col justify-center items-start sm:flex-[0.4] mt-20 sm:mt-0 pl-4 sm:pl-0">
            <h4 className="flex-wrap w-[100%] font-bold">
              {user?.firstName} {user?.otherNames} {user?.lastName}
            </h4>
            <p className="flex-wrap w-[100%] font-normal text-sm sm:text-xs">
              {user?.jobDescription}
            </p>
            <p className="flex-wrap w-[100%] font-normal text-sm sm:text-xs">
              {user?.department}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-start sm:flex-[0.6]">
            <img
              src={logo}
              alt="logo"
              className="absolute top-4 left-6 sm:static w-[200px] object-contain"
            />
            <div className="pl-4 sm:pl-2">
              <p className="flex-wrap w-[100%] font-normal text-sm sm:text-xs">
                CAL Bank Limited
              </p>
              <p className="flex-wrap w-[100%] font-normal text-sm sm:text-xs">
                {user?.address}
              </p>
              <p className="flex-wrap w-[100%] font-normal text-sm sm:text-xs">
                P.O.Box 14596 Accra-Ghana
              </p>
              <p className="flex-wrap w-[100%] font-normal text-sm sm:text-xs">
                Tel: (233-302) 680061 - 69 680079
              </p>
              <p className="flex-wrap w-[100%] font-normal text-sm sm:text-xs">
                Fax: (233-302) 684676
              </p>
              <p className="flex-wrap w-[100%] font-normal text-sm sm:text-xs">
                Mobile: {user?.phone1}
              </p>
            </div>

            <div className="pl-4 sm:pl-2">
              <p className="flex-wrap w-[100%] font-normal text-sm sm:text-xs">
                Email: {user?.email}
              </p>
              <p className="flex-wrap w-[100%] font-normal text-sm sm:text-xs">
                website: www.calbank.net
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
