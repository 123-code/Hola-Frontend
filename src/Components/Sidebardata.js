import React from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import {Ioicons} from 'react-icons/io';
import {AiFillHome} from 'react-icons/ai';
import {BsBookmarkCheckFill} from 'react-icons/bs';
import {TiGroup} from 'react-icons/ti';
import {MdForum} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';

const Sdata = [
    {
    title: "Inicio",
    path:"/",
    icon:<AiFillHome/>,
    cName:"nav-text"
    },
    {
        title:"Agendar Terapia",
        path:"/agendar",
        icon:<BsBookmarkCheckFill/>,
        cName:"nav-text"

    },
    {
        title:"Conócenos",
        path:"/conocenos",
        icon:<TiGroup/>,
        cName:"nav-text"

    },
    {
        title:"Foro",
        path:"/foro",
        icon: <MdForum/>,
        cName:"nav-text"
    },
    {
        title:"Contactanos",
        path:"/contactanos",
        icon:<BsFillTelephoneFill/>,
        cName:"nav-text"
    }
]
export default Sdata;