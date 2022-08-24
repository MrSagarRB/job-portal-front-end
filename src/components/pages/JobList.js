import React from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const JobList = () => {
  let jobListData = [
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
    {
      Title: "React Developer",
      JobType: "Remote",
      PostedDate: "26/10/2022",
      ApplicationDeadline: "30/11/2022",
    },
  ];

  return (
    <div className="h-screen mt-[60px]">
      <div className="h-[80px] bg-[#F4F5F7] w-full mt-[60px] text-[25px] font-[600] flex items-center justify-center ">
        <p>My Jobs List</p>
      </div>
      <div className=" w-full p-5 ">
        <div className=" w-full border h-[650px]  overflow-y-scroll">
          <table className=" jobList-table  ">
            <tr className=" w-full">
              <th>Title</th>
              <th>Job Type</th>
              <th>Posted Date</th>
              <th> Application Deadline</th>
              <th> Action</th>
            </tr>

            {jobListData?.map((item) => {
              return (
                <tr>
                  <td>Laravel Developer</td>
                  <td>Full Time</td>
                  <td>12/06/2022</td>
                  <td> Full Time</td>
                  <td>
                    <div className="flex gap-3 ">
                      <RemoveRedEyeOutlinedIcon className="text-[#338573]" />
                      <CreateOutlinedIcon className="text-[#04BCF6]" />
                      <DeleteOutlinedIcon className="text-[#FA0606]" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobList;
