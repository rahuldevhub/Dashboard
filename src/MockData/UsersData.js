// ----------------------------------
// Data for Users table list
export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "custom_header",
    width: 100,
  },
  {
    field: "user",
    headerName: "Shop Owner Name",
    headerClassName: "custom_header",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cell_img_div">
          {/* <img
            className="cell_img"
            src="https://sachinsamal005.netlify.app/img/sachin-samal.png"
            alt="avatar"
          /> */}
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    headerClassName: "custom_header",
    width: 230,
    renderCell: (params) => {
      return (
        <p className={`${params.row.email}`}>
          {params.row.username.includes(" ")
            ? params.row.username.split(" ").join("").toLowerCase() +
              (params.row.age || "") +
              "@gmail.com"
            : params.row.username.toLowerCase() +
              (params.row.age || "") +
              "@gmail.com"}
        </p>
      );
    },
  },

  {
    field: "age",
    headerName: "phone Number",
    headerClassName: "custom_header",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   headerClassName: "custom_header",
  //   width: 150,
  //   renderCell: (params) => {
  //     return (
  //       <div
  //         className={`cell_status_div px-2 py-1 ${
  //           params.row.age < 40
  //             ? "active"
  //             : params.row.age > 40 && params.row.age < 60
  //             ? "pending"
  //             : "passive"
  //         }`}
  //       >
  //         {params.row.age < 40
  //           ? "Active"
  //           : params.row.age > 40 && params.row.age < 60
  //           ? "Pending"
  //           : "Passive"}
  //       </div>
  //     );
  //   },
  // },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    age: 9876543210,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    age: 9876543210,
  },
  {
    id: 3,
    username: "Lannister",
    age: 9876543210,
  },
  {
    id: 4,
    username: "Stark",
    age: 9876543210,
  },
  {
    id: 5,
    username: "Targaryen",
    age: 9876543210,
  },
  {
    id: 6,
    username: "Melisandre",
    age: 9876543210,
  },
  {
    id: 7,
    username: "Clifford",
    age: 9876543210,
  },
  {
    id: 8,
    username: "Frances",
    age: 9876543210,
  },
  {
    id: 9,
    username: "Roxie",
    age: 9876543210,
  },
  {
    id: 10,
    username: "Maxie",
    age: 9876543210,
  },
];

// ----------------------------------
