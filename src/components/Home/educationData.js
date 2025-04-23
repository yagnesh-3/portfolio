// src/data/educationData.js
import { FaGraduationCap } from "react-icons/fa";
import lpu from "../../Assets/lpu.svg"
import rgukt from "../../Assets/rgutk.jpeg"
import aditya from "../../Assets/mcv10552_Aditya.jpg"
const educationData = [
    {
        id: 1,
        title: "B.Tech in Computer Science",
        subtitle: "Lovely Professional University",
        description: "Courses in Web Development, Software Engineering, Data Structures",
        date: "2022 - Present",
        icon: (
            <img
                src={lpu}
                alt="school"
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                }}
            />
        ),
        style: {
            background: "rgba(132, 132, 132, 0)",
            color: "#c770f0",
            arrow: "7px solid #fff",
        },
    },
    {
        id: 2,
        title: "Pre University Course",
        // title: "Rajiv Gandhi University of Knowledge Technologies (RGUKT)",
        subtitle: "Rajiv Gandhi University of Knowledge Technologies (RGUKT),Andhra Pradesh, India",
        description: (
            <>
                Completed 2-Year Pre University Course (PUC)
                <br />
                Group: <strong>M.P.C</strong> (Maths, Physics, Chemistry)
            </>
        ),
        date: "2020 - 2022",
        icon: (
            <img
                src={rgukt}
                alt="school"
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                }}
            />
        ),
        style: {
            background: "rgba(132, 132, 132, 0)",
            color: "#c770f0",
            arrow: "7px solid #fff",
        },
    },
    {
        id: 3,
        title: "Matriculation (10th Grade)",
        subtitle: "Aditya E.M High School, Amalapuram,Andhra Pradesh",
        description: "Completed primary and secondary education",
        date: "2019 - 2020",

        icon: (
            <img
                src={aditya}
                alt="school"
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                }}
            />
        ),
        style: {
            background: "rgba(132, 132, 132, 0)",
            color: "#c770f0",
            arrow: "7px solid #fff",
        },
    },

];

export default educationData;
