import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMessage, MdOutlinePhone } from "react-icons/md";


export default {
    title : "contact",
    description : "If you have any questions, inquiries, or would like to collaborate with us, we would love to hear from you. Please feel free to reach out using the contact information provided below:",
    team : [
        {
            position : "President",
            name : "Deolu Adediran"
        },
        {
            position : "Director of STEM",
            name : "Joshua Ojerinde"
        },
        {
            position : "Public Relations",
            name : "Olamide Akinola"
        },
        {
            position : "Logistics Team Lead",
            name : "Kemi Falola"
        },
        {
            position : "Health and Safety Consultant",
            name : "Bolaji Ogunbunmi"
        },
        {
            position : "Quality Control",
            name : "Favour Akinsanya"
        },
        {
            position : "Information Technology",
            name : "Tolu Thomas"
        },
    ],
    partners : [
        {
            uri : "../assets/alstein.webp",
            name : "ALSTEIN",
        },
        {
            uri : "../assets/adels.webp",
            name : "Adels",
        },
        {
            uri : "../assets/alstein.webp",
            name : "SageIQ",
        },
        {
            uri : "../assets/adels.webp",
            name : "The Vemoye Foundation",
        },
    ],
    contact : [
        {
            icon : <MdOutlineMessage className="w-[40px] h-[40px] text-accent hover:bg-accent hover:text-slate-100 rounded-md bg-transparent border-accent border-2 p-1"/>,
            text : "Chat to us",
            value : "info@scienceigniteafrica.org"
        },
        {
            icon : <MdOutlinePhone className="w-[40px] h-[40px] text-accent hover:bg-accent hover:text-slate-100 rounded-md bg-transparent border-accent border-2 p-1"/>,
            text : "Call us",
            value : "+2347025297668"
        },
        {
            icon : <CiLocationOn className="w-[40px] h-[40px] text-accent hover:bg-accent hover:text-slate-100 rounded-md bg-transparent border-accent border-2 p-1"/>,
            text : "Visit us",
            value : "5, Adeleye Street, Ijegun, Lagos. Block 10, Zone D, Central Market Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria."
        },
    ]
    
}